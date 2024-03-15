import { Link, Outlet, useLocation } from 'react-router-dom';
import { SiGnubash } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { TbStackPush } from "react-icons/tb";
import { LuGitPullRequestDraft } from "react-icons/lu";
import { FiSend } from "react-icons/fi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export default function Root() {
  const location = useLocation();

  function isActive(path) {
    return location.pathname === path;
  }

  function getLinkClass(path, isActivePath) {
    const baseClasses = 'flex items-center gap-2 text-sm md:text-xl lg:text-xl hover:text-white transition-transform duration-200 ease-in-out';
    const textColor = isActivePath(path) ? 'text-white' : 'text-[#A9A9AB]';
    const translateY = isActivePath(path) ? '' : 'hover:translate-y-[-4px]';
    return `${baseClasses} ${textColor} ${translateY}`;
  }

  return (
    <>
      <div className='w-screen h-screen flex flex-col-reverse hd:flex-row lg:flex-row'>
        <nav className='w-screen md:w-1/3 lg:w-1/5 p-5 md:p-10 lg:p-11 flex md:flex-col lg:flex-col justify-start gap-4 bg-[#17171B]'>
          <SiGnubash className='hidden md:block lg:block' size={85} color='white' />
          {/*  TODO: refactor using .map */}
          <ul className='md:h-screen lg:h-screen flex flex-row md:flex-col lg:flex-col gap-8 md:pt-[3.8rem] lg:pt-[3.8rem]'>
            <li>
              <Link className={getLinkClass('/root/create-user', isActive)} to='/root/create-user'>
                <CgProfile className='hidden md:block lg:block' size={25} />
                Users
              </Link>
            </li>
            <li>
              <Link className={getLinkClass('/root/deposit', isActive)} to='/root/deposit'>
                <TbStackPush className='hidden md:block lg:block' size={25} />
                Deposit
              </Link>
            </li>
            <li>
              <Link className={getLinkClass('/root/create-user', isActive)} to='/root/create-user'>
                <LuGitPullRequestDraft className='hidden md:block lg:block' size={25} />
                Withdraw
              </Link>
            </li>
            <li>
              <Link className={getLinkClass('/root/create-user', isActive)} to='/root/create-user'>
                <FiSend className='hidden md:block lg:block' size={25} />
                Send
              </Link>
            </li>
            <li className='hidden md:block md:h-[20rem] lg:block lg:h-[34rem]'>
              <div></div>
            </li>
            <li>
              <div className='flex justify-between'>
                <Link className={getLinkClass('/root/create-user', isActive)} to='/root/create-user'>
                  <RiLogoutCircleRLine className='hidden md:block lg:block' size={25} />
                  Logout
                </Link>
                <Link
                  className={`flex items-center gap-2 text-sm md:text-xl lg:text-xl hover:text-white ${isActive('/root/create-user') ? 'text-white' : 'text-[#A9A9AB]'}`}
                  to='/root/deposit'>
                  <MdKeyboardDoubleArrowLeft className='hidden md:block lg:block transition-transform duration-200 ease-in-out hover:translate-x-2' size={30} />
                </Link>
              </div>
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
