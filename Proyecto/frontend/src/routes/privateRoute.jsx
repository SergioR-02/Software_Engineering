import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

const PrivateRoute = () => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />;
};

export default PrivateRoute;
