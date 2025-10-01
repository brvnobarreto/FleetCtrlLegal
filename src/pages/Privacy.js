import React from 'react';

const Privacy = () => {
  return (
    <div className="content">
      <div className="container">
        <h1>Política de Privacidade</h1>
        <p><strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}</p>
        
        <h2>1. Informações Gerais</h2>
        <p>
          Esta Política de Privacidade descreve como o FleetCtrl ("nós", "nosso" ou "aplicativo") 
          coleta, usa e protege suas informações quando você utiliza nosso aplicativo móvel.
        </p>
        
        <h2>2. Informações que Coletamos</h2>
        <h3>2.1 Informações Fornecidas por Você</h3>
        <ul>
          <li>Dados de cadastro (nome, email, telefone)</li>
          <li>Informações da empresa/frota</li>
          <li>Dados dos veículos (placa, modelo, ano)</li>
          <li>Dados de motoristas</li>
        </ul>
        
        <h3>2.2 Informações Coletadas Automaticamente</h3>
        <ul>
          <li>Localização GPS dos veículos (quando autorizado)</li>
          <li>Dados de uso do aplicativo</li>
          <li>Informações do dispositivo (modelo, sistema operacional)</li>
          <li>Logs de atividade</li>
        </ul>
        
        <h2>3. Como Usamos suas Informações</h2>
        <p>Utilizamos suas informações para:</p>
        <ul>
          <li>Fornecer os serviços do aplicativo</li>
          <li>Rastrear e monitorar veículos</li>
          <li>Gerar relatórios e análises</li>
          <li>Melhorar nossos serviços</li>
          <li>Comunicar atualizações importantes</li>
          <li>Cumprir obrigações legais</li>
        </ul>
        
        <h2>4. Compartilhamento de Informações</h2>
        <p>
          Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
          exceto nas seguintes situações:
        </p>
        <ul>
          <li>Com seu consentimento explícito</li>
          <li>Para cumprir obrigações legais</li>
          <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
          <li>Em caso de fusão, aquisição ou venda de ativos</li>
        </ul>
        
        <h2>5. Segurança dos Dados</h2>
        <p>
          Implementamos medidas de segurança técnicas e organizacionais para proteger suas 
          informações contra acesso não autorizado, alteração, divulgação ou destruição.
        </p>
        
        <h2>6. Retenção de Dados</h2>
        <p>
          Mantemos suas informações pelo tempo necessário para fornecer nossos serviços 
          e cumprir obrigações legais. Você pode solicitar a exclusão de seus dados 
          a qualquer momento.
        </p>
        
        <h2>7. Seus Direitos</h2>
        <p>Você tem o direito de:</p>
        <ul>
          <li>Acessar suas informações pessoais</li>
          <li>Corrigir dados incorretos</li>
          <li>Solicitar a exclusão de seus dados</li>
          <li>Revogar consentimentos</li>
          <li>Portabilidade dos dados</li>
        </ul>
        
        <h2>8. Cookies e Tecnologias Similares</h2>
        <p>
          Nosso aplicativo pode usar tecnologias similares a cookies para melhorar sua 
          experiência e analisar o uso do serviço.
        </p>
        
        <h2>9. Alterações nesta Política</h2>
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos 
          sobre mudanças significativas através do aplicativo ou por email.
        </p>
        
        <h2>10. Contato</h2>
        <p>
          Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
        </p>
        <ul>
          <li>Email: privacidade@fleetctrl.com</li>
          <li>Telefone: (11) 99999-9999</li>
        </ul>
      </div>
    </div>
  );
};

export default Privacy;
