import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Sidebar from './Components/Dashboard/Sidebar.jsx';
import Counts from './Components/Dashboard/Data/Counts';
import Paiments from './Components/Dashboard/Data/Paiments.jsx';
import Appartements from './Components/Dashboard/Data/Appartements.jsx';
import Client from './Components/Dashboard/Data/Client.jsx';
import { UserProvider } from './Components/context/UserContext.js';



function App() {
  return (
    <UserProvider>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />} />


       <Route  element={<Sidebar />} >
            <Route path='/Dashboard' element={<Counts />}/>
            <Route path='/Appartements' element={<Appartements/>} />
            <Route path='/Clients' element={<Client/>} />
            <Route path='/Paiments' element={<Paiments/>} />
       </Route>
    </Routes>
    </BrowserRouter>
    </UserProvider>
  )
}

export default App;
