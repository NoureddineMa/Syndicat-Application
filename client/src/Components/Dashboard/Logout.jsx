import { useNavigate } from "react-router-dom"

function Logout() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear()
        navigate('/')
    }

    return (
        <>
            <div className='hover mt-11'>
                <button onClick={logout} className="text-[#FF6E31]  text-sm hidden md:block">Logout</button>
            </div>
        </>
    )
}

export default Logout