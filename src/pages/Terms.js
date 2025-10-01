import React from 'react';

const Terms = () => {
  return (
    <div className="content">
      <div className="container">
        <h1>Termos de Uso</h1>
        <p><strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}</p>
        
        <h2>1. Aceitação dos Termos</h2>
        <p>
          Ao utilizar o aplicativo FleetCtrl, você concorda em cumprir e estar vinculado 
          a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, 
          não deve utilizar nosso aplicativo.
        </p>
        
        <h2>2. Descrição do Serviço</h2>
        <p>
          O FleetCtrl é um aplicativo móvel que oferece soluções de gerenciamento de frotas, 
          incluindo rastreamento de veículos, controle de custos, agendamento de manutenções 
          e geração de relatórios.
        </p>
        
        <h2>3. Cadastro e Conta</h2>
        <h3>3.1 Requisitos para Cadastro</h3>
        <ul>
          <li>Ser maior de 18 anos ou ter representação legal</li>
          <li>Fornecer informações verdadeiras e atualizadas</li>
          <li>Manter a confidencialidade de sua conta</li>
          <li>Notificar imediatamente sobre uso não autorizado</li>
        </ul>
        
        <h3>3.2 Responsabilidades do Usuário</h3>
        <ul>
          <li>Manter informações atualizadas</li>
          <li>Usar o aplicativo de forma responsável</li>
          <li>Respeitar direitos de terceiros</li>
          <li>Não compartilhar credenciais de acesso</li>
        </ul>
        
        <h2>4. Uso Aceitável</h2>
        <p>Você concorda em NÃO:</p>
        <ul>
          <li>Usar o aplicativo para atividades ilegais</li>
          <li>Interferir no funcionamento do serviço</li>
          <li>Tentar acessar contas de outros usuários</li>
          <li>Distribuir malware ou código malicioso</li>
          <li>Violar direitos de propriedade intelectual</li>
          <li>Usar o serviço para spam ou comunicações não solicitadas</li>
        </ul>
        
        <h2>5. Propriedade Intelectual</h2>
        <p>
          O FleetCtrl e todo seu conteúdo, incluindo software, design, textos, gráficos, 
          imagens e logotipos, são propriedade nossa ou de nossos licenciadores e estão 
          protegidos por leis de direitos autorais e outras leis de propriedade intelectual.
        </p>
        
        <h2>6. Privacidade e Proteção de Dados</h2>
        <p>
          O tratamento de dados pessoais é regido por nossa Política de Privacidade, 
          que faz parte integrante destes Termos de Uso. Ao usar o aplicativo, você 
          concorda com a coleta e uso de informações conforme descrito na Política de Privacidade.
        </p>
        
        <h2>7. Disponibilidade do Serviço</h2>
        <p>
          Embora nos esforcemos para manter o serviço disponível 24/7, não garantimos 
          disponibilidade ininterrupta. Podemos realizar manutenções programadas ou 
          enfrentar interrupções por motivos técnicos.
        </p>
        
        <h2>8. Limitação de Responsabilidade</h2>
        <p>
          O FleetCtrl é fornecido "como está". Não garantimos que o serviço atenderá 
          suas necessidades específicas ou estará livre de erros. Nossa responsabilidade 
          é limitada ao máximo permitido por lei.
        </p>
        
        <h2>9. Modificações do Serviço</h2>
        <p>
          Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer 
          parte do serviço a qualquer momento, com ou sem aviso prévio.
        </p>
        
        <h2>10. Rescisão</h2>
        <p>
          Você pode encerrar sua conta a qualquer momento. Podemos suspender ou encerrar 
          sua conta se você violar estes termos ou por outros motivos legítimos.
        </p>
        
        <h2>11. Lei Aplicável</h2>
        <p>
          Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa 
          será resolvida nos tribunais competentes do Brasil.
        </p>
        
        <h2>12. Disposições Gerais</h2>
        <h3>12.1 Alterações nos Termos</h3>
        <p>
          Podemos modificar estes termos a qualquer momento. Alterações significativas 
          serão comunicadas através do aplicativo ou por email.
        </p>
        
        <h3>12.2 Divisibilidade</h3>
        <p>
          Se qualquer disposição destes termos for considerada inválida, as demais 
          disposições permanecerão em pleno vigor.
        </p>
        
        <h3>12.3 Contato</h3>
        <p>
          Para questões relacionadas a estes Termos de Uso, entre em contato:
        </p>
        <ul>
          <li>Email: legal@fleetctrl.com</li>
          <li>Telefone: (11) 99999-9999</li>
          <li>Endereço: Rua Exemplo, 123 - São Paulo, SP - CEP: 01234-567</li>
        </ul>
      </div>
    </div>
  );
};

export default Terms;
