# FleetCtrl - Páginas Legais

Este é um projeto React estático que contém as páginas legais necessárias para a publicação do aplicativo FleetCtrl nas lojas de aplicativos.

## Páginas Incluídas

- **Página Inicial**: Apresentação do FleetCtrl e navegação para as páginas legais
- **Política de Privacidade**: Documento completo sobre coleta e uso de dados
- **Termos de Uso**: Termos e condições de uso do aplicativo

## Tecnologias Utilizadas

- React 18
- React Router DOM
- CSS3 com design responsivo
- HTML5 semântico

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto em modo de desenvolvimento:
```bash
npm start
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### Build para Produção

Para gerar os arquivos estáticos para deploy:

```bash
npm run build
```

Os arquivos serão gerados na pasta `build/`.

## Estrutura do Projeto

```
src/
├── components/
│   ├── Header.js          # Cabeçalho com navegação
│   └── Footer.js          # Rodapé com links
├── pages/
│   ├── Home.js            # Página inicial
│   ├── Privacy.js         # Política de privacidade
│   └── Terms.js           # Termos de uso
├── App.js                 # Componente principal com roteamento
├── App.css                # Estilos principais
├── index.js               # Ponto de entrada
└── index.css              # Estilos globais
```

## Personalização

### Alterando Informações de Contato

Edite os arquivos `src/pages/Privacy.js` e `src/pages/Terms.js` para atualizar:
- Emails de contato
- Números de telefone
- Endereços
- Informações da empresa

### Modificando o Design

Os estilos principais estão em:
- `src/App.css` - Estilos dos componentes principais
- `src/index.css` - Estilos globais e utilitários

### Adicionando Novas Páginas

1. Crie o componente da página em `src/pages/`
2. Adicione a rota em `src/App.js`
3. Inclua o link no `Header.js` e `Footer.js`

## Deploy

Este projeto pode ser hospedado em qualquer serviço de hospedagem estática:

- **Netlify**: Conecte o repositório e configure o build command como `npm run build`
- **Vercel**: Deploy automático a partir do repositório
- **GitHub Pages**: Use o comando `npm run build` e hospede a pasta `build/`
- **AWS S3**: Faça upload da pasta `build/` para um bucket S3

## Licença

Este projeto é proprietário do FleetCtrl. Todos os direitos reservados.
