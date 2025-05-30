import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBook } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  return (
    <section className="hero-gradient text-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Domine a Lei do Superendividamento com o Especialista
          </h1>
          <p className="text-xl mb-8">
            Aprenda com o Dr. Adriano Hermida Maia, autor do Manual do Superendividado, 
            como atuar com excelência em ações de repactuação de dívidas e consultorias no CEJUSC.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#formulario" className="bg-accent hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg text-center pulse-animation transition-colors">
              QUERO ME INSCREVER AGORA <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            <a href="#cursos" className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-8 rounded-lg text-center transition-colors">
              CONHEÇA OS CURSOS <FontAwesomeIcon icon={faBook} className="ml-2" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Dr. Adriano Hermida Maia" 
              className="rounded-lg shadow-2xl border-4 border-white w-full max-w-md"
            />
            <div className="absolute -bottom-5 -right-5 bg-white text-primary p-4 rounded-lg shadow-lg">
              <p className="font-bold">Autor do Best-Seller</p>
              <p className="text-sm">"Manual do Superendividado"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;