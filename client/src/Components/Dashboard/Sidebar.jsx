import React, { useContext } from 'react'
import Logout from './Logout'
import { Outlet } from 'react-router-dom'
import { Link, } from 'react-router-dom'
import UserContext from '../context/UserContext'
import Image from '../../images/pdp.jpg'


function Sidebar() {

  const { user } = useContext(UserContext)


  return (
    <div className="antialiased  w-full min-h-screen text-slate-300 relative py-4 bg-[#1A120B]">
      <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
        <div id="menu" className="bg-[#3C4048] col-span-3 rounded-lg p-4 ">
          <Link to='/Dashboard'>
            <h1 className="font-bold text-lg ml-7 my-5 lg:text-3xl bg-gradient-to-br  via-white/50 to-transparent bg-clip-text text-[#FAC213]">Dashboard<span className="text-[#FAC213]">.</span></h1>
          </Link>
          <hr className="my-2 border-slate-700" />
          <div id="menu" className="flex flex-col space-y-2 my-5">

            <div className="flex  rounded-b-3xl  space-y-5 flex-col items-center py-7">
              <img className="h-28 w-28 rounded-full" src={Image} alt="User" />
              <p> <span className="h1 mb-11 py-4 font-bold text-white">{user.First_Name}  {user.Second_Name}</span></p>
            </div>


            <Link to='/Dashboard'>
              <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center mb-7 ml-3 ">
                <svg className='mx-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 18V15M10.07 2.82L3.14001 8.37C2.36001 8.99 1.86001 10.3 2.03001 11.28L3.36001 19.24C3.60001 20.66 4.96001 21.81 6.40001 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.99 20.86 8.37L13.93 2.83C12.86 1.97 11.13 1.97 10.07 2.82Z" stroke="#FAC213" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className='ml-7'>
                  <p className="font-bold text-base lg:text-lg text-white  leading-4 group-hover:text-indigo-400">Dashboard</p>
                  <p className="text-[#FAC213] text-sm hidden md:block">Vist Dashboard</p>
                </div>
              </div>
            </Link>

            <Link to='/Appartements'>
              <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center mb-7 ml-3">
                <svg className='mx-2'  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 8C3 8 2 9 2 11V19C2 21 3 22 5 22H13C11 22 10 21 10 19V8M5 8H10M5 8V6C5 4.9 5.9 4 7 4H10.11C10.03 4.3 10 4.63 10 5V8M14 8V13M18 8V13M6 13V17M17 17H15C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17Z" stroke="#FAC213" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19Z" stroke="#FAC213" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className='ml-7'>
                  <p className="font-bold text-base lg:text-lg text-white  leading-4 group-hover:text-indigo-400">Appartements</p>
                  <p className="text-[#FAC213] text-sm hidden md:block">Manage Appartements</p>
                </div>
              </div>
            </Link>


            <Link to='/Clients'>
              <div className="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center mb-7 ml-3">
                <svg className='mx-2'  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.4536 10.99 16.3664 10.99 16.28 11M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C7.6822 10.831 6.59464 10.3468 5.79763 9.51996C5.00062 8.69308 4.55674 7.58845 4.56 6.44C4.56 3.99 6.54 2 9 2C10.1762 1.97878 11.3127 2.42569 12.1595 3.24241C13.0062 4.05913 13.4938 5.17876 13.515 6.355C13.5362 7.53123 13.0893 8.66772 12.2726 9.51445C11.4559 10.3612 10.3362 10.8488 9.16 10.87ZM4.16 14.56C1.74 16.18 1.74 18.82 4.16 20.43C6.91 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.92 12.73 4.16 14.56Z" stroke="#FAC213" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div>
                  <p className="font-bold text-base lg:text-lg text-white  leading-4 group-hover:text-indigo-400">Owners</p>
                  <p className="text-[#FAC213]  text-sm hidden md:block">Manage Owners</p>
                </div>
              </div>
            </Link>




            <Link to='/Paiments' >
              <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center mb-7 ml-3 ">
                <svg className='mx-2'  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51 10.94 9.51 10.02C9.51 9.18 10.16 8.49 10.96 8.49H12.84C13.76 8.49 14.51 9.27 14.51 10.24M12 7.5V16.5" stroke="#FAC213" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2M22 6V2M22 2H18M22 2L17 7" stroke="#FAC213" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className='hover'>
                  <p className="font-bold text-base lg:text-lg text-white  leading-4 group-hover:text-indigo-400">Paiments</p>
                  <p className="text-[#FAC213]  text-sm hidden md:block">Manage Paiments</p>
                </div>
              </div>
            </Link>

            <Link to='/Settings'>
              <div className="relative  flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center mb-16 ml-3 ">
                <svg className='mx-2'  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15Z" stroke="#FAC213" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.8041 19.969 5.48558 19.5553 5.35435 19.0698C5.22311 18.5842 5.28988 18.0664 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z" stroke="#FAC213" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div>
                  <p className="font-bold text-base lg:text-lg text-white  leading-4 group-hover:text-indigo-400">Settings</p>
                  <p className="text-[#FAC213]  text-sm hidden md:block">Manage Informations</p>
                </div>
              </div>
            </Link>



            <div className="flex flex-col  mt-11 space-y-2 md:flex-row md:space-y-0 space-x-2 items-center ml-3  ">
              <svg className='mx-2'  width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.9 7.56001C9.21 3.96001 11.06 2.49001 15.11 2.49001H15.24C19.71 2.49001 21.5 4.28001 21.5 8.75001V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24 20.08 8.91 16.54M15 12H3.62M5.85 8.65001L2.5 12L5.85 15.35" stroke="#FAC213" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <Logout />
            </div>

          </div>
        </div>
        <div id="content" className="bg-[#1A120B] col-span-9 rounded-lg p-6">
          <div className='bg-[#3C4048] py-4 px-4 rounded-lg'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar