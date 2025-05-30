import React from 'react';
import { categories, levels } from '../data/courses';

const FilterBar = ({ selectedCategory, selectedLevel, onCategoryChange, onLevelChange }) => {
  return (
    <div className="bg-white shadow-md p-4 mb-8 rounded-lg flex flex-wrap gap-4">
      <div className="flex items-center">
        <label htmlFor="category" className="mr-2 font-medium">Categoria:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="border rounded-md px-3 py-1.5"
        >
          <option value="">Todas</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      
      <div className="flex items-center">
        <label htmlFor="level" className="mr-2 font-medium">Nível:</label>
        <select
          id="level"
          value={selectedLevel}
          onChange={(e) => onLevelChange(e.target.value)}
          className="border rounded-md px-3 py-1.5"
        >
          <option value="">Todos</option>
          {levels.map(level => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;