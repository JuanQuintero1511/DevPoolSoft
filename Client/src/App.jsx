import {Routes, Route} from "react-router-dom";
import { Landing } from './components/Landing';
import  Home  from './components/Home';
import {Register} from './components/Register'
import { Login } from './components/Login';
import { useLocation } from 'react-router-dom';
import Nav from "./components/Nav";
import SideBar from "./components/sidebar";


function App() {

const location = useLocation();

  return (
    <>
    <div>
     {location.pathname !== "/" && location.pathname !=="/login" && <Nav/>}
     {location.pathname !== "/" && location.pathname !=="/login" && <SideBar/>}
      </div>

      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={ <Landing />}/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/home' element={ <Home />}/>
      </Routes>
    </>
  )
}

export default App
