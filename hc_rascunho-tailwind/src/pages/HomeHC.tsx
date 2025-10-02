import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../components/ServiceCard'; // Componente modular

// --- 1. DEFINIÇÃO DO HEADER (NAV-BAR) ---
const HeaderHC: React.FC = () => (
    <header className="bg-hc-principal text-gray-100 p-4 shadow-xl">
        <nav className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-extrabold tracking-tight">
                <Link to="/">HOSPITAL CLÍNICAS</Link>
            </div>
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

// --- 2. DEFINIÇÃO DO FOOTER (RODAPÉ) ---
const FooterHC: React.FC = () => (
    <footer className="bg-hc-principal text-white pt-10 pb-6">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-hc-secundaria/50 pb-8 mb-6">
                <div><h3 className="text-xl font-extrabold text-hc-secundaria">H.C.</h3></div>
                <div><h4 className="font-bold mb-3">Navegação</h4>{/* links... */}</div>
                <div><h4 className="font-bold mb-3">Fale Conosco</h4>{/* contato... */}</div>
                <div><h4 className="font-bold mb-3">Acesso</h4><Link to="/acesso-paciente" className="bg-hc-secundaria text-hc-principal font-bold px-4 py-2 rounded-lg">Portal</Link></div>
            </div>
            <div className="text-center text-xs text-gray-400">
                &copy; {new Date().getFullYear()} Hospital das Clínicas. Projeto de Componentização React.
            </div>
        </div>
    </footer>
);


// --- 3. A PÁGINA INDIVIDUAL COMPLETA ---
const HomeHC: React.FC = () => {
    return (
        // Contêiner de Layout Único (Repetido por página)
        <div className="min-h-screen bg-hc-fundo flex flex-col"> 
            
            <HeaderHC /> {/* <-- HEADER INCLUÍDO AQUI */}
            
            {/* CONTEÚDO PRINCIPAL DA HOME */}
            <main className="container mx-auto py-10 px-4 flex-grow space-y-12"> 
                
                {/* Seção HERO */}
                <section className="bg-hc-principal text-white py-20 px-8 rounded-xl shadow-2xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-6xl font-extrabold mb-4">Excelência em Saúde</h1>
                        <p className="text-2xl font-light mb-8">Referência em tratamento de alta complexidade.</p>
                        <Link to="/agendamento" className="inline-block bg-hc-secundaria text-hc-principal font-bold text-lg px-8 py-3 rounded-full">
                            Agende Sua Consulta
                        </Link>
                    </div>
                </section>

                {/* Seção de Serviços */}
                <section>
                    <h2 className="text-3xl font-bold text-hc-principal mb-8 text-center border-b pb-2">
                        Nossos Principais Serviços
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ServiceCard icone="🩺" titulo="Atendimento" descricao="50+ especialidades médicas." />
                        <ServiceCard icone="📅" titulo="Agendamento Fácil" descricao="Marque consultas online." />
                        <ServiceCard icone="👨‍⚕️" titulo="Equipe" descricao="Melhores profissionais do país." />
                    </div>
                </section>

            </main>
            
            <FooterHC /> {/* <-- FOOTER INCLUÍDO AQUI */}
        </div>
    );
};

export default HomeHC;