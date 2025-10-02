import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LayoutHC } from './components/layoutHC'; 

import HomeHC from './pages/HomeHC'; 
import AboutHC from './pages/AboutHC'; 
import FaleConosco from './pages/FaleConosco'; 
import AgendamentoOnline from './pages/agendamentoOnline'; 
import AcessoPaciente from './pages/AcessoPaciente'; 
import IntegrantesHC from './pages/IntegrantesHC'; 
import SuporteVirtual from './pages/SuporteVirtual'; 
import NotFound from './pages/NotFound'; 


const AppHC: React.FC = () => (
  <Router>
    {}
    <LayoutHC> 
      <Routes>
        
        {}
        <Route path="/" element={<HomeHC />} />
        <Route path="/about" element={<AboutHC />} />
        <Route path="/integrantes" element={<IntegrantesHC />} /> {}
        
        {}
        <Route path="/agendamento" element={<AgendamentoOnline />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/acesso-paciente" element={<AcessoPaciente />} />
        
        {}
        <Route path="/suporte-virtual" element={<SuporteVirtual />} /> {}

        {}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LayoutHC> 
  </Router>
);

export default AppHC;