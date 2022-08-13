import { useSelector } from 'react-redux';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import AdminLayout from './components/layouts/AdminLayout';
import ProtectedLayout from './components/layouts/ProtectedLayout';
import { selectAccessToken } from './features/auth/authSlice';
import Dashboard from './features/dashboard/Dashboard';
import Login from './features/login/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route element={<ProtectedLayout />}>
            <Route path={'/'} element={<h1>Hell</h1>} />
            <Route path={'/dashboard'} element={<Dashboard />} />
          </Route>
        </Route>
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
