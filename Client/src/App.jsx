import {Routes, Route} from "react-router-dom";
import { Landing } from './components/Landing';
import { Home } from './components/Home';
import {Register} from './components/Register'

function App() {

  return (
    <>

      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={ <Landing />}/>
        <Route path='/home' element={ <Home />}/>
      </Routes>
    </>
  )
}

export default App
