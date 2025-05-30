import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const CourseView = React.lazy(() => import('./pages/CourseView'));

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/course/:id" element={<CourseView />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;