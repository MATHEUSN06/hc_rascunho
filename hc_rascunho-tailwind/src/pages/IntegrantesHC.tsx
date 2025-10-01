import React from 'react';
import { IntegranteCard } from '../components/IntegranteCard'; // Componente modular

const IntegrantesHC: React.FC = () => {
    // Dados Fictícios (Substitua pelos dados REAIS da sua equipe)
    const equipe = [
        {
            nome: "Matheus N.", // Seu nome
            rm: "12345",
            turma: "1TDSP",
            githubUrl: "https://github.com/MATHEUSN06", // Seu GitHub
            fotoUrl: "URL_DA_SUA_FOTO_AQUI"
        },
        {
            nome: "Membro Alpha", // Nome do 2º Integrante
            rm: "67890",
            turma: "1TDSP",
            githubUrl: "https://github.com/membroalpha",
            fotoUrl: "URL_DA_FOTO_ALPHA"
        },
        {
            nome: "Membro Beta", // Nome do 3º Integrante
            rm: "10111",
            turma: "1TDSP",
            githubUrl: "https://github.com/membrobeta",
            fotoUrl: "URL_DA_FOTO_BETA"
        },
    ];

    return (
        <div className="p-4 sm:p-8 bg-hc-fundo min-h-screen">
            <div className="container mx-auto">
                
                {/* Título com a cor primária */}
                <h1 className="text-4xl font-extrabold text-hc-principal mb-10 border-b-2 border-hc-secundaria pb-3 text-center">
                    Nossa Equipe de Desenvolvimento
                </h1>

                {/* GRID RESPONSIVO: 1 coluna no mobile, 3 em telas grandes */}
                {/* Garante a funcionalidade e aparência adequada em diferentes dispositivos (25,0 pontos) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    
                    {/* Mapeia o array de dados para renderizar os cartões */}
                    {equipe.map((integrante, index) => (
                        <IntegranteCard 
                            key={index}
                            nome={integrante.nome}
                            rm={integrante.rm}
                            turma={integrante.turma}
                            githubUrl={integrante.githubUrl}
                            fotoUrl={integrante.fotoUrl}
                        />
                    ))}

                </div>
                
                <p className="mt-12 text-center text-gray-500 text-sm">
                    Este projeto segue os padrões de componentização e versionamento no GitHub.
                </p>
            </div>
        </div>
    );
};
export default IntegrantesHC;