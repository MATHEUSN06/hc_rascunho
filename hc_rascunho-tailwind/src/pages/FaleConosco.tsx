import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputForm } from '../components/InputForm'; // Componente de input modular

// 1. Tipagem para as entradas do formulário de Contato
type ContatoInputs = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
};

const FaleConosco: React.FC = () => {
  // 2. Utilização do HookForm
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContatoInputs>();
  
  // 3. Função de envio tipada
  const onSubmit: SubmitHandler<ContatoInputs> = data => {
    console.log("Mensagem Enviada:", data);
    alert('Sua mensagem foi enviada ao Hospital das Clínicas. Responderemos em breve.');
    reset(); // Limpa o formulário após o envio
  };

  return (
    // Estilização responsiva e centralizada
    <div className="flex justify-center p-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-2xl">
        
        {/* Título com a cor principal do HC */}
        <h1 className="text-3xl font-bold text-hc-principal mb-2 text-center">Entre em Contato</h1>
        <p className="text-gray-500 mb-8 text-center">Use o formulário abaixo ou veja nossos canais de atendimento.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
            
            {/* Campo NOME (Modular) */}
            <InputForm
              label="Nome Completo"
              name="nome"
              register={register}
              errors={errors}
              // Validação obrigatória
              rules={{ required: "O nome é obrigatório." }}
            />

            {/* Campo EMAIL (Modular) */}
            <InputForm
              label="E-mail"
              name="email"
              type="email"
              register={register}
              errors={errors}
              // Validação de formato e obrigação
              rules={{ 
                required: "O e-mail é obrigatório.", 
                pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Formato de e-mail inválido."
                }
              }}
            />

            {/* Campo ASSUNTO (Modular) */}
            <InputForm
              label="Assunto"
              name="assunto"
              register={register}
              errors={errors}
              rules={{ required: "O assunto é obrigatório." }}
            />

            {/* Campo MENSAGEM (Textarea personalizado) */}
            <div className="mb-6">
                <label htmlFor="mensagem" className="block text-gray-700 font-medium mb-1">Sua Mensagem</label>
                <textarea
                    id="mensagem"
                    rows={4}
                    className={`w-full p-3 border rounded-md transition duration-150 
                        ${errors.mensagem ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-hc-secundaria focus:border-hc-secundaria'}`}
                    {...register("mensagem", { required: "A mensagem é obrigatória.", minLength: { value: 10, message: "A mensagem deve ter no mínimo 10 caracteres." } })}
                ></textarea>
                {errors.mensagem && <p className="text-red-500 text-sm mt-1">{String(errors.mensagem.message)}</p>}
            </div>


            {/* Botão de Envio com cor secundária (Verde-Água) */}
            <button 
                type="submit" 
                className="w-full bg-hc-secundaria text-white font-bold py-3 rounded-lg shadow-lg hover:bg-hc-principal transition duration-150"
            >
                Enviar Mensagem
            </button>
        </form>
      </div>
    </div>
  );
};

export default FaleConosco;