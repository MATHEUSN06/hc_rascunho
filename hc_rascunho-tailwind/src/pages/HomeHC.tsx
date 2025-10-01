import React from 'react';
import { ServiceCard } from '../components/ServiceCard'; // Componente modular

const HomeHC: React.FC = () => {
    return (
        <div className="space-y-12">
            
            {/* Seção HERO (Primeira Dobra) */}
            {/* Responsividade e Fundo: Usa um gradiente sutil ou cor sólida hc-principal */}
            <section className="bg-hc-principal text-white py-20 px-8 rounded-xl shadow-2xl">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
                        Excelência e Humanização em Saúde
                    </h1>
                    <p className="text-xl md:text-2xl font-light opacity-90 mb-8">
                        O Hospital das Clínicas é referência no Brasil em tratamento de alta complexidade, ensino e pesquisa.
                    </p>
                    {/* Botão de Destaque com cor secundária */}
                    <a 
                        href="/agendamento" 
                        className="inline-block bg-hc-secundaria text-hc-principal font-bold text-lg px-8 py-3 rounded-full shadow-xl hover:opacity-90 transition duration-300 transform hover:scale-105"
                    >
                        Agende Sua Consulta
                    </a>
                </div>
            </section>

            {/* Seção de Serviços/Destaques */}
            <section className="px-4">
                <h2 className="text-3xl font-bold text-hc-principal mb-8 text-center border-b pb-2">
                    Nossos Principais Serviços
                </h2>
                
                {/* GRID RESPONSIVO: 1 coluna no mobile, 2 no médio, 3 no grande */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Reutilizando o componente ServiceCard (Modularidade) */}
                    <ServiceCard
                        icone="🩺"
                        titulo="Atendimento Especializado"
                        descricao="Mais de 50 especialidades médicas disponíveis para um cuidado completo e personalizado."
                    />
                    <ServiceCard
                        icone="📅"
                        titulo="Agendamento Fácil"
                        descricao="Marque suas consultas e exames de forma rápida e segura através da nossa plataforma online."
                    />
                    <ServiceCard
                        icone="👨‍⚕️"
                        titulo="Equipe de Referência"
                        descricao="Conte com os melhores profissionais do país, envolvidos ativamente em pesquisa e inovação."
                    />
                </div>
            </section>
            
            {/* Opcional: Seção de Notícias ou Pesquisa */}
             <section className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-hc-principal mb-4">Inovação e Pesquisa</h2>
                <p className="text-gray-700">O HC está na vanguarda da medicina, investindo continuamente em tecnologias e estudos clínicos.</p>
            </section>
        </div>
    );
};

export default HomeHC;