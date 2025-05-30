import React from 'react';
import CourseList from '../components/CourseList';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Meus Cursos
          </h1>
          <CourseList />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;