import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/">Início</Link>
          <Link to="/privacidade">Política de Privacidade</Link>
          <Link to="/termos">Termos de Uso</Link>
        </div>
        <p>&copy; 2024 FleetCtrl. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
