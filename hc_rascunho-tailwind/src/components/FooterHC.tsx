import React from 'react';
import { Link } from 'react-router-dom';

const FooterHC: React.FC = () => (
    // Rodapé com cor principal (Azul Royal) e padding no topo para separação
    <footer className="bg-hc-principal text-white mt-12 pt-10 pb-6 shadow-2xl">
        <div className="container mx-auto px-4">
            
            {/* Seção principal do conteúdo: GRID RESPONSIVO (1, 2 ou 4 colunas) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-hc-secundaria/50 pb-8 mb-6">
                
                {/* Coluna 1: Logo e Missão */}
                <div>
                    <h3 className="text-xl font-extrabold mb-3 text-hc-secundaria">H.C.</h3>
                    <p className="text-sm text-gray-300">
                        Excelência em ensino, pesquisa e saúde de alta complexidade. Uma referência nacional e internacional.
                    </p>
                </div>

                {/* Coluna 2: Navegação Rápida */}
                <div>
                    <h4 className="font-bold mb-3 text-gray-100">Navegação</h4>
                    <ul className="space-y-2 text-sm">
                        {/* Links com efeito hover em Verde-Água */}
                        <li><Link to="/about" className="hover:text-hc-secundaria transition">Sobre Nós</Link></li>
                        <li><Link to="/integrantes" className="hover:text-hc-secundaria transition">Nossa Equipe</Link></li>
                        <li><Link to="/agendamento" className="hover:text-hc-secundaria transition">Agendamento</Link></li>
                        <li><Link to="/suporte-virtual" className="hover:text-hc-secundaria transition">FAQ/Suporte</Link></li>
                    </ul>
                </div>

                {/* Coluna 3: Contato */}
                <div>
                    <h4 className="font-bold mb-3 text-gray-100">Fale Conosco</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Telefone: (11) 0000-0000</li>
                        <li>Email: contato@hcusp.br</li>
                        <li><Link to="/fale-conosco" className="hover:text-hc-secundaria transition">Formulário de Contato</Link></li>
                    </ul>
                </div>

                {/* Coluna 4: Destaque */}
                <div>
                    <h4 className="font-bold mb-3 text-gray-100">Acesso Rápido</h4>
                    <Link to="/acesso-paciente" className="inline-block bg-hc-secundaria text-hc-principal font-bold px-4 py-2 rounded-lg hover:opacity-90 transition duration-150">
                        Portal do Paciente
                    </Link>
                </div>

            </div>

            {/* Copyright */}
            <div className="text-center text-xs text-gray-400">
                &copy; {new Date().getFullYear()} Hospital das Clínicas - Todos os direitos reservados.
            </div>
        </div>
    </footer>
);

export default FooterHC;