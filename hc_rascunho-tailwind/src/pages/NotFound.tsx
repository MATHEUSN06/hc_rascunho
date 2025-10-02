import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

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

const NotFound: React.FC = () => {
    // Hook obrigatório
    const navigate = useNavigate(); 

    return (
        <div className="min-h-screen bg-hc-fundo flex flex-col">
            <HeaderHC />
            
            <main className="flex flex-col items-center justify-center p-8 flex-grow container mx-auto">
                <div className="text-9xl font-extrabold text-hc-secundaria mb-4">
                    404
                </div>
                <h1 className="text-4xl font-bold text-hc-principal mb-4">
                    Página Não Encontrada
                </h1>
                <p className="text-lg text-gray-700 max-w-md mx-auto mb-8">
                    Desculpe, o endereço que você tentou acessar não existe no Hospital das Clínicas.
                </p>
                {/* Uso do Hook useNavigate (requisito atendido) */}
                <button
                    onClick={() => navigate('/')} 
                    className="bg-hc-principal text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-hc-secundaria transition duration-200"
                >
                    Voltar para a Página Inicial
                </button>
            </main>
            
            <FooterHC />
        </div>
    );
};

export default NotFound;