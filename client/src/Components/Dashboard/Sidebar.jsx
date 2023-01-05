import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className="antialiased w-full min-h-screen text-slate-300 relative py-4 bg-[#439A97]">
        <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
          <div id="menu" className="bg-[#CBEDD5] col-span-3 rounded-lg p-4 ">
            <Link to='/'>
            <h1 className="font-bold text-lg ml-7 my-5 lg:text-3xl bg-gradient-to-br text-black via-white/50 to-transparent bg-clip-text text-transparent">Dashboard<span className="text-indigo-400">.</span></h1>
            </Link>
            <hr className="my-2 border-slate-700" />
            <div id="menu" className="flex flex-col space-y-2 my-5">

            <Link to='/'>
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center mb-7 hover">
                   
                  <div className='ml-7'>
                    <p className="font-bold text-base lg:text-lg text-black  leading-4 group-hover:text-indigo-400">Dashboard</p>
                    <p className="text-black text-sm hidden md:block">Vist Dashboard</p>
                  </div>
                </div>
                </Link>

                <Link to='/Appartements'>
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center mb-7 hover">
                   
                  <div className='ml-7'>
                    <p className="font-bold text-base lg:text-lg text-black  leading-4 group-hover:text-indigo-400">Appartements</p>
                    <p className="text-black text-sm hidden md:block">Manage Appartements</p>
                  </div>
                </div>
                </Link>


                <Link to='/Clients'>
                <div className="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center mb-7 ml-7 ">
                  <div>
                    <p className="font-bold text-base lg:text-lg text-black  leading-4 group-hover:text-indigo-400">Clients</p>
                    <p className="text-black  text-sm hidden md:block">Manage Client</p>
                  </div>
                </div>
                </Link>


                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                </div>


                <Link to='/Paiments' >
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center ml-7 hover">
                  <div>
                    <p className="font-bold text-base lg:text-lg text-black  leading-4 group-hover:text-indigo-400">Paiments</p>
                    <p className="text-black  text-sm hidden md:block">Manage Paiments</p>
                  </div>
                </div>
                </Link>

                <Link to='/Paiments' >
                <div className="flex mt-11 flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center ml-7 hover">
                  <div>
                    <p className="font-bold text-base lg:text-lg text-black  leading-4 group-hover:text-indigo-400">Logout</p>
                  </div>
                </div>
                </Link>


            </div>
          </div>
          <div id="content" className="bg-[#CBEDD5] col-span-9 rounded-lg p-6">
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Sidebar