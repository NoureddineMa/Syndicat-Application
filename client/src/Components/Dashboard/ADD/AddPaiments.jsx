import React from 'react'

function AddPaiments() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">

          <form action className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">


            
           {/* code date picker */}
           <div>
              <label htmlFor="password" className="text-sm text-black font-medium">Enter Date Payment : </label>
              <div className="relative mt-1">
                <input type="date" className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter Montant Appartement" />
              </div>
            </div>
           {/* end date picker  */}

           {/* code date picker */}
            <div>
              <label htmlFor="texte" className="text-sm text-black font-medium">Enter Montant : </label>
              <div className="relative mt-1">
                <input type="texte" className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter Montant Appartement" />
              </div>
            </div>

            <div className="inline-block relative w-64">
            <label htmlFor="password" className="text-sm text-black font-medium">Choose Appartement Number : </label>
              <select className="block  text-black appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Choose a Appartement Number</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>

            <div className="inline-block relative w-64">
            <label htmlFor="password" className="text-sm text-black font-medium">CIN Owner : </label>
              <select className="block  text-black appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Choose a CIN Owner </option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            
            <button type="submit" className="block w-full rounded-lg bg-[#00ABB3] px-5 py-3 text-sm font-medium text-white">
              ADD
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddPaiments