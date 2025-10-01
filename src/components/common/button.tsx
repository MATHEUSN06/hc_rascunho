import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-hospital-green text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
    >
      {children}
    </button>
  );
};

export default Button;