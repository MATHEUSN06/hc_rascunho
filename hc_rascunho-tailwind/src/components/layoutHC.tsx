import React from 'react';
import { Link } from 'react-router-dom';
// Importa o novo componente Rodapé
import FooterHC from './FooterHC'; 

// ... (HeaderHC continua o mesmo) ...
const HeaderHC: React.FC = () => (
    // ... código do Header ...
);

export const LayoutHC: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    // CRUCIAL: Adiciona 'flex flex-col' para forçar o footer para baixo
    <div className="min-h-screen bg-hc-fundo flex flex-col"> 
        <HeaderHC />
        {/* Adiciona 'flex-grow' para que o conteúdo preencha o espaço disponível */}
        <main className="container mx-auto py-10 px-4 flex-grow"> 
            {children}
        </main>
        <FooterHC /> {/* O Rodapé é integrado aqui */}
    </div>
);