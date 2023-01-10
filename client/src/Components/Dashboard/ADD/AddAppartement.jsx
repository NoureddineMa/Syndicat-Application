import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddAppartement() {

  const navigate = useNavigate()
  const [Name_Residence, setNameResidence] = useState("");
  const [Appartement_number, setNumeroAppartement] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    return setNameResidence(e.target.value)
  }

  const handleNumero = (e) => {
    return setNumeroAppartement(e.target.value)
  }

  const API_URL = 'http://localhost:3001/api/admin/appartement'

  const token = localStorage.getItem("token")

  const submitHandler = async (e) => {
    e.preventDefault();
    const appartement = {
      Name_Residence,
      Appartement_number
    }
    try {
      const res = await axios.post(API_URL, appartement, {
        headers: { Authorization: `Bearer ${token}` }
      }).then((res) => {
        console.log(res.data.message);
        setMessage(res.data.message)
        navigate('/Appartements')
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
              {/* input name résidence  */}
              <label htmlFor="email" className="text-sm font-medium text-black">Name Résidence :</label>
              <div className="relative mt-1">
                <input value={Name_Residence} onChange={handleName} type="input" className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter Name Of Résidence" />
              </div>
            </div>
            {/* input number appartement :  */}
            <div>
              <label htmlFor="password" className="text-sm text-black font-medium">Numero Appartement : </label>
              <div className="relative mt-1">
                <input value={Appartement_number} onChange={handleNumero} type="input" className="w-full rounded-lg text-black border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter Numero of Appartement" />
              </div>
            </div>
            {/* input submit form  */}
            <button onClick={submitHandler} type="submit" className="block w-full rounded-lg bg-[#00ABB3] px-5 py-3 text-sm font-medium text-white">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddAppartement