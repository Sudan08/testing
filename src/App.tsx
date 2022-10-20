import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLayout from './components/layouts/AdminLayout';
import ProtectedLayout from './components/layouts/ProtectedLayout';
const DDashboard = lazy(() => import('./features/dashboard/Dashboard'));
const DAddSchedule = lazy(() => import('./features/schedules/AddSchedule'));
const DViewSchedule = lazy(() => import('./features/schedules/ViewSchedules'));
const DEditSchedulePage = lazy(
  () => import('./features/schedules/EditSchedule')
);
const DClassesPage = lazy(() => import('./features/schedules/Classes'));
const DLecturersPage = lazy(() => import('./features/lecturers/Lecturer'));
const DStudentPage = lazy(() => import('./features/students/Student'));
const DViewStudentsPage = lazy(
  () => import('./features/students/ViewStudents')
);
const DAddStudentPage = lazy(() => import('./features/students/AddStudent'));
const DFeedbackPage = lazy(() => import('./features/feedback/Feedback'));
const DAnalyticsPage = lazy(() => import('./features/analytics/Analytics'));
const DLostAndFound = lazy(
  () => import('./features/lostAndFound/LostAndFound')
);

const DAddLostItem = lazy(() => import('./features/lostAndFound/addItem'));
const DForgotPassword = lazy(() => import('./features/auth/ForgotPassword'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route element={<AdminLayout />}>
            <Route index element={<DDashboard />} />
            <Route path={'/view-schedule'} element={<DViewSchedule />} />
            <Route path={'/add-schedule'} element={<DAddSchedule />} />
            <Route
              path={'/schedule/edit/:id'}
              element={<DEditSchedulePage />}
            />
            <Route path={'/classes'} element={<DClassesPage />} />
            <Route path={'/lecturers'} element={<DLecturersPage />} />
            <Route path={'/students'} element={<DStudentPage />} />
            <Route path={'/view-students'} element={<DViewStudentsPage />} />
            <Route path={'/add-student'} element={<DAddStudentPage />} />
            <Route path={'/feedbacks'} element={<DFeedbackPage />} />
            <Route path={'/analytics'} element={<DAnalyticsPage />} />
            <Route path={'/lost-and-found'} element={<DLostAndFound />} />
            <Route path={'/lost-and-found/add'} element={<DAddLostItem />} />
          </Route>
        </Route>
        <Route path={'/forgot-password'} element={<DForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
