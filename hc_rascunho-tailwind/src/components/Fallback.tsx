import React from 'react';

const Fallback: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <p className="text-red-600">Algo deu errado. Tente novamente!</p>
    </div>
  );
};

export default Fallback;