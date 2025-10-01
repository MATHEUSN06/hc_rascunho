import React from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

// Componente modular para campos de formulário
interface InputProps {
  label: string;
  name: string;
  type?: string;
  register: UseFormRegister<FieldValues>; // Prop para HookForm
  errors: FieldErrors; // Prop para erros de validação
}

export const InputForm: React.FC<InputProps> = ({ label, name, type = "text", register, errors }) => (
    <div className="mb-4">
        <label htmlFor={name} className="block text-gray-700 font-medium mb-1">{label}</label>
        <input
            id={name}
            type={type}
            className={`w-full p-3 border rounded-md transition duration-150 
                ${errors[name] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-hc-secundaria focus:border-hc-secundaria'}`}
            {...register(name)}
        />
        {/* Mostra o erro de validação */}
        {errors[name] && <p className="text-red-500 text-sm mt-1">{String(errors[name]?.message)}</p>}
    </div>
);