import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { InputForm } from '../components/InputForm'; 
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------
// IMPORTANTE: DEFINIÇÃO DO HEADER E FOOTER REPETIDA (COMO REQUISITADO)
// ----------------------------------------------------------------------

const HeaderHC: React.FC = () => (
    <header className="bg-hc-principal text-gray-100 p-4 shadow-xl">
        <nav className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-extrabold tracking-tight"><Link to="/">HOSPITAL CLÍNICAS</Link></div>
            <ul className="flex space-x-6 text-sm items-center">
                <li><Link to="/" className="hover:text-hc-secundaria transition">Início</Link></li>
                <li><Link to="/about" className="hover:text-hc-secundaria transition">Sobre</Link></li>
                <li><Link to="/integrantes" className="hover:text-hc-secundaria transition">Equipe</Link></li>
                <li><Link to="/agendamento" className="hover:text-hc-secundaria transition">Agendamento</Link></li>
                <li><Link to="/fale-conosco" className="hover:text-hc-secundaria transition">Contato</Link></li>
                <li><Link to="/acesso-paciente" className="bg-hc-secundaria text-hc-principal font-semibold px-4 py-2 rounded-lg">Acesso Paciente</Link></li>
            </ul>
        </nav>
    </header>
);

const FooterHC: React.FC = () => (
    <footer className="bg-hc-principal text-white pt-10 pb-6">
        <div className="container mx-auto px-4"><div className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Hospital das Clínicas. Projeto de Componentização React.
        </div></div>
    </footer>
);

// ----------------------------------------------------------------------

type LoginInputs = { documento: string; senha: string; };
type CadastroInputs = LoginInputs & { nome: string; email: string; };

const AcessoPaciente: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); // Hook: Alterna Login/Cadastro
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginInputs | CadastroInputs>();

  const onSubmit: SubmitHandler<LoginInputs | CadastroInputs> = data => {
    alert(isLogin ? "Login efetuado com sucesso!" : "Cadastro realizado! Faça o login.");
    reset();
  };

  return (
    <div className="min-h-screen bg-hc-fundo flex flex-col">
        <HeaderHC />
        
        <main className="flex justify-center p-4 md:p-8 flex-grow container mx-auto">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
                <h1 className="text-3xl font-bold text-hc-principal mb-2 text-center">
                    {isLogin ? 'Acesso ao Portal' : 'Novo Cadastro'}
                </h1>
                <p className="text-gray-500 mb-8 text-center">
                    {isLogin ? 'Entre com seu documento e senha.' : 'Crie sua conta para acessar seus dados.'}
                </p>

                <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}> 
                    
                    {!isLogin && (
                        <>
                            <InputForm<CadastroInputs> label="Nome Completo" name="nome" register={register} errors={errors as FieldErrors<CadastroInputs>}
                                rules={{ required: "O nome é obrigatório." }}
                            />
                            <InputForm<CadastroInputs> label="E-mail" name="email" type="email" register={register} errors={errors as FieldErrors<CadastroInputs>}
                                rules={{ required: "O e-mail é obrigatório." }}
                            />
                        </>
                    )}

                    <InputForm<LoginInputs> label={isLogin ? "RM / CPF" : "CPF"} name="documento" register={register} errors={errors as FieldErrors<LoginInputs>}
                        rules={{ required: `O ${isLogin ? 'documento' : 'CPF'} é obrigatório.` }}
                    />

                    <InputForm<LoginInputs> label="Senha" name="senha" type="password" register={register} errors={errors as FieldErrors<LoginInputs>}
                        rules={{ required: "A senha é obrigatória.", minLength: { value: 6, message: "Mínimo 6 caracteres." } }}
                    />

                    <button type="submit" className="mt-6 w-full bg-hc-secundaria text-white font-bold py-3 rounded-lg shadow-lg hover:bg-hc-principal transition duration-150">
                        {isLogin ? 'Acessar Conta' : 'Finalizar Cadastro'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        {isLogin ? 'Não tem conta?' : 'Já tem um cadastro?'}
                        <button onClick={() => setIsLogin(!isLogin)} className="ml-2 font-semibold text-hc-principal hover:text-hc-secundaria transition">
                            {isLogin ? 'Cadastre-se Aqui' : 'Fazer Login'}
                        </button>
                    </p>
                </div>
            </div>
        </main>
        
        <FooterHC />
    </div>
  );
};

export default AcessoPaciente;