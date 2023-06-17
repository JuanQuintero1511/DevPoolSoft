import {Routes, Route} from "react-router-dom";
import { Landing } from './components/Landing';
import  Home  from './components/Home';
import {Register} from './components/Register'
import { Login } from './components/Login';
import { useLocation } from 'react-router-dom';
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import { Profile } from "./components/Profile";
import Community from "./components/Community";
import Detail from "./components/DetailCommunity";
import JobsOffers from "./components/JobsOffers";



function App() {
 
const location = useLocation();

  return (
    <>
    <div>
     {location.pathname !== "/" && location.pathname !=="/login" && location.pathname !== "/register"  && <Nav/> }
     {location.pathname !== "/" && location.pathname !=="/login" && location.pathname !== "/register" && <SideBar/>}
      </div>

      <Routes>
        
        <Route path='/JobsOffers' element={<JobsOffers />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={ <Landing />}/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/home' element={ <Home />}/>
        <Route path='/profile' element={ <Profile />}/>
        <Route path='/community' element={ <Community />}/>
        <Route path="/community/:id" element={ <Detail />} />

      </Routes>
    </>
  )
}

export default App
