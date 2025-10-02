import React from 'react';
import { Link } from 'react-router-dom';

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

const AboutHC: React.FC = () => (
    <div className="min-h-screen bg-hc-fundo flex flex-col">
        <HeaderHC />
        
        <main className="container mx-auto py-10 px-4 flex-grow max-w-5xl">
            <h1 className="text-4xl font-bold text-hc-principal mb-6 border-b pb-2">Sobre o Hospital das Clínicas</h1>
            
            <div className="bg-white p-8 rounded-xl shadow-lg space-y-6 text-gray-700">
                <p className="text-lg font-semibold text-hc-secundaria">
                    Fundado em 1944, o Hospital das Clínicas é o maior complexo hospitalar da América Latina, dedicado à assistência de alta complexidade, ensino e pesquisa médica de ponta.
                </p>
                
                <h2 className="text-2xl font-bold text-hc-principal mt-8">Nossa Missão</h2>
                <p>
                    Oferecer assistência médica de excelência, promover a formação de profissionais de saúde e gerar conhecimento científico, contribuindo para a melhoria contínua da saúde pública e privada no país.
                </p>
                
                <h2 className="text-2xl font-bold text-hc-principal mt-8">Valores</h2>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>**Comprometimento:** Com a vida e a saúde do paciente.</li>
                    <li>**Excelência:** Busca constante pela qualidade e inovação.</li>
                    <li>**Ética:** Atuar com integridade e transparência em todas as ações.</li>
                </ul>
                
                <p className="pt-4 text-center">
                    <Link to="/integrantes" className="text-hc-secundaria font-semibold hover:underline">
                        Conheça nossa equipe de desenvolvedores.
                    </Link>
                </p>
            </div>
        </main>
        
        <FooterHC />
    </div>
);

export default AboutHC;