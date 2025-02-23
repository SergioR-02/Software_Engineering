/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route } from 'react-router-dom';
import LandPage from '../templates/landPage/LandPage';
import { BrowserRouter } from 'react-router-dom';
import Login from '../templates/login/Login';
import Home from '../templates/home/Home';
import Register from '../templates/register/Register';
import ObjectDetails from '../templates/objectDetails/ObjectDetails';
import FormReport from '../templates/formReports/FormReports';
import ProfileInformation from '../templates/profileInformation/ProfileInformation';
import SearchReports from '../templates/searchReports/SearchReports';
import PrivateRoute from './privateRoute';
import { useEffect, useState } from 'react';
import { checkAuthStatus } from '../utilities/auth';
import { useUserStore } from '../store/userStore';

const RoutesComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const setIsAuthenticated = useUserStore((state) => state.setIsAuthenticated);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const isAuth = await checkAuthStatus();
        setIsAuthenticated(isAuth);
      } catch (error) {
        console.log('error', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    verifyAuth();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>; // Puedes reemplazar esto con un componente de loading más elaborado
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path='/home' element={<Home />} />
          <Route path='/objectDetails' element={<ObjectDetails />} />
          <Route path='/profileInformation' element={<ProfileInformation />} />
          <Route path='/report' element={<FormReport />} />
          <Route path='/editar/:id' element={<FormReport />} />
          <Route path='/searchReports' element={<SearchReports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
