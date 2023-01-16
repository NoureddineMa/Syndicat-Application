import React from 'react'

function GeneratePdf() {

    

    return (
        <>
            <button className='bg-[#FF6E31] rounded px-7 py-3 text-white'>Print</button>
            <section className="">
                <div className="max-w-5xl mx-auto py-7 bg-white">
                    <article className="overflow-hidden">
                        <div className="bg-[white] rounded-b-md">
                            <div className="">
                                <div className="space-y-6 text-slate-700">
                                    <p className="text-xl font-extrabold tracking-tight uppercase py-5 font-body">
                                        Syndicat Application
                                    </p>
                                </div>
                            </div>

                            <div className="rounded border py-3 px-3">
                                <div className="flex flex-col mx-0 mt-8">
                                    <table className="min-w-full divide-y divide-slate-500">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0">
                                                Owner Name
                                                </th>
                                                <th scope="col" className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                                                Number Appartement
                                                </th>
                                                <th scope="col" className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                                                Date
                                                </th>
                                                <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0">
                                                Montant
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-slate-200">
                                                <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                                                    <div className="font-medium text-slate-700">Tesla Truck</div>
                                                    <div className="mt-0.5 text-slate-500 sm:hidden">
                                                        1 unit at $0.00
                                                    </div>
                                                </td>
                                                <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                                    48
                                                </td>
                                                <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                                    $0.00
                                                </td>
                                                <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                                                    $0.00
                                                </td>
                                            </tr>
                                           
                                            {/* Here you can write more products/tasks that you want to charge for*/}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th scope="row" colSpan={3} className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                                                    Subtotal
                                                </th>
                                                <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                                                    $0.00
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className="mt-48 p-9">
                                <div className="border-t pt-9 border-slate-200">
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

        </>
    )
}

export default GeneratePdf