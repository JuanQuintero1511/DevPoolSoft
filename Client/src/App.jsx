import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Landing} from './components/Landing';
import Home from './components/Home';
import { Register } from './components/Register'
import { Login } from './components/Login';
import Nav from "./components/Nav";
import SideBar from "./components/sidebar";
import { Profile } from "./components/Profile";
import Community from "./components/Community";
import Detail from "./components/DetailCommunity";
import JobsOffers from "./components/JobsOffers";
import InProgress from "./components/InProgress";
import MyPostCommunity from "./components/MyPostsCommunity";
import {useEffect} from "react";
import { userLogin_App } from "./redux/actions";
import { useDispatch} from 'react-redux';
import Test1 from "./components/test1";
import CommentsCommunity from "./components/CommentsCommunity";
import MercadoPagoButton from "./components/MercadoPago/MercadoPagoButton";

import  Dashboard  from "./components/Dashboard/Dashboard";
// import  HomeDash  from "./components/Dashboard/HomeDash";






function App() {
 
const location = useLocation();
const dispatch = useDispatch();

useEffect(() => {
  const userName = localStorage.getItem('userName');
  if (userName) dispatch(userLogin_App(userName));
}, [])


  return (
    <>
    <div>
     {location.pathname !== "/" && location.pathname !=="/login" && location.pathname !== "/register"  && <Nav/> }
     {location.pathname !== "/" && location.pathname !=="/login" && location.pathname !== "/register" && <SideBar/>}
      </div>

      <Routes>
        
        <Route path='/' element={ <Landing />}/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/home' element={ <Home />}/>
        <Route path='/JobsOffers' element={<JobsOffers />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={ <Profile />}/>
        <Route path='/community' element={ <Community />}/>
        <Route path="/community/:id" element={ <Detail />} />
        <Route path="/community/myposts/:id" element={ <MyPostCommunity />} />
        <Route path="/inprogress" element={ <InProgress /> }/>
        <Route path= "/test1" element={<Test1/>} / >
        <Route path= "/comments/:id" element={<CommentsCommunity/>} / >
        <Route path="/test2" element={<MercadoPagoButton/>} />
        
        //Dashboard routes
        <Route path="/dashboard/*" element={<Dashboard />} />
        {/* <Route path="/*" element={<HomeDash />} /> */}
        

      </Routes>
    </>
  )
}

export default App
