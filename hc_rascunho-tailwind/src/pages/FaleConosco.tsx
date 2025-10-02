import React from 'react';
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

type ContatoInputs = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
};

const FaleConosco: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContatoInputs>();
  
  const onSubmit: SubmitHandler<ContatoInputs> = data => {
    alert('Sua mensagem foi enviada ao Hospital das Clínicas. Responderemos em breve.');
    reset(); 
  };

  return (
    <div className="min-h-screen bg-hc-fundo flex flex-col">
        <HeaderHC />
        
        <main className="flex justify-center p-4 md:p-8 flex-grow container mx-auto">
            <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-2xl">
                <h1 className="text-3xl font-bold text-hc-principal mb-2 text-center">Entre em Contato</h1>
                <p className="text-gray-500 mb-8 text-center">Use o formulário abaixo ou veja nossos canais de atendimento.</p>

                <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
                    
                    <InputForm<ContatoInputs> label="Nome Completo" name="nome" register={register} errors={errors}
                        rules={{ required: "O nome é obrigatório." }}
                    />
                    <InputForm<ContatoInputs> label="E-mail" name="email" type="email" register={register} errors={errors}
                        rules={{ required: "O e-mail é obrigatório.", pattern: { value: /^\S+@\S+$/i, message: "Formato inválido." } }}
                    />
                    <InputForm<ContatoInputs> label="Assunto" name="assunto" register={register} errors={errors}
                        rules={{ required: "O assunto é obrigatório." }}
                    />

                    {/* Campo MENSAGEM (Textarea) */}
                    <div className="mb-6">
                        <label htmlFor="mensagem" className="block text-gray-700 font-medium mb-1">Sua Mensagem</label>
                        <textarea
                            id="mensagem" rows={4}
                            className={`w-full p-3 border rounded-md transition duration-150 ${errors.mensagem ? 'border-red-500' : 'border-gray-300 focus:ring-hc-secundaria'}`}
                            {...register("mensagem", { required: "A mensagem é obrigatória.", minLength: { value: 10, message: "Mínimo 10 caracteres." } })}
                        ></textarea>
                        {errors.mensagem && <p className="text-red-500 text-sm mt-1">{String(errors.mensagem.message)}</p>}
                    </div>

                    <button type="submit" className="w-full bg-hc-secundaria text-white font-bold py-3 rounded-lg shadow-lg hover:bg-hc-principal transition duration-150">
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </main>
        
        <FooterHC />
    </div>
  );
};

export default FaleConosco;