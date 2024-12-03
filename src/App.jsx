import './App.css'
import { Routes,Route, } from "react-router-dom"
import NavBar from "./Componentes/NavBar/NavBar"
import QuienesSomos from "./Vistas/QuienesSomos/QuienesSomos"
import Footer from "./Componentes/Footer/Footer"
import Radio from "./Vistas/Radio/Radio"
import Landing from "./Vistas/Landing/Landing"
import Tv from './Vistas/Tv/Tv'




function App() {

 
  
  return (
  
  <div>
  <div className='app'></div>
  <NavBar/>
    <Routes>
      <Route path="/" element={<Landing/>}/><Route />
      <Route path="/quienes" element={<QuienesSomos/>}/><Route />
      <Route path="/radio" element={<Radio/>}/><Route />
      <Route path="/tv" element={<Tv/>}/><Route />
      
    </Routes>
    <Footer/>
  </div>
  )
}

export default App
