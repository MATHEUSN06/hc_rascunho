import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { InputForm } from '../components/InputForm'; 


const AcessoPaciente: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<any>(); 

  const onSubmit: SubmitHandler<FieldValues> = data => {
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
    <div className="flex justify-center p-4 md:p-8 bg-hc-fundo min-h-screen"> 
      {}
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-hc-principal/10">
        
        {}
        <h1 className="text-3xl font-extrabold text-hc-principal mb-2 text-center border-b pb-2">
          {isLogin ? 'Acesso ao Portal do Paciente' : 'Cadastro de Novo Paciente'}
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          {isLogin ? 'Entre com seu documento e senha.' : 'Crie sua conta para acessar seus dados.'}
        </p>

        <form onSubmit={handleSubmit(onSubmit)}> 
          
          {}

          {}
          <button 
            type="submit" 
            className="mt-6 w-full bg-hc-secundaria text-white font-bold py-3 rounded-lg shadow-lg hover:bg-hc-principal transition duration-150 focus:outline-none focus:ring-4 focus:ring-hc-secundaria/70 active:scale-[0.99]"
          >
            {isLogin ? 'Acessar Conta' : 'Finalizar Cadastro'}
          </button>
        </form>

        {}
        <div className="mt-6 text-center border-t pt-4 border-gray-100"> {}
          <p className="text-gray-800">
            {isLogin ? 'Não tem conta?' : 'Já tem um cadastro?'}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 font-extrabold text-hc-principal hover:text-hc-secundaria hover:underline transition duration-150"
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