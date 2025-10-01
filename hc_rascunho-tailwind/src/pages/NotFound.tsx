import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
    // Hook: Usado para navegar de volta para a Home (Atende ao requisito useNavigate)
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] p-8 bg-hc-fundo text-center">
            
            {/* Ícone de Destaque com a cor secundária (Verde-Água) */}
            <div className="text-9xl font-extrabold text-hc-secundaria mb-4">
                404
            </div>
            
            {/* Título com a cor principal (Azul Royal) */}
            <h1 className="text-4xl font-bold text-hc-principal mb-4">
                Página Não Encontrada
            </h1>
            
            <p className="text-lg text-gray-700 max-w-md mx-auto mb-8">
                Desculpe, o endereço que você tentou acessar não existe no Hospital das Clínicas.
            </p>

            {/* Botão para retornar à página inicial */}
            <button
                // Uso do Hook useNavigate (requisito atendido)
                onClick={() => navigate('/')} 
                className="bg-hc-principal text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-hc-secundaria transition duration-200 focus:outline-none focus:ring-4 focus:ring-hc-secundaria/50"
            >
                Voltar para a Página Inicial
            </button>
        </div>
    );
};

export default NotFound;