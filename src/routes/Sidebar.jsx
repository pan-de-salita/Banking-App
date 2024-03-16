import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SiGnubash } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { TbStackPush } from "react-icons/tb";
import { LuGitPullRequestDraft } from "react-icons/lu";
import { FiSend } from "react-icons/fi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Sidebar() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      const newWindowWidth = window.innerWidth;
      newWindowWidth < 777 ? setIsSidebarOpen(true) : setIsSidebarOpen(false);
      setWindowWidth(newWindowWidth);
    }

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  function handleOpenSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function isActive(path) {
    return location.pathname === path;
  }

  function getNavClasses() {
    const baseClasses = 'w-screen p-5 md:p-7 lg:p-7 flex justify-around md:flex-col lg:flex-col md:justify-center lg:justify-center gap-4 bg-[#17171B]';
    const width = isSidebarOpen ? 'md:w-[27%] lg:w-[20%]' : 'md:w-[5rem] lg:w-[5rem]';
    const transitionClasses = 'transition-all duration-300 ease-in-out';
    return `${baseClasses} ${width} ${transitionClasses}`;
  }

  function getLinkClass(path, isActivePath) {
    const baseClasses = 'flex gap-4 hover:text-white transition-transform duration-200 ease-in-out';
    const textColor = isActivePath(path) ? 'text-white' : 'text-[#A9A9AB]';
    const translateY = isActivePath(path) ? '' : 'hover:translate-y-[-4px]';
    return `${baseClasses} ${textColor} ${translateY}`;
  }

  return (
    <>
      <nav className={getNavClasses()}>
        <div className='hidden md:flex lg:flex flex-col items-center'>
          <SiGnubash className='hidden md:block lg:block' size={isSidebarOpen ? 85 : 50} color='white' />
          <span className='sm:block text-sm md:text-xl lg:text-2xl text-white'>
            {isSidebarOpen ? 'B A S H _' : ''}
          </span>
        </div>
        {/*  TODO: refactor using .map */}
        <ul className='md:h-screen lg:h-screen flex md:flex-col lg:flex-col gap-6 md:gap-8 lg:gap-8 md:pt-[3.8rem] lg:pt-[3.8rem]'>
          <div className='flex md:flex-col lg:flex-col gap-8'>
            <li className='flex'>
              <Link className={getLinkClass('/root/create-user', isActive)} to='/root/create-user'>
                <CgProfile className='hidden md:block lg:block' size={25} />
                <span className='sm:block text-sm md:text-xl lg:text-xl'>
                  {isSidebarOpen ? 'User' : ''}
                </span>
              </Link>
            </li>
            <li className='flex'>
              <Link className={getLinkClass('/root/deposit', isActive)} to='/root/deposit'>
                <TbStackPush className='hidden md:block lg:block' size={25} />
                <span className='sm:block text-sm md:text-xl lg:text-xl'>
                  {isSidebarOpen ? 'Deposit' : ''}
                </span>
              </Link>
            </li>
            <li className='flex'>
              <Link className={getLinkClass('/root/create-user', isActive)} to='/root/create-user'>
                <LuGitPullRequestDraft className='hidden md:block lg:block' size={25} />
                <span className='sm:block text-sm md:text-xl lg:text-xl'>
                  {isSidebarOpen ? 'Withdraw' : ''}
                </span>
              </Link>
            </li>
            <li className='flex'>
              <Link className={getLinkClass('/root/create-user', isActive)} to='/root/create-user'>
                <FiSend className='hidden md:block lg:block' size={25} />
                <span className='sm:block text-sm md:text-xl lg:text-xl'>
                  {isSidebarOpen ? 'Send' : ''}
                </span>
              </Link>
            </li>
          </div>
          <div className='h-full flex flex-col justify-between'>
            <div></div>
            <li>
              <div className='flex justify-between'>
                <Link className={`${getLinkClass('/root/create-user', isActive)} ${isSidebarOpen ? 'block' : 'hidden'}`} to='/root/create-user'>
                  <RiLogoutCircleRLine className='hidden md:block lg:block' size={25} />
                  <span className='sm:block text-sm md:text-xl lg:text-xl md:pr-[1rem] lg:pr-[1rem]'>
                    {isSidebarOpen ? 'Logout' : ''}
                  </span>
                </Link>
                <div>
                  {isSidebarOpen ? (
                    <MdKeyboardDoubleArrowLeft className='cursor-pointer hidden md:block lg:block transition-transform duration-200 ease-in-out hover:translate-x-[-3px]' size={30} color='white' onClick={handleOpenSidebar} />
                  ) : (
                    <MdKeyboardDoubleArrowRight className='cursor-pointer hidden md:block lg:block transition-transform duration-200 ease-in-out hover:translate-x-[3px]' size={30} color='white' onClick={handleOpenSidebar} />
                  )}
                </div>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </>
  )
}
