import React from 'react'
import { Link } from 'react-router-dom'

function Paiments() {
  return (
    <div>
        <div className='flex  justify-between '>
            <h1 className='text-black font-xl font-bold ml-2 mt-4  d-flex'>ADD Paiment</h1>
            <Link to="/AddPaiments">
            <button className='bg-[#00ABB3] text-white px-11 py-2'>Add</button>
            </Link>
            </div>
    <div className="overflow-hidden py-5 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 text-sm dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                    Date
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                    Montant
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                    CIN
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                    Numéro D'appartement
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    2002-12-09
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                    4500 <span className='font-bold'>DH</span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                    AA103212
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                    A12
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                        
                                <button className="group relative inline-block text-sm font-medium text-[#DC0000] focus:outline-none focus:ring active:text-[#DC0000]">
                                    <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#DC0000] transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
                                    <span className="relative block border border-current bg-white px-8 py-3">
                                        Delete
                                    </span>
                                </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
    )
}

export default Paiments