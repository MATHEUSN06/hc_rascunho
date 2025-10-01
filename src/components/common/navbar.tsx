import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Hospital das Clínicas</div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-300">
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;