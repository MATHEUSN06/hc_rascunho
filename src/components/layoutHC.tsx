import React from 'react';
import HeaderHC from './HeaderHC';
import FooterHC from './FooterHC';

export const LayoutHC: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-blue-700 flex flex-col"> {}
    <HeaderHC />
    <main className="flex-grow pt-20 text-white">
      {children}
    </main>
    <FooterHC />
  </div>
);