import { Link, Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div className='w-screen h-screen flex flex-col-reverse md:flex-row lg:flex-row'>
        <nav className='p-8 flex md:flex-col lg:flex-col justify-start gap-4 outline-2 outline-dashed outline-blue-500'>
          <h2 className='invisible lg:visible'>R O O T</h2>
          <ul className='flex flex-row md:flex-col lg:flex-col gap-4'>
            <li>
              <Link to='/root/create-user'>Create User</Link>
            </li>
            <li>
              <Link to='/root/deposit'>Deposit</Link>
            </li>
          </ul>
        </nav>
        <div className='p-8 w-full h-screen flex justify-center items-center'>
          <Outlet />
        </div>
      </div>
    </>
  );
}
