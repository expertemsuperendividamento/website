import React, { useState } from 'react';
import { courses } from '../data/courses';
import FilterBar from './FilterBar';
import CourseCarousel from './CourseCarousel';

const CourseList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const filteredCourses = courses.filter(course => {
    if (selectedCategory && course.category !== selectedCategory) return false;
    if (selectedLevel && course.level !== selectedLevel) return false;
    return true;
  });

  const coursesByCategory = filteredCourses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  return (
    <div className="container mx-auto px-4 py-8">
      <FilterBar
        selectedCategory={selectedCategory}
        selectedLevel={selectedLevel}
        onCategoryChange={setSelectedCategory}
        onLevelChange={setSelectedLevel}
      />
      
      {Object.entries(coursesByCategory).map(([category, coursesInCategory]) => (
        <CourseCarousel
          key={category}
          title={category}
          courses={coursesInCategory}
        />
      ))}
    </div>
  );
};

export default CourseList;