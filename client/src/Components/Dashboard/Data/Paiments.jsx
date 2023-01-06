import React from 'react'

function Paiments() {
  return (
    <div>
    <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
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
                    Update
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                    Delete
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
    )
}

export default Paiments