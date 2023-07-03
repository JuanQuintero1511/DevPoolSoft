import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin_App } from "./redux/actions";
import Nav from "./components/Nav";
import SideBar from "./components/sidebar";
import { Landing } from './components/Landing';
import Home from './components/Home';
import { Register } from './components/Register'
import { Login } from './components/Login';
import Profile from "./components/Profile";
import Community from "./components/Community";
import Detail from "./components/DetailCommunity";
import JobsOffers from "./components/JobsOffers";
import InProgress from "./components/InProgress";
import MyPostCommunity from "./components/MyPostsCommunity";
import Test1 from "./components/test1";
import CommentsCommunity from "./components/CommentsCommunity";
import MercadoPagoButton from "./components/MercadoPago/MercadoPagoButton";
import DevData from "./components/DevData";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const userName = localStorage.getItem('userName');
    if (userName) {
      dispatch(userLogin_App(userName))
        .then(() => {
          // Autenticación exitosa, permitir acceso a rutas protegidas
        })
        .catch(() => {
          // Autenticación fallida, redirigir al login
          navigate('/login');
        });
    } else {
      // Si el usuario no está autenticado y no está en la página de login o registro, redirige al login
      if (
        location.pathname !== '/login' &&
        location.pathname !== '/register' &&
        location.pathname !== '/'
      ) {
        navigate('/');
      }
    }
  }, [dispatch, navigate, location]);

  return (
    <>
      <div>
        {location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/register" && <Nav />}
        {location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/register" && <SideBar />}
      </div>

      <Routes>
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
        <Route path= "/devdata" element={<DevData/>} / >
        <Route path= "/comments/:id" element={<CommentsCommunity/>} / >
        <Route path="/test2" element={<MercadoPagoButton/>} />

        

  
      </Routes>
    </>
  )
}

export default App;
