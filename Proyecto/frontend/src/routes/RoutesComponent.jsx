import { Routes, Route } from 'react-router-dom'
import LandPage from '../templates/landPage/LandPage'
import { BrowserRouter } from 'react-router-dom'
import Login from '../templates/login/Login'
import Home from '../templates/home/Home'
import Register from '../templates/register/Register'
import ObjectDetails from '../templates/objectDetails/ObjectDetails'
import FormReport from '../templates/formReports/FormReports'
import ProfileInformation from '../templates/profileInformation/ProfileInformation'
import SearchReports from '../templates/searchReports/SearchReports'


const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandPage />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/objectDetails' element={<ObjectDetails/>} />
        <Route path='/profileInformation' element={<ProfileInformation/>} />
        <Route path='/report' element={<FormReport/>} />
        <Route path='/editar/:id' element={<FormReport/>} />
        <Route path='/searchReports' element={<SearchReports/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent
