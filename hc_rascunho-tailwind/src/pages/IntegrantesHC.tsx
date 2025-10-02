import React from 'react';
import { Link } from 'react-router-dom';

// Assumindo que você tem um componente IntegranteCard para reuso (Recomendado para Componentização)
// import { IntegranteCard } from '../components/IntegranteCard'; 

// --- DEFINIÇÃO DO HEADER E FOOTER REPETIDA ---

const HeaderHC: React.FC = () => (
    <header className="bg-hc-principal text-gray-100 p-4 shadow-xl">
        <nav className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-extrabold tracking-tight"><Link to="/">HOSPITAL CLÍNICAS</Link></div>
            <ul className="flex space-x-6 text-sm items-center">
                <li><Link to="/" className="hover:text-hc-secundaria transition">Início</Link></li>
                <li><Link to="/about" className="hover:text-hc-secundaria transition">Sobre</Link></li>
                <li><Link to="/integrantes" className="hover:text-hc-secundaria transition">Equipe</Link></li>
                <li><Link to="/agendamento" className="hover:text-hc-secundaria transition">Agendamento</Link></li>
                <li><Link to="/fale-conosco" className="hover:text-hc-secundaria transition">Contato</Link></li>
                <li><Link to="/acesso-paciente" className="bg-hc-secundaria text-hc-principal font-semibold px-4 py-2 rounded-lg">Acesso Paciente</Link></li>
            </ul>
        </nav>
    </header>
);

const FooterHC: React.FC = () => (
    <footer className="bg-hc-principal text-white pt-10 pb-6">
        <div className="container mx-auto px-4"><div className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Hospital das Clínicas. Projeto de Componentização React.
        </div></div>
    </footer>
);

// --- CÓDIGO DA PÁGINA ---

// Dados da equipe (Mínimo de 3)
const integrantesData = [
    { nome: "Fulano de Tal", rm: "RM 98765", turma: "1TDS", github: "https://github.com/fulano" },
    { nome: "Ciclana de Oliveira", rm: "RM 12345", turma: "1TDS", github: "https://github.com/ciclana" },
    { nome: "Beltrano Junior", rm: "RM 54321", turma: "1TDS", github: "https://github.com/beltrano" },
];

const IntegrantesHC: React.FC = () => (
    <div className="min-h-screen bg-hc-fundo flex flex-col">
        <HeaderHC />
        
        <main className="container mx-auto py-10 px-4 flex-grow max-w-4xl">
            <h1 className="text-4xl font-bold text-hc-principal mb-10 text-center border-b pb-2">
                Nossa Equipe de Desenvolvimento
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {integrantesData.map((integrante, index) => (
                    // Simples Card para evitar a dependência de um IntegranteCard complexo
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-hc-secundaria">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">{integrante.nome}</h2>
                        <p className="text-gray-600">**RM:** {integrante.rm}</p>
                        <p className="text-gray-600">**Turma:** {integrante.turma}</p>
                        <a 
                            href={integrante.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-3 inline-block text-hc-principal font-semibold hover:text-hc-secundaria transition"
                        >
                            Ver GitHub
                        </a>
                    </div>
                ))}
            </div>
            
        </main>
        
        <FooterHC />
    </div>
);

export default IntegrantesHC;