import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Sidebar from './Components/Dashboard/Sidebar.jsx';
import AddAppartement from './Components/Dashboard/ADD/AddAppartement.jsx';
import AddClient from './Components/Dashboard/ADD/AddClient.jsx';
import AddPaiments from './Components/Dashboard/ADD/AddPaiments.jsx';
import UpdateAppartement from './Components/Dashboard/Update/UpdateAppartement.jsx';
import Counts from './Components/Dashboard/Data/Counts';
import Paiments from './Components/Dashboard/Data/Paiments.jsx';
import Appartements from './Components/Dashboard/Data/Appartements.jsx';
import Client from './Components/Dashboard/Data/Client.jsx';
import { UserProvider } from './Components/context/UserContext.js';
import UpdateClient from './Components/Dashboard/Update/UpdateClient.jsx';




function App() {
  return (
    <BrowserRouter>
    <UserProvider>
    <Routes>
        <Route path='/' element={<Login />} />
       <Route  element={<Sidebar />} >
           <Route path='/Dashboard' element={<Counts />}/>
            <Route path='/Appartements' element={<Appartements/>} />
            <Route path='/AddAppartement' element={<AddAppartement/>} />
            <Route path='/UpdateAppartement' element={<UpdateAppartement/>} />
            <Route path='/Clients' element={<Client/>} />
            <Route path='/AddClients' element={<AddClient/>} />
            <Route path='/UpdateClient' element={<UpdateClient />} />
            <Route path='/Paiments' element={<Paiments/>} />
            <Route path='/AddPaiments' element={<AddPaiments />} />
       </Route>
    </Routes>
    </UserProvider>
    </BrowserRouter>
  )
}

export default App;
