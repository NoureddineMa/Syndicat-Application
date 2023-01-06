import {useState , createContexte }   from 'react'


const userContext = createContexte();

const UserProvider = ({Children}) => {

    const [user, setUser] = useState({});
    
    return (
        <userContext.Provider value={{user , setUser}} >
            {Children}
        </userContext.Provider>
    )
}

export default userContext;
export {UserProvider};
