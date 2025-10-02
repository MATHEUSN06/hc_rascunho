import React from 'react';
import { UseFormRegister, FieldValues, FieldErrors, RegisterOptions, Path } from 'react-hook-form';


interface InputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  rules?: RegisterOptions<T, Path<T>>; 
}

export const InputForm = <T extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  errors,
  rules
}: InputProps<T>) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        id={name}
        type={type}
        className={`w-full p-3 border rounded-md transition duration-150 
          ${errors[name] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-hc-secundaria focus:border-hc-secundaria'}`}
        {...register(name, rules)} 
      />
      {}
      {errors[name]?.message && (
        <p className="text-red-500 text-sm mt-1">{String(errors[name]?.message)}</p>
      )}
    </div>
  );
};