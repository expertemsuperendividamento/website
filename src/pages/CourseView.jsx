import React from 'react';
import { useParams } from 'react-router-dom';

function CourseView() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Visualização do Curso</h1>
        <p className="text-gray-600">ID do Curso: {id}</p>
        {/* Course content will be implemented later */}
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="text-gray-700">Conteúdo do curso será implementado em breve.</p>
        </div>
      </div>
    </div>
  );
}

export default CourseView;