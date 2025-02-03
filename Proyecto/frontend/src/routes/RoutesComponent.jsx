import { Routes, Route } from 'react-router-dom'
import Header from '../organisms/header/Header'
import { BrowserRouter } from 'react-router-dom'

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/hola' element={<h1>Hola</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent
