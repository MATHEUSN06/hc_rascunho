import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputForm } from '../components/InputForm'; // Componente modular

// 1. Tipagem para o formulário de LOGIN
type LoginInputs = {
  documento: string; // Pode ser RM ou CPF
  senha: string;
};

// 2. Tipagem para o formulário de CADASTRO (Mais campos)
type CadastroInputs = LoginInputs & {
  nome: string;
  email: string;
};

const AcessoPaciente: React.FC = () => {
  // Hook: Alterna entre Login e Cadastro
  const [isLogin, setIsLogin] = useState(true);

  // Define os Hooks de formulário baseados no modo atual
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginInputs | CadastroInputs>();

  // 3. Função de envio
  const onSubmit: SubmitHandler<LoginInputs | CadastroInputs> = data => {
    if (isLogin) {
      console.log("Tentativa de Login:", data);
      alert("Login efetuado com sucesso! Bem-vindo(a) ao Portal HC.");
    } else {
      console.log("Dados de Cadastro:", data);
      alert("Cadastro realizado! Por favor, faça seu login.");
    }
    reset();
  };

  return (
    // Estilização profissional HC
    <div className="flex justify-center p-4 md:p-8 min-h-[70vh]">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
        
        {/* Título */}
        <h1 className="text-3xl font-bold text-hc-principal mb-2 text-center">
          {isLogin ? 'Acesso ao Portal do Paciente' : 'Cadastro de Novo Paciente'}
        </h1>
        <p className="text-gray-500 mb-8 text-center">
          {isLogin ? 'Entre com seu documento e senha.' : 'Crie sua conta para acessar seus dados.'}
        </p>

        <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}> 
          
          {/* CAMPOS DE CADASTRO (Aparecem apenas se NÃO for Login) */}
          {!isLogin && (
            <>
              <InputForm
                label="Nome Completo"
                name="nome"
                register={register}
                errors={errors}
                rules={{ required: "O nome é obrigatório." }}
              />
              <InputForm
                label="E-mail"
                name="email"
                type="email"
                register={register}
                errors={errors}
                rules={{ required: "O e-mail é obrigatório." }}
              />
            </>
          )}

          {/* Campo DOCUMENTO (RM ou CPF) - Comum a ambos */}
          <InputForm
            label={isLogin ? "RM / CPF" : "CPF"}
            name="documento"
            register={register}
            errors={errors}
            rules={{ required: `O ${isLogin ? 'documento' : 'CPF'} é obrigatório.` }}
          />

          {/* Campo SENHA - Comum a ambos */}
          <InputForm
            label="Senha"
            name="senha"
            type="password"
            register={register}
            errors={errors}
            rules={{ 
              required: "A senha é obrigatória.", 
              minLength: { value: 6, message: "A senha deve ter no mínimo 6 caracteres." }
            }}
          />

          {/* Botão Principal com cor secundária (Verde-Água) */}
          <button 
            type="submit" 
            className="mt-6 w-full bg-hc-secundaria text-white font-bold py-3 rounded-lg shadow-lg hover:bg-hc-principal transition duration-150"
          >
            {isLogin ? 'Acessar Conta' : 'Finalizar Cadastro'}
          </button>
        </form>

        {/* Alternar entre Login e Cadastro */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isLogin ? 'Não tem conta?' : 'Já tem um cadastro?'}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 font-semibold text-hc-principal hover:text-hc-secundaria transition"
            >
              {isLogin ? 'Cadastre-se Aqui' : 'Fazer Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcessoPaciente;