import React from 'react'

function Counts() {

    return (
        <>
            <div className='lg:grid grid-cols-3 gap-4'>
                <div>
                    <div className="relative block rounded-sm border-t-4 border-[#FF6E31] p-8 pb-24 shadow-xl">
                        <h3 className="text-4xl text-[#FF6E31] font-bold">100+</h3>
                        <p className="mt-4 text-lg font-medium text-gray-500">
                            APPARTEMENTS
                           
                        </p>
                    </div>
                </div>
                <div>
                    <div className="relative block rounded-sm border-t-4 border-[#FF6E31] p-8 pb-24 shadow-xl">
                        <h3 className="text-4xl text-[#FF6E31] font-bold">100+</h3>
                        <p className="mt-4 text-lg font-medium text-gray-500">
                            CLIENTS
                        </p>
                    </div>
                </div>
                <div>
                    <div className="relative block rounded-sm border-t-4 border-[#FF6E31] p-8 pb-24 shadow-xl">
                        <h3 className="text-4xl text-[#FF6E31] font-bold">100+</h3>
                        <p className="mt-4 text-lg font-medium text-gray-500">
                            PAIMENTS
                        </p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counts