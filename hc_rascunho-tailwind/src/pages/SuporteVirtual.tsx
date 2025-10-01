import React from 'react';
import { FAQItem } from '../components/FAQItem'; // Componente modular

const SuporteVirtual: React.FC = () => {
    // Dados das Perguntas Frequentes (Fácil de manter e adicionar)
    const faqData = [
        {
            pergunta: "Como faço para agendar uma consulta no HC?",
            resposta: "O agendamento pode ser feito online através da nossa plataforma. Acesse a seção 'Agendamento', preencha os dados e escolha a especialidade e data desejada. Nossa equipe entrará em contato para confirmação."
        },
        {
            pergunta: "Quais documentos devo levar no dia da consulta?",
            resposta: "É obrigatório apresentar um documento oficial com foto (RG ou CNH), o cartão SUS (se aplicável) e a guia de encaminhamento ou solicitação médica, se for a primeira consulta."
        },
        {
            pergunta: "O Hospital das Clínicas atende planos de saúde?",
            resposta: "O HC atende primariamente pacientes via SUS para alta complexidade. Para informações específicas sobre planos ou atendimento privado, por favor, entre em contato via seção 'Fale Conosco'."
        },
        {
            pergunta: "Como posso acompanhar o resultado dos meus exames?",
            resposta: "Os resultados de exames ficam disponíveis no Portal do Paciente. Acesse a área 'Acesso Paciente' e utilize seu login e senha para baixar ou visualizar seus laudos."
        },
    ];

    return (
        // Estilização limpa e profissional
        <div className="p-4 md:p-8 bg-hc-fundo min-h-screen">
            <div className="container mx-auto max-w-4xl">
                
                <header className="text-center mb-10">
                    {/* Título com a cor principal */}
                    <h1 className="text-4xl font-extrabold text-hc-principal mb-2">Perguntas Frequentes (FAQ)</h1>
                    <p className="text-lg text-gray-600">Encontre respostas rápidas para suas dúvidas sobre nossos serviços.</p>
                </header>

                {/* Lista de Perguntas (Usando o componente modular) */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            pergunta={item.pergunta}
                            resposta={item.resposta}
                        />
                    ))}
                </div>
                
                <div className="mt-10 text-center p-6 bg-hc-principal/5 rounded-lg border border-hc-secundaria/30">
                    <p className="text-gray-700">Não encontrou sua resposta? Use a seção <a href="/fale-conosco" className="text-hc-principal font-bold hover:underline">Fale Conosco</a>.</p>
                </div>
            </div>
        </div>
    );
};

export default SuporteVirtual;