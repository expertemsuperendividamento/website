import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card w-72 mx-2">
      <img 
        src={course.thumbnail} 
        alt={course.title} 
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{course.duration}</span>
          <Link 
            to={`/course/${course.id}`}
            className="btn-primary text-sm"
          >
            Ver Curso
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;