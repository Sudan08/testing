import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectIsAuthenticated } from '../../features/auth/authSlice';

const ProtectedLayout = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();
  if (isAuthenticated === undefined) {
    return <h1>Loading...</h1>;
  }
  // const isAuthenticated = localStorage.getItem('isAuthenticated')
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default ProtectedLayout;
