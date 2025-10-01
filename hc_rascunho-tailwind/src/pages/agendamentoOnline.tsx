import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputForm } from '../forms/InputForm'; // Importa o componente modular

// Tipagem para as entradas do formulário (Obrigatório em TypeScript + HookForm)
type AgendamentoInputs = {
  nome: string;
  email: string;
  especialidade: string;
  data: string;
};

const AgendamentoOnline: React.FC = () => {
  // Utilização dos Hooks do HookForm
  const { register, handleSubmit, formState: { errors } } = useForm<AgendamentoInputs>();
  
  // Função que será executada no envio do formulário
  const onSubmit: SubmitHandler<AgendamentoInputs> = data => {
    console.log("Agendamento Solicitado:", data);
    alert('Agendamento solicitado com sucesso!'); // Feedback visual
  };

  return (
    <div className="flex justify-center p-4">
      {/* Estilização do card do formulário: branco, arredondado e sombra profissional */}
      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-2xl">
        
        {/* Título com a cor primária do HC */}
        <h1 className="text-3xl font-bold text-hc-principal mb-2">Agendamento Online</h1>
        <p className="text-gray-500 mb-8">Preencha os dados para solicitar sua consulta no Hospital das Clínicas.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
            
            {/* Campo NOME (Usando o componente modular) */}
            <InputForm
              label="Nome Completo"
              name="nome"
              register={register}
              errors={errors}
              // Regra de validação
              rules={{ required: "O nome é obrigatório." }}
            />

            {/* Campo EMAIL */}
            <InputForm
              label="E-mail"
              name="email"
              type="email"
              register={register}
              errors={errors}
              // Regra de validação
              rules={{ required: "O e-mail é obrigatório.", pattern: /^\S+@\S+$/i }}
            />

            {/* Campo ESPECIALIDADE (Exemplo de Select) */}
            <div className="mb-4">
                <label htmlFor="especialidade" className="block text-gray-700 font-medium mb-1">Especialidade</label>
                <select
                    id="especialidade"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-hc-secundaria focus:border-hc-secundaria"
                    {...register("especialidade", { required: "Selecione uma especialidade." })}
                >
                    <option value="">Selecione...</option>
                    <option value="cardiologia">Cardiologia</option>
                    <option value="pediatria">Pediatria</option>
                    <option value="ortopedia">Ortopedia</option>
                </select>
                 {errors.especialidade && <p className="text-red-500 text-sm mt-1">{String(errors.especialidade.message)}</p>}
            </div>

            {/* Campo DATA */}
            <InputForm
              label="Data Desejada"
              name="data"
              type="date"
              register={register}
              errors={errors}
              rules={{ required: "A data é obrigatória." }}
            />

            {/* Botão de Envio com a cor secundária (Verde-Água) */}
            <button 
                type="submit" 
                className="mt-6 w-full bg-hc-secundaria text-hc-principal font-bold py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-150"
            >
                Confirmar Agendamento
            </button>

        </form>
      </div>
    </div>
  );
};

export default AgendamentoOnline;