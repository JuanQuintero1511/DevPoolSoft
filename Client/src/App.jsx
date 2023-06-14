import './App.css'
import {Routes, Route} from "react-router-dom";
import { Landing } from './components/Landing';
import { Home } from './components/Home';
import { Login } from './components/Login';

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={ <Landing />}/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/home' element={ <Home />}/>
      </Routes>
    </>
  )
}

export default App
