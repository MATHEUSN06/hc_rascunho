import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Bem-vindo ao Hospital das Clínicas
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          O Hospital das Clínicas (HC) é uma das mais renomadas instituições de saúde do Brasil,
          oferecendo serviços de excelência em atendimento médico, pesquisa e ensino. Fundado com
          o objetivo de proporcionar cuidados de alta qualidade, o HC atende milhares de pacientes
          todos os anos, combinando tecnologia de ponta com uma equipe altamente qualificada.
        </p>
      </header>
      <section className="mt-10 max-w-4xl mx-auto px-4">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Localizado no coração de São Paulo, o HC é parte integrante da Faculdade de Medicina da
          Universidade de São Paulo (USP) e desempenha um papel crucial no avanço da medicina no
          país, sendo referência em diversas especialidades, como cardiologia, neurologia e
          oncologia.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Nossa missão é oferecer atendimento humanizado e inovador, enquanto nossa visão é
          continuar sendo um centro de excelência em saúde e educação. Entre em contato para
          agendamentos ou mais informações!
        </p>
      </section>
    </div>
  );
};

export default Home;