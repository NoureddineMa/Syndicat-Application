import React from 'react'
import { useState ,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function AddClient() {

    const navigate = useNavigate()
    const [Name, setName] = useState("");
    const [CIN, setCin] = useState("");
    const [Phone_number, setPhone_number] = useState("");

    const handleName = (e) => {
      return setName(e.target.value)
    }

    const handleCIN = (e) => {
      return setCin(e.target.value)
    }

    const handePhoneNumer = (e) => {
      return setPhone_number(e.target.value)
    }

    const API =  "http://localhost:3001/api/admin/client"

    const token = localStorage.getItem("token")

    const submiHandler = async (e) => {
      e.preventDefault()
      const client = {
        Name,
        CIN,
        Phone_number
      }
      try {
        await axios.post(API, client , {
          headers : {Authorization : `Bearer ${token}`}
        }).then((res) => {
          console.log(res);
          navigate('/Clients')
        })
      } catch (error) {
        console.log(error);
      }
    }


    return (
        <>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    
    <form action className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
      <div>
        <label htmlFor="NameOwner" className="text-sm font-medium text-black">Name Owner :</label>
        <div className="relative mt-1">
          <input onChange={handleName} type="text"  className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter Name Of Owner" />
        </div>
      </div>
      <div>
        <label htmlFor="Cin" className="text-sm text-black font-medium">CIN : </label>
        <div className="relative mt-1">
          <input onChange={handleCIN} type="text"  className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter Number CIN" />
        </div>
      </div>
      <div>
        <label htmlFor="PhoneNumber" className="text-sm text-black font-medium">Phone Number : </label>
        <div className="relative mt-1">
          <input onChange={handePhoneNumer} type="text"  className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter Phone Numero" />
        </div>
      </div>
      <button onClick={submiHandler} type="submit" className="block w-full rounded-lg bg-[#00ABB3] px-5 py-3 text-sm font-medium text-white">
        ADD
      </button>
    </form>
  </div>
</div>

        </>
    )
}

export default AddClient