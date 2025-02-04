import { Routes, Route } from 'react-router-dom'
import LandPage from '../templates/landPage/LandPage'
import { BrowserRouter } from 'react-router-dom'

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandPage />} />
        <Route path='/hola' element={<h1>Hola</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent
