import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>FleetCtrl</h1>
          <p>Controle total da sua frota de veículos</p>
          <div className="hero-buttons">
            <Link to="/privacidade" className="btn">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="btn btn-secondary">
              Termos de Uso
            </Link>
          </div>
        </div>
      </section>
      
      <section className="content">
        <div className="container">
          <h2>Sobre o FleetCtrl</h2>
          <p>
            O FleetCtrl é um aplicativo móvel desenvolvido para facilitar o gerenciamento 
            e controle de frotas de veículos. Com nossa solução, você pode monitorar 
            localização em tempo real, controlar custos, gerenciar manutenções e muito mais.
          </p>
          
          <h3>Principais Funcionalidades</h3>
          <ul>
            <li>Rastreamento em tempo real dos veículos</li>
            <li>Controle de combustível e custos</li>
            <li>Agendamento de manutenções</li>
            <li>Relatórios detalhados</li>
            <li>Notificações inteligentes</li>
            <li>Interface intuitiva e fácil de usar</li>
          </ul>
          
          <h3>Para Desenvolvedores</h3>
          <p>
            Este site contém as páginas legais necessárias para a publicação do aplicativo 
            FleetCtrl nas lojas de aplicativos. Aqui você encontrará nossa Política de 
            Privacidade e Termos de Uso atualizados.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
