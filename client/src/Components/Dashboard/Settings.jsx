import React, { useContext } from 'react'
import UserContext from '../context/UserContext'




function Settings() {

    const { user } = useContext(UserContext)

    console.log(user);
    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl text-black">Settings</h1>
                </div>
                <form className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                    <div >
                        <label htmlFor="texte" className="text-black">First Name</label>
                        <div className="relative">
                            <input type="text" className="w-full rounded-lg border-gray-500 p-4 pr-12 text-black shadow-sm" placeholder={user.First_Name} />
                        </div>
                    </div>

                    <div >
                        <label htmlFor="texte" className="text-black">Second Name</label>
                        <div className="relative">
                            <input type="texte" className="w-full rounded-lg border-gray-500 p-4 pr-12 text-black shadow-sm" placeholder={user.Second_Name}  />
                        </div>
                    </div>

                    <div >
                        <label htmlFor="texte" className="text-black">Phone Number</label>
                        <div className="relative">
                            <input type="texte" className="w-full rounded-lg border-gray-500 p-4 pr-12 text-black shadow-sm" placeholder={user.Phone_Number}  />
                        </div>
                    </div>

                    <div >
                        <label htmlFor="texte" className="text-black">Email</label>
                        <div className="relative">
                            <input type="texte" className="w-full rounded-lg border-gray-500 p-4 pr-12 text-black shadow-sm" placeholder={user.Email}  />
                        </div>
                    </div>

                   
                    <div className="flex items-center justify-between">

                        <button type="submit" className=" inline-block rounded-lg bg-[#FF6E31] px-5 py-3 text-sm font-medium text-white">
                            UPDATE INFORMATIONS
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Settings