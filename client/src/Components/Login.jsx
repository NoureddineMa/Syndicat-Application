import React from "react";
import '../App.css'

function Login() {
    return (
        <div className="bg-[#439A97]">

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg bottom">
                <h1 className="text-center text-4xl m-5 font-bold text-back sm:text-3xl text-white">
                        Welcome Admin
                    </h1>
                    <p className="mx-auto mt-4 max-w-md text-center text-[#CBEDD5]">
                    Application de syndicat pour gérer les paiement pour chaque appartement
                    </p>
                    <form action className="mt-6 mb-7 space-y-4 rounded-lg p-8 shadow-2xl bg-[#F1F6F5]">
                        <p className="text-lg title font-bold text-[#439A97]">Sign in to your account</p>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <div className="relative mt-1">
                                <input type="email" id="email" className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter email" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-medium">Password</label>
                            <div className="relative mt-1">
                                <input type="password" id="password" className="w-full rounded-lg border-gray-500 p-4 pr-12 text-sm shadow-sm" placeholder="Enter password" />
                            </div>
                        </div>

                        <button type="submit" className="block w-full rounded-lg bg-[#439A97] px-5 py-3 text-sm font-medium text-white">
                            Sign in
                        </button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Login