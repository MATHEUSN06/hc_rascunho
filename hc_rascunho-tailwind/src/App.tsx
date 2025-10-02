import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importação de TODAS as páginas individuais
import HomeHC from './pages/HomeHC'; 
import AboutHC from './pages/AboutHC'; 
import IntegrantesHC from './pages/IntegrantesHC'; 
import AgendamentoOnline from './pages/agendamentoOnline'; 
import FaleConosco from './pages/FaleConosco'; 
import AcessoPaciente from './pages/AcessoPaciente'; 
import SuporteVirtual from './pages/SuporteVirtual'; 
import NotFound from './pages/NotFound'; 


const AppHC: React.FC = () => (
  <Router>
    {/* LayoutHC foi removido, as rotas carregam as páginas diretamente */}
    <Routes>
      
      {/* ROTAS PRINCIPAIS */}
      <Route path="/" element={<HomeHC />} />
      <Route path="/about" element={<AboutHC />} />
      <Route path="/integrantes" element={<IntegrantesHC />} />
      
      {/* ROTAS DE FUNCIONALIDADE */}
      <Route path="/agendamento" element={<AgendamentoOnline />} />
      <Route path="/fale-conosco" element={<FaleConosco />} />
      <Route path="/acesso-paciente" element={<AcessoPaciente />} />
      <Route path="/suporte-virtual" element={<SuporteVirtual />} />
      
      {/* ROTA FALLBACK: Captura qualquer URL não mapeada */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppHC;