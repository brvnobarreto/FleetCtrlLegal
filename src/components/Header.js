import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          FleetCtrl
        </Link>
        <nav className="nav">
          <Link to="/">Início</Link>
          <Link to="/privacidade">Privacidade</Link>
          <Link to="/termos">Termos</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
