import React from 'react';

// Define a tipagem das propriedades (Props) do Integrante
interface IntegranteProps {
  nome: string;
  rm: string;
  turma: string;
  githubUrl: string;
  fotoUrl: string; // URL para a foto (pode ser um placeholder temporário)
}

export const IntegranteCard: React.FC<IntegranteProps> = ({ nome, rm, turma, githubUrl, fotoUrl }) => (
    // Estilização com fundo branco, sombra profissional, e responsividade
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] text-center">
        
        {/* Foto do Integrante */}
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-hc-secundaria shadow-md">
            {/* IMPORTANTE: Substitua "URL_DA_FOTO_AQUI" pela URL real da foto do membro.
              Caso não tenha fotos, use um placeholder de ícone simples.
            */}
            <img 
                src={fotoUrl || "https://via.placeholder.com/150"} 
                alt={`Foto de ${nome}`} 
                className="w-full h-full object-cover"
            />
        </div>
        
        {/* Nome do Integrante com a cor principal (Azul Royal) */}
        <h3 className="text-xl font-bold text-hc-principal mb-1">{nome}</h3>
        
        {/* RM e Turma (Itens de identificação obrigatórios) */}
        <p className="text-gray-600 text-sm">RM: {rm}</p>
        <p className="text-gray-600 text-sm mb-4">Turma: {turma}</p>

        {/* Link para o GitHub (Requisito de versionamento) */}
        <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-hc-secundaria text-white font-medium py-2 px-4 rounded-full hover:bg-hc-principal transition duration-150 text-sm"
        >
            Ver GitHub
        </a>
    </div>
);