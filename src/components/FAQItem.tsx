import React, { useState } from 'react';

interface FAQItemProps {
  pergunta: string;
  resposta: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ pergunta, resposta }) => {
    const [isOpen, setIsOpen] = useState(false);

    const iconClass = isOpen ? 'rotate-180' : 'rotate-0';

    return (
        <div className={`rounded-xl shadow-md overflow-hidden bg-white transition duration-300 ${isOpen ? 'shadow-xl border-l-4 border-hc-principal' : 'border border-gray-200'}`}>
            
            {}
            <button
                className="flex justify-between items-center w-full p-5 text-left font-extrabold text-hc-principal hover:bg-hc-principal/5 transition duration-150"
                onClick={() => setIsOpen(!isOpen)} 
            >
                {pergunta}
                {}
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
            
            {}
            {isOpen && (
                <div className="p-5 pt- text-gray-700 border-t border-gray-700"> 
                    <p className='text-base'>{resposta}</p>
                </div>
            )}
        </div>
    );
};