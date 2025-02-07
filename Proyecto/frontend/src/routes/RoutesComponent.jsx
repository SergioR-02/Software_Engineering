import { Routes, Route } from 'react-router-dom'
import LandPage from '../templates/landPage/LandPage'
import { BrowserRouter } from 'react-router-dom'
import Login from '../templates/login/Login'
import Home from '../templates/home/Home'
import Register from '../templates/register/Register'

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandPage />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/hola' element={<h1>Hola</h1>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent
