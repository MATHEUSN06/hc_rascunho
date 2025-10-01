import React from 'react';
import { Link } from 'react-router-dom';

const HeaderHC: React.FC = () => (
    // Header com Azul Royal (hc-principal) e sombra profissional
    <header className="bg-hc-principal text-gray-100 p-4 shadow-xl">
        <nav className="container mx-auto flex justify-between items-center">
            
            {/* Logo/Nome do Hospital */}
            <div className="text-2xl font-extrabold tracking-tight">
                <Link to="/">HOSPITAL CLÍNICAS</Link>
            </div>

            {/* Lista de Links (Ajustada para desktop) */}
            <ul className="flex space-x-6 text-sm items-center">
                
                {/* LINKS PRINCIPAIS */}
                <li><Link to="/" className="hover:text-hc-secundaria transition duration-150">Início</Link></li>
                <li><Link to="/about" className="hover:text-hc-secundaria transition duration-150">Sobre</Link></li>
                <li><Link to="/integrantes" className="hover:text-hc-secundaria transition duration-150">Equipe</Link></li>
                <li><Link to="/agendamento" className="hover:text-hc-secundaria transition duration-150">Agendamento</Link></li>
                <li><Link to="/fale-conosco" className="hover:text-hc-secundaria transition duration-150">Contato</Link></li>
                <li><Link to="/suporte-virtual" className="hover:text-hc-secundaria transition duration-150">FAQ</Link></li>
                
                {/* BOTÃO DE DESTAQUE: Acesso Paciente */}
                <li>
                    <Link to="/acesso-paciente" 
                          className="bg-hc-secundaria text-hc-principal font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition duration-150 shadow-md">
                        Acesso Paciente
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);

