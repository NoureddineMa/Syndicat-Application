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
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Appartements