import React from 'react';
// Importação de Hooks e Componentes de Roteamento
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LayoutHC } from './components/layoutHC'; 

// 1. Importação de TODAS as Páginas Estilizadas
import HomeHC from './pages/HomeHC'; 
import AboutHC from './pages/AboutHC'; 
import FaleConosco from './pages/FaleConosco'; 
import AgendamentoOnline from './pages/AgendamentoOnline';
import AcessoPaciente from './pages/AcessoPaciente'; 
import IntegrantesHC from './pages/IntegrantesHC'; 
import SuporteVirtual from './pages/SuporteVirtual'; 
import NotFound from './pages/NotFound'; 


const AppHC: React.FC = () => (
  // O Router habilita a navegação na SPA
  <Router>
    {/* O Layout envolve todas as rotas para garantir Header e Footer consistentes */}
    <LayoutHC> 
      <Routes>
        
        {/* ROTAS PRINCIPAIS */}
        <Route path="/" element={<HomeHC />} />
        <Route path="/about" element={<AboutHC />} />
        <Route path="/integrantes" element={<IntegrantesHC />} /> 
        
        {/* ROTAS DE FUNCIONALIDADE */}
        <Route path="/agendamento" element={<AgendamentoOnline />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/acesso-paciente" element={<AcessoPaciente />} />
        
        {/* ROTAS DE INFORMAÇÃO/SUPORTE */}
        <Route path="/suporte-virtual" element={<SuporteVirtual />} />

        {/* ROTA FALLBACK: Captura qualquer URL não mapeada e exibe o 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LayoutHC>
  </Router>
);

export default AppHC;