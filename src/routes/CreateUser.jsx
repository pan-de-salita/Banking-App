import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import useLocalStorage from '../utils/useLocalStorage';
import { toastSuccess, toastError } from '../utils/toasts';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const inputClasses = 'w-full border-solid border-2 border-[#17171B] rounded-[5px] p-[5px] md:p-[9px] lg:p-[9px]';

class User {
  constructor(firstName, lastName, email, password, accountBalance) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.userId = crypto.randomUUID();
    this.isAdmin = false;
    this.accountBalance = accountBalance;
  }
}

export default function CreateUser() {
  const [users, setUsers] = useLocalStorage('users', []);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 6 characters').required('Password is required'),
    accountBalance: Yup.number().required('Balance is required')
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema)
  });

  function onSubmit(data) {
    const newUser = new User(
      data.firstName,
      data.lastName,
      data.email,
      data.password,
      data.accountBalance);

    if (!isDuplicateUser(newUser, users)) {
      setUsers(prevUsers => [...prevUsers, newUser]);
      toastSuccess(`${data.firstName} added to etc/passwd!`);
      reset();
    } else {
      toastError('Error: Email already exists.');
    }
  };

  function isDuplicateUser(newUser, existingUsers) {
    return existingUsers.some(user => user.email === newUser.email);
  }

  return (
    <>
      <div className='relative w-full h-full flex flex-col justify-center items-center'>
        <div className='md:w-[30rem] lg:w-[30rem]'>
          <h2 className='text-4xl md:text-5xl lg:text-5xl font-bold pb-3 self-start'>Create User</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
            <label>
              <span className='text-lg font-[600]'>First name</span>
              <input {...register('firstName')} className={inputClasses} type="text" placeholder='Brian' required={true} />
              {errors.firstName && <p className='bg-[#b248fe] text-white p-2 rounded-[5px] font-[600]'>{errors.firstName.message}</p>}
            </label>
            <label>
              <span className='text-lg font-[600]'>Last name</span>
              <input {...register('lastName')} className={inputClasses} type="text" placeholder='Fox' required={true} />
              {errors.lastName && <p className='bg-[#b248fe] text-white p-2 rounded-[5px] font-[600]'>{errors.lastName.message}</p>}
            </label>
            <label>
              <span className='text-lg font-[600]'>Email</span>
              <input {...register('email')} className={inputClasses} type="text" placeholder='brian.fox@protonmail.com' required={true} />
              {errors.email && <p className='bg-[#b248fe] text-white p-2 rounded-[5px] font-[600]'>{errors.email.message}</p>}
            </label>
            <label>
              <span className='text-lg font-[600]'>Password</span>
              <div className='relative'>
                <input {...register('password')} className={inputClasses} type={isPasswordVisible ? "text" : "password"} placeholder='At least 6 chars long' required={true} />
                {isPasswordVisible ?
                  <IoMdEyeOff className='cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2' size={25} color='gray' onClick={() => setIsPasswordVisible(false)} />
                  : <IoMdEye className='cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2' size={25} color='gray' onClick={() => setIsPasswordVisible(true)} />}
              </div>
              {errors.password && <p className='bg-[#b248fe] text-white p-2 rounded-[5px] font-[600]'>{errors.password.message}</p>}
            </label>
            <label>
              <span className='text-lg font-[600]'>Balance</span>
              <input {...register('accountBalance')} className={inputClasses} type="text" placeholder='0.00' required={true} />
              {errors.accountBalance && <p className='bg-[#b248fe] text-white p-2 rounded-[5px] font-[600]'>{errors.accountBalance.message}</p>}
            </label>
            <div className='flex justify-end'>
              <button type='submit' className='w-[60%] bg-[#17171B] mt-6 p-[0.5rem] md:p-[1rem] lg:p-[1rem] text-lg font-[800] hover:italic'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
