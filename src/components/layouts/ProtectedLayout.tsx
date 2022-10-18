import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../app/store';
import { selectIsAuthenticated } from '../../features/auth/authSlice';
import Login from '../../features/login/Login';

const ProtectedLayout = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  if (isAuthenticated === undefined) {
    return <h1>Loading...</h1>;
  }

  // const isAuthenticated = localStorage.getItem('isAuthenticated')
  return isAuthenticated ? <Outlet /> : <Login />;
};

export default ProtectedLayout;
