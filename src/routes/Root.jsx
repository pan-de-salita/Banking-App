import { Link, Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div className='w-screen h-screen flex'>
        <div className='p-8 w-40 flex flex-col justify-start gap-4 outline-2 outline-dashed outline-blue-500'>
          <h2>L O G O</h2>
          <Link to='/root/create-user'>Create User</Link>
          <Link to='/root/deposit'>Deposit</Link>
        </div>
        <div className='w-full flex justify-center items-center'>
          <Outlet />
        </div>
      </div>
    </>
  );
}
