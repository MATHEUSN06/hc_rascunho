import React from 'react';
import { Link } from 'react-router-dom';

const HeaderHC: React.FC = () => (
    <header className="bg-hc-principal text-gray-100 p-4 shadow-2xl sticky top-0 z-50"> 
        <nav className="container mx-auto flex justify-between items-center">
            
            {}
            <div className="text-2xl font-extrabold tracking-tight">
                <Link to="/" className="hover:text-hc-secundaria transition duration-150">HOSPITAL CLÍNICAS</Link>
            </div>

            {}
            <ul className="flex space-x-6 text-sm items-center">
                
                {}
                <li><Link to="/" className="hover:text-hc-secundaria hover:underline transition duration-150">Início</Link></li>
                <li><Link to="/about" className="hover:text-hc-secundaria hover:underline transition duration-150">Sobre</Link></li>
                <li><Link to="/integrantes" className="hover:text-hc-secundaria hover:underline transition duration-150">Equipe</Link></li>
                <li><Link to="/agendamento" className="hover:text-hc-secundaria hover:underline transition duration-150">Agendamento</Link></li>
                <li><Link to="/fale-conosco" className="hover:text-hc-secundaria hover:underline transition duration-150">Contato</Link></li>
                <li><Link to="/suporte-virtual" className="hover:text-hc-secundaria hover:underline transition duration-150">FAQ</Link></li>
                
                {}
                <li>
                    <Link to="/acesso-paciente" 
                          className="bg-hc-secundaria text-hc-principal font-bold px-5 py-2 rounded-lg shadow-xl hover:bg-white transition duration-200 transform hover:scale-[1.05] focus:outline-none focus:ring-4 focus:ring-hc-secundaria/70">
                        Portal do Paciente
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default HeaderHC; 