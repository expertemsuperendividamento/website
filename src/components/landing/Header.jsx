import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold ml-2">
              <span className="logo-text">Expert em Superendividamento</span>
            </h1>
          </div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#sobre" className="font-medium hover:text-secondary transition-colors">Sobre</a>
          <a href="#cursos" className="font-medium hover:text-secondary transition-colors">Cursos</a>
          <a href="#mentoria" className="font-medium hover:text-secondary transition-colors">Mentoria</a>
          <a href="#faq" className="font-medium hover:text-secondary transition-colors">FAQ</a>
          <a href="#depoimentos" className="font-medium hover:text-secondary transition-colors">Depoimentos</a>
          <a href="#contato" className="font-medium hover:text-secondary transition-colors">Contato</a>
          <Link to="/app" className="hidden md:inline-block bg-primary hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Entrar
          </Link>
        </nav>
        <button className="md:hidden text-primary">
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;