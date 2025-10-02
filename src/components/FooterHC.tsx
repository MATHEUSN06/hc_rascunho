import React from 'react';
import { Link } from 'react-router-dom';

const FooterHC: React.FC = () => (
    <footer className="bg-hc-principal text-white pt-10 pb-6 shadow-[0_-5px_15px_rgba(0,0,0,0.2)]"> 
        <div className="container mx-auto px-4">
            
            {}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-hc-secundaria/50 pb-8 mb-6">
                
                {}
                <div>
                    <h3 className="text-2xl font-extrabold mb-3 text-hc-secundaria border-b border-hc-secundaria/50 pb-1">H.C.</h3>
                    <p className="text-sm text-gray-300">
                        Excelência em ensino, pesquisa e saúde de alta complexidade. Uma referência nacional e internacional.
                    </p>
                </div>

                {}
                <div>
                    <h4 className="font-bold mb-3 text-gray-100">Navegação</h4>
                    <ul className="space-y-2 text-sm">
                        {}
                        <li><Link to="/about" className="hover:text-hc-secundaria hover:underline transition">Sobre Nós</Link></li>
                        <li><Link to="/integrantes" className="hover:text-hc-secundaria hover:underline transition">Equipe</Link></li>
                        <li><Link to="/agendamento" className="hover:text-hc-secundaria hover:underline transition">Agendamento</Link></li>
                        <li><Link to="/suporte-virtual" className="hover:text-hc-secundaria hover:underline transition">FAQ/Suporte</Link></li>
                    </ul>
                </div>

                {}
                <div>
                    <h4 className="font-bold mb-3 text-gray-100">Fale Conosco</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><span className="text-hc-secundaria font-semibold">Telefone:</span> (11) 0000-0000</li>
                        <li><span className="text-hc-secundaria font-semibold">Email:</span> contato@hcusp.br</li>
                        <li><Link to="/fale-conosco" className="hover:text-hc-secundaria hover:underline transition">Formulário de Contato</Link></li>
                    </ul>
                </div>

                {}
                <div>
                    <h4 className="font-bold mb-3 text-gray-100">Acesso Rápido</h4>
                    <Link to="/acesso-paciente" 
                        className="inline-block bg-hc-secundaria text-hc-principal font-extrabold px-6 py-3 rounded-xl shadow-lg hover:bg-white transition duration-200 transform hover:scale-[1.05]">
                        Portal do Paciente
                    </Link>
                </div>

            </div>

            {}
            <div className="text-center text-xs text-gray-200 pt-4">
                &copy; {new Date().getFullYear()} Hospital das Clínicas - Todos os direitos reservados.
            </div>
        </div>
    </footer>
);

export default FooterHC;