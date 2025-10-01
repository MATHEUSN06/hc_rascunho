import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Sobre o Hospital das Clínicas</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          O Hospital das Clínicas (HC) é uma instituição centenária ligada à Universidade de São
          Paulo (USP), fundada com a missão de integrar ensino, pesquisa e atendimento médico de
          alta qualidade. Localizado em São Paulo, o HC é reconhecido nacional e internacionalmente
          como um dos maiores complexos hospitalares da América Latina.
        </p>
      </header>
      <section className="mt-10 max-w-4xl mx-auto px-4">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Com uma infraestrutura moderna e equipes especializadas, o HC oferece serviços em mais
          de 40 especialidades, incluindo cirurgias complexas, tratamentos inovadores e programas
          de saúde pública. Nossa história é marcada por avanços médicos que beneficiam milhões
          de pacientes anualmente.
        </p>
      </section>
    </div>
  );
};

export default About;