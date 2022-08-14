import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import AdminLayout from './components/layouts/AdminLayout';
import ProtectedLayout from './components/layouts/ProtectedLayout';
import AnalyticsPage from './features/analytics/Analytics';
import Dashboard from './features/dashboard/Dashboard';
import FeedbackPage from './features/feedback/Feedback';
import LecturersPage from './features/lecturers/Lecturer';
import Login from './features/login/Login';
import AddSchedule from './features/schedules/AddSchedule';
import ClassesPage from './features/schedules/Classes';
import EditSchedulePage from './features/schedules/EditSchedule';
import ViewSchedule from './features/schedules/ViewSchedules';
import AddStudentPage from './features/students/AddStudent';
import StudentPage from './features/students/Student';
import ViewStudentsPage from './features/students/ViewStudents';

const App = () => {
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
            <Route path={'/lecturers'} element={<LecturersPage />} />
            <Route path={'/students'} element={<StudentPage />} />
            <Route path={'/view-students'} element={<ViewStudentsPage />} />
            <Route path={'/add-student'} element={<AddStudentPage />} />
            <Route path={'/feedbacks'} element={<FeedbackPage />} />
            <Route path={'/analytics'} element={<AnalyticsPage />} />
          </Route>
        </Route>
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
