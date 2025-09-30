    import React from 'react';
     import { Link } from 'react-router-dom';

     const Header: React.FC = () => (
       <header style={{ background: '#333', padding: '10px', color: 'white' }}>
         <nav>
           <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/agendamento">Agendamento</Link></li>
           </ul>
         </nav>
       </header>
     );

     export default Header;