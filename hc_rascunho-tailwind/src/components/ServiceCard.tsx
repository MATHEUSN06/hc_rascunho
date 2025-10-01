import React from 'react';

// Define a tipagem das propriedades (Props)
interface CardProps {
  titulo: string;
  descricao: string;
  icone: string; // Pode ser um emoji, um caminho SVG ou uma classe de ícone
}

export const ServiceCard: React.FC<CardProps> = ({ titulo, descricao, icone }) => (
    // Estilização com fundo branco, sombra profissional e responsividade
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-[1.02]">
        
        {/* Ícone de Destaque com a cor secundária (Verde-Água) */}
        <div className="text-5xl mb-4 text-hc-secundaria">
            {icone}
        </div>
        
        {/* Título do Serviço com a cor principal (Azul Royal) */}
        <h3 className="text-xl font-bold text-hc-principal mb-3">{titulo}</h3>
        
        {/* Descrição do Serviço */}
        <p className="text-gray-600 text-sm">{descricao}</p>
        
        {/* Link de Ação com a cor secundária */}
        <a href="/agendamento" className="mt-4 inline-block text-hc-secundaria font-medium hover:underline transition duration-150">
            Saiba Mais →
        </a>
    </div>
);