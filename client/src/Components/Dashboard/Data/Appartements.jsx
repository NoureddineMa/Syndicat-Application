import React from 'react'

function Appartements() {







    return (
        <div>
            <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                <table className="min-w-full divide-y divide-gray-200 text-sm dark:divide-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                                Name Residence
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                                Appartement Number
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                                John Doe
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                                24/05/1995
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                                <a className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" href="/download">
                                    <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
                                    <span className="relative block border border-current bg-white px-8 py-3">
                                        Download
                                    </span>
                                </a>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                                <a className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" href="/download">
                                    <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
                                    <span className="relative block border border-current bg-white px-8 py-3">
                                        Download
                                    </span>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Appartements