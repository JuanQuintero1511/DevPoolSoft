import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//* import que rompe
// import { userLogin_App } from "./redux/actions";


import { useLocation } from 'react-router-dom';
import { Landing } from './components/Landing';
import Home from './components/Home';
import { Register } from './components/Register'
import { Login } from './components/Login';
import Nav from "./components/Nav";
import SideBar from "./components/sidebar";
import { Landing } from "./components/Landing";
import Home from "./components/Home";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import Profile from "./components/Profile";
import Community from "./components/Community";
import Detail from "./components/DetailCommunity";
import JobsOffers from "./components/JobsOffers";
import InProgress from "./components/InProgress";
import MyPostCommunity from "./components/MyPostsCommunity";
<<<<<<<<< Temporary merge branch 1
import { useEffect } from "react";
import { userLogin_App } from "./redux/actions";
import { useDispatch } from 'react-redux';
import Test1 from "./components/test1";
import CommentsCommunity from "./components/CommentsCommunity";
import MercadoPagoButton from "./components/MercadoPago/MercadoPagoButton";
import Dashboard from "./components/Dashboard";
=========
import Test1 from "./components/test1";
import CommentsCommunity from "./components/CommentsCommunity";
import MercadoPagoButton from "./components/MercadoPago/MercadoPagoButton";
import  Dashboard  from "./components/Dashboard/Dashboard";
// import  HomeDash  from "./components/Dashboard/HomeDash";
>>>>>>>>> Temporary merge branch 2

import  Dashboard  from "./components/Dashboard/Dashboard";
import { IdProfile } from "./components/IdProfile";

import DevData from "./components/DevData";
import MyJobsPosts from "./components/MyJobsPosts";



function App() {
<<<<<<<<< Temporary merge branch 1

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const userName = localStorage.getItem('userName');
    if (userName) dispatch(userLogin_App(userName));
  }, [])
=========
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
>>>>>>>>> Temporary merge branch 2

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (userName) {
      dispatch(userLogin_App(userName))
        .then(() => {
          // Autenticación exitosa, permitir acceso a rutas protegidas
        })
        .catch(() => {
          // Autenticación fallida, redirigir al login
          navigate("/");
        });
    } else {
      // Si el usuario no está autenticado y no está en la página de login o registro, redirige al login
      if (
        location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/"
      ) {
        navigate("/");
      }
    }
  }, [dispatch, navigate, location]);

  return (
    <>
      <div>
<<<<<<<<< Temporary merge branch 1
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <div>
        {location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/register" && <Nav />}
        {location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/register" && <SideBar />}
=========
        {location.pathname !== "/" &&
          location.pathname !== "/login" &&
          location.pathname !== "/register" && <Nav />}
        {location.pathname !== "/" &&
          location.pathname !== "/login" &&
          location.pathname !== "/register" && <SideBar />}
>>>>>>>>> Temporary merge branch 2
      </div>

      <Routes>

<<<<<<<<< Temporary merge branch 1
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/JobsOffers' element={<JobsOffers />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={ <Profile />}/>
        <Route path='/community' element={ <Community />}/>
        <Route path="/community/:id" element={ <Detail />} />
        <Route path="/community/myposts/:id" element={ <MyPostCommunity />} />
        <Route path="/inprogress" element={ <InProgress /> }/>
        <Route path= "/test1" element={<Test1/>} / >
        <Route path= "/comments/:id" element={<CommentsCommunity/>} / >
        <Route path="/test2" element={<MercadoPagoButton/>} />
        
=========
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/JobsOffers" element={<JobsOffers />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<IdProfile />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/:id" element={<Detail />} />
        <Route path="/community/myposts/:id" element={<MyPostCommunity />} />
        <Route path="/inprogress" element={<InProgress />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/devdata" element={<DevData />} />
        <Route path="/comments/:id" element={<CommentsCommunity />} />
        <Route path="/test2" element={<MercadoPagoButton />} />
          
        //Dashboard routes
        <Route path="/dashboard/*" element={<Dashboard />} />
        {/* <Route path="/*" element={<HomeDash />} /> */}
>>>>>>>>> Temporary merge branch 2

      </Routes>
    </>
  );
}

export default App;
