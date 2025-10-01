import React from 'react';

// Opcional: Componente interno para destacar missões/valores (Modularidade)
const DestaqueMissao: React.FC<{ titulo: string, texto: string, icone: string }> = ({ titulo, texto, icone }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-hc-secundaria">
        <div className="text-3xl text-hc-secundaria mb-3">{icone}</div>
        <h3 className="text-xl font-semibold text-hc-principal mb-2">{titulo}</h3>
        <p className="text-gray-600 text-sm">{texto}</p>
    </div>
);

const AboutHC: React.FC = () => {
  return (
    // Fundo limpo (hc-fundo) com padding responsivo (p-4 no mobile, p-10 no desktop)
    <div className="min-h-screen bg-hc-fundo p-4 md:p-10">
      <div className="container mx-auto max-w-6xl">
        
        {/* Seção Principal / Título */}
        <header className="text-center mb-12 bg-white p-8 rounded-xl shadow-md">
          {/* Título com a cor primária (Azul Royal) */}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-hc-principal mb-4">
            Sobre o Hospital das Clínicas
          </h1>
          {/* Subtítulo mais claro e fácil de ler */}
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Uma instituição centenária que une excelência em saúde, pesquisa e ensino para o benefício da população.
          </p>
        </header>

        {/* Seção de Conteúdo */}
        <section className="bg-white p-8 rounded-xl shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-hc-principal mb-6 border-b-2 border-hc-secundaria pb-2">
                Nossa História e Impacto
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                O Hospital das Clínicas (HC) é uma instituição ligada à Universidade de São Paulo (USP), 
                fundada com a missão de integrar ensino, pesquisa e atendimento médico de alta qualidade. 
                Localizado em São Paulo, o HC é reconhecido nacional e internacionalmente como um dos 
                **maiores complexos hospitalares da América Latina**.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
                Com uma infraestrutura moderna e equipes altamente especializadas, o HC oferece serviços 
                em mais de 40 especialidades. Nossa história é marcada por avanços médicos que beneficiam 
                milhões de pacientes anualmente, com foco em cirurgias complexas, tratamentos inovadores 
                e programas de saúde pública.
            </p>
        </section>

        {/* Seção de Missão, Visão e Valores (Usando o componente modular) */}
        <section className="mb-12">
            <h2 className="text-3xl font-bold text-hc-principal mb-8 text-center">Pilares Institucionais</h2>
            
            {/* GRID RESPONSIVO: 1 coluna no mobile, 3 em telas maiores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <DestaqueMissao 
                    icone="🧠"
                    titulo="Pesquisa"
                    texto="Contribuir com a ciência e a inovação, gerando conhecimento para transformar a medicina no país."
                />
                <DestaqueMissao 
                    icone="🎓"
                    titulo="Ensino"
                    texto="Formar a próxima geração de profissionais de saúde com o mais alto nível de excelência acadêmica."
                />
                <DestaqueMissao 
                    icone="💙"
                    titulo="Atendimento"
                    texto="Oferecer um cuidado humanizado e de alta complexidade, focado na recuperação integral do paciente."
                />
            </div>
        </section>
        
      </div>
    </div>
  );
};

export default AboutHC;