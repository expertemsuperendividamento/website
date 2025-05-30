import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import LandingPage from './pages/LandingPage';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const CourseView = React.lazy(() => import('./pages/CourseView'));

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<Dashboard />} />
          <Route path="/app/course/:id" element={<CourseView />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;