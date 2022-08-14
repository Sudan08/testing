import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import AdminLayout from './components/layouts/AdminLayout';
import ProtectedLayout from './components/layouts/ProtectedLayout';
import Dashboard from './features/dashboard/Dashboard';
import Login from './features/login/Login';
import AddSchedule from './features/schedules/AddSchedule';
import ClassesPage from './features/schedules/Classes';
import EditSchedulePage from './features/schedules/EditSchedule';
import ViewSchedule from './features/schedules/ViewSchedules';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route element={<ProtectedLayout />}>
            <Route index element={<Dashboard />} />
            <Route path={'/view-schedule'} element={<ViewSchedule />} />
            <Route path={'/add-schedule'} element={<AddSchedule />} />
            <Route path='/schedule/edit/:id' element={<EditSchedulePage />} />
            <Route path={'/classes'} element={<ClassesPage />} />
          </Route>
        </Route>
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
