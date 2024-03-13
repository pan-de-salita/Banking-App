import { Link, Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <h1>i am the Root page</h1>
      <Link to='/root/create-user'>Create User</Link>
      <Link to='/root/deposit'>Deposit</Link>
      <Outlet />
    </>
  );
}
