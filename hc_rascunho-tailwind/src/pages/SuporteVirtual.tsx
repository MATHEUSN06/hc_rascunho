import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- 1. DEFINIÇÃO DO HEADER E FOOTER REPETIDA ---

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

// --- 2. COMPONENTE MODULAR INTERNO (usa useState) ---

interface FAQItemProps {
    question: string;
    answer: string;
}

// Este componente demonstra o uso do Hook useState!
const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false); // Hook obrigatório!

    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full text-left flex justify-between items-center py-4 font-semibold text-lg text-hc-principal hover:text-hc-secundaria transition duration-200"
                onClick={() => setIsOpen(!isOpen)}
            >
                {question}
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'}`}>
                <p className="pb-4 text-gray-700">{answer}</p>
            </div>
        </div>
    );
};

// --- 3. CÓDIGO DA PÁGINA ---

const SuporteVirtual: React.FC = () => {
    const faqData = [
        { question: "Como faço para agendar uma consulta?", answer: "Você pode agendar consultas diretamente pela nossa página de Agendamento Online ou ligando para (11) 0000-0000." },
        { question: "Quais documentos preciso levar no dia do atendimento?", answer: "É necessário apresentar documento oficial com foto e a carteirinha do convênio (se aplicável)." },
        { question: "O Hospital das Clínicas aceita planos de saúde?", answer: "Sim, aceitamos os principais planos de saúde do mercado. Consulte nossa lista completa na seção 'Sobre Nós'." },
        { question: "Onde vejo meu resultado de exames?", answer: "Os resultados estão disponíveis no Portal do Paciente. Você pode acessá-lo clicando no botão 'Acesso Paciente' na barra superior." },
    ];

    return (
        <div className="min-h-screen bg-hc-fundo flex flex-col">
            <HeaderHC />
            
            <main className="container mx-auto py-10 px-4 flex-grow max-w-4xl">
                <h1 className="text-4xl font-bold text-hc-principal mb-8 text-center border-b pb-2">
                    Suporte Virtual (FAQ)
                </h1>
                
                <div className="bg-white p-8 rounded-xl shadow-2xl">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Perguntas Frequentes</h2>
                    
                    <div className="space-y-2">
                        {faqData.map((item, index) => (
                            <FAQItem 
                                key={index}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </div>
                </div>
            </main>
            
            <FooterHC />
        </div>
    );
};

export default SuporteVirtual;