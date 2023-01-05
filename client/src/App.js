import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Sidebar from './Components/Dashboard/Sidebar.jsx';
import Counts from './Components/Dashboard/Data/Counts';
import Paiments from './Components/Dashboard/Data/Paiments.jsx';
import Appartements from './Components/Dashboard/Data/Appartements.jsx';
import Client from './Components/Dashboard/Data/Client.jsx';



function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={<Login />} />


       <Route  element={<Sidebar />} >
            <Route path='/' element={<Counts />}/>
            <Route path='/Appartements' element={<Appartements/>} />
            <Route path='/Clients' element={<Client/>} />
            <Route path='/Paiments' element={<Paiments/>} />
       </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
