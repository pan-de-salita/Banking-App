import { Link } from "react-router-dom";

const inputClasses = 'w-full border-solid border-2 border-[#17171B] rounded-[5px] p-[5px]';

class User {
  constructor(firstName, lastName, email, password, accountBalance) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.userID = Math.random();
    this.isAdmin = false;
    this.accountBalance = accountBalance;
  }
}

export default function CreateUser() {

  function createUserFromFormResults(e) {
    e.preventDefault();
    const newUser = new User(...[...e.target.elements].map(input => input.value));
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  }

  return (
    <>
      <div>
        <h2 className='text-[2.5rem] font-bold pb-10'>$_Create User</h2>
        <form onSubmit={createUserFromFormResults} className='flex flex-col gap-4'>
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
          <button className='mt-10 text-white'>Submit</button>
        </form >
        <Link to='/root/user-list'>View User Lists</Link><br></br>
        <Link to='/root/get-balance'>View Account Balance</Link>
      </div>
    </>
  );
}

