import React from 'react';

const SocialProof = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">5.000+</p>
            <p className="text-gray-600">Alunos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">100+</p>
            <p className="text-gray-600">Turmas Formadas</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">4.9</p>
            <p className="text-gray-600">Avaliação Média</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">15+</p>
            <p className="text-gray-600">Anos de Experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;