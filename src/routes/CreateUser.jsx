import { useState } from 'react';
import ModalForCreateUser from './ModalForCreateUser';

const inputClasses = 'w-full border-solid border-2 border-[#17171B] rounded-[5px] p-[5px]';

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
  const [isInvalidAttempt, setIsInvalidAttempt] = useState(false);

  function handleForm(e) {
    e.preventDefault();
    const newUser = createNewUser(e.target.elements);
    const existingUsers = getExistingUsers();

    if (!isDuplicateUser(newUser, existingUsers)) {
      localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
    } else {
      setIsInvalidAttempt(true);
      console.log('error, user exists');
    }
  }

  function createNewUser(formInput) {
    return new User(...[...formInput].map(input => input.value));
  }

  function getExistingUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
  }

  function isDuplicateUser(newUser, existingUsers) {
    return existingUsers.some(user => user.email === newUser.email);
  }

  return (
    <>
      <div className='relative w-full h-full flex justify-center items-center'>
        <div className='md:w-[22rem] lg:w-[22rem]'>
          <h2 className='text-4xl font-bold pb-3'>$_Create User</h2>
          <form onSubmit={handleForm} className='flex flex-col gap-4'>
            <label>
              First name:
              <input className={inputClasses} type="text" placeholder='juan' />
            </label>
            <label>
              Last name:
              <input className={inputClasses} type="text" placeholder='dela cruz' />
            </label>
            <label>
              Email:
              <input className={inputClasses} type="text" placeholder='juandelacruz@xyz.com' />
            </label>
            <label>
              Password
              <input className={inputClasses} type="password" placeholder='password' />
            </label>
            <label>
              Balance
              <input className={inputClasses} type="number" placeholder='00.00' />
            </label>
            <button className='mt-3 text-white rounded-lg'>Submit</button>
          </form >
        </div>
        <ModalForCreateUser visibility={isInvalidAttempt} onClose={() => setIsInvalidAttempt(false)} />
      </div>
    </>
  );
}
