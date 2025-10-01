import React, { useState } from 'react';

// Define a tipagem das propriedades (Props)
interface FAQItemProps {
  pergunta: string;
  resposta: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ pergunta, resposta }) => {
    // Hook: Controla se a resposta está visível ou não
    const [isOpen, setIsOpen] = useState(false);

    // Classe para o ícone de seta
    const iconClass = isOpen ? 'rotate-180' : 'rotate-0';

    return (
        <div className="border border-gray-200 rounded-lg shadow-md mb-4 overflow-hidden bg-white">
            
            {/* Botão da Pergunta */}
            <button
                className="flex justify-between items-center w-full p-5 text-left font-semibold text-hc-principal hover:bg-gray-50 transition duration-150"
                onClick={() => setIsOpen(!isOpen)} // Atualiza o estado ao clicar
            >
                {pergunta}
                <svg 
                    className={`w-5 h-5 text-hc-secundaria transform transition-transform duration-300 ${iconClass}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            
            {/* Conteúdo da Resposta (Abre/Fecha baseado no estado 'isOpen') */}
            {isOpen && (
                <div className="p-5 pt-0 text-gray-700 border-t border-gray-100">
                    <p>{resposta}</p>
                </div>
            )}
        </div>
    );
};