import React from 'react';

interface IntegranteProps {
  nome: string;
  rm: string;
  turma: string;
  githubUrl: string;
  fotoUrl: string; 
}

export const IntegranteCard: React.FC<IntegranteProps> = ({ nome, rm, turma, githubUrl, fotoUrl }) => (
    <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.03] text-center border-b-4 border-hc-principal/0 hover:border-hc-principal cursor-pointer">
        
        {}
        {}
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-hc-secundaria shadow-lg">
            <img 
                src={fotoUrl || "https://via.placeholder.com/150"} 
                alt={`Foto de ${nome}`} 
                className="w-full h-full object-cover"
            />
        </div>
        
        {}
        <h3 className="text-xl font-extrabold text-hc-principal mb-1">{nome}</h3>
        
        {}
        <p className="text-gray-600 text-sm">RM: **{rm}**</p>
        <p className="text-gray-600 text-sm mb-4">Turma: **{turma}**</p>

        {}
        <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-hc-secundaria text-hc-principal font-bold px-4 py-2 rounded-lg shadow-md hover:bg-hc-principal hover:text-white transition duration-200 focus:outline-none focus:ring-4 focus:ring-hc-secundaria/50"
        >
             GitHub
        </a>
    </div>
);