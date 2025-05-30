import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">EAD Platform</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-primary">
              Dashboard
            </Link>
            <button className="btn-primary">
              Minha Conta
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;