import React from 'react';
import { FaNode } from "react-icons/fa";
import '../styles/Theme.css'; // Arquivo de estilização

const Theme = () => {
  const conteudo = [
    {
      name: 'O que é Node.js?',
      description: 'Node.js é um ambiente de execução JavaScript do lado do servidor, criado para construir aplicações de rede escaláveis e eficientes. Utiliza o motor V8 do Google Chrome para executar código JavaScript e é conhecido por seu modelo de I/O não bloqueante e orientado a eventos, que o torna ideal para aplicações em tempo real e servidores de alta carga. Node.js permite a construção de aplicações rápidas e escaláveis usando JavaScript no servidor.'
    },
    {
      name: 'História do Node.js',
      description: 'Node.js foi criado por Ryan Dahl em 2009. A ideia surgiu como uma solução para problemas de I/O (input/output) assíncrono e não bloqueante que eram comuns em plataformas tradicionais na época. O primeiro lançamento do Node.js foi em 2009, e desde então, tem evoluído com o apoio de uma comunidade ativa e uma série de melhorias na plataforma.'
    },
    {
      name: 'Arquitetura do Node.js',
      description: 'Node.js é baseado no motor V8 do Google Chrome, que compila JavaScript em código de máquina nativo. A arquitetura do Node.js é orientada a eventos e utiliza um modelo de I/O não bloqueante, o que significa que operações de leitura e escrita não bloqueiam o fluxo de execução do código. Em vez disso, Node.js usa um loop de eventos para processar tarefas e eventos, o que permite lidar com um grande número de conexões simultâneas de forma eficiente.'
    },
    {
      name: 'Principais Recursos',
      description: '1. **Modelo de I/O Não Bloqueante:** Permite que o Node.js execute operações de entrada e saída sem bloquear o fluxo de execução do código. 2. **Loop de Eventos**: Gerencia e distribui eventos e callbacks, garantindo que o código seja executado de forma eficiente. 3. **NPM (Node Package Manager)**: O maior repositório de pacotes de código aberto, que facilita a instalação e gerenciamento de bibliotecas e ferramentas. 4. **Single Threaded**: Usa um único thread para executar código JavaScript, mas pode lidar com muitas conexões simultaneamente através do modelo de I/O não bloqueante.'
    },
    {
      name: 'Comparação com Outras Tecnologias',
      description: 'Node.js se destaca em relação a outras tecnologias por seu modelo de I/O não bloqueante e sua capacidade de lidar com grandes volumes de conexões simultâneas. Comparado a servidores tradicionais como Apache, que usam threads para cada conexão, Node.js usa um modelo baseado em eventos que consome menos recursos e é mais eficiente para aplicações em tempo real. No entanto, para aplicações com processamento intenso de CPU, Node.js pode não ser tão eficiente quanto outras tecnologias baseadas em threads múltiplos.'
    },
    {
      name: 'Casos de Uso',
      description: '1. **Aplicações em Tempo Real:** Como chats e sistemas de notificação, onde a comunicação em tempo real é crucial. 2. **APIs RESTful**: Para a construção de interfaces de programação de aplicações que interagem com clientes e outros serviços. 3. **Servidores Web**: Para servir aplicações web escaláveis e rápidas. 4. **Microservices**: Node.js é frequentemente utilizado em arquiteturas de microserviços devido à sua capacidade de lidar com várias conexões simultâneas e seu suporte para construção de serviços pequenos e independentes.'
    },
    {
      name: 'Bibliotecas Populares do Node.js',
      description: '1. **Express.js:** Um framework minimalista e flexível que fornece um conjunto robusto de funcionalidades para criar aplicações web e APIs. 2. **Socket.io**: Facilita a comunicação bidirecional em tempo real entre clientes e servidores, ideal para aplicações como chats e jogos online. 3. **Mongoose**: Uma biblioteca de modelagem de dados para MongoDB, que facilita a interação com o banco de dados e a validação de dados. 4. **Passport**: Um middleware de autenticação que suporta uma variedade de estratégias de login, incluindo OAuth e autenticação baseada em senha.'
    },
    {
      name: 'Como Iniciar um Projeto Node.js',
      description: `1. **Instalar Node.js**: Baixe e instale o Node.js do site oficial em [https://nodejs.org](https://nodejs.org).
2. **Inicializar um Projeto**:
   - Crie uma nova pasta para o projeto.
   - Abra o terminal na pasta e execute \`npm init -y\` para criar um arquivo \`package.json\`.
3. **Adicionar Dependências**:
   - Use \`npm install <nome_da_dependencia>\` para instalar pacotes necessários.
   - Por exemplo, \`npm install express\` para criar um servidor web.
4. **Criar um Arquivo de Entrada**:
   - Crie um arquivo \`index.js\` e adicione um código inicial, como:
     \`const express = require('express');\`
     \`const app = express();\`
     \`app.get('/', (req, res) => {res.send('Olá, Node.js!');});\`
     \`app.listen(3000, () => { console.log('Servidor rodando na porta 3000');});\`
5. **Executar o Projeto**:
   - No terminal, execute \`node index.js\`.
   - Acesse [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.`
    }
  ];

  const formatDescription = (description) => {
    return (
      <ul>
        {description.split(/(?=\d\.)/g).map((step, index) => (
          <li key={index}>
            {step
              .trim()
              .split(/(\*\*.*?\*\*)|(`.*?`)|(\[.*?\]\(.*?\))|(\`\`\`.*?\`\`\`)/gs)
              .filter(Boolean)
              .map((part, partIdx) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={partIdx}>{part.replace(/\*\*/g, '')}</strong>;
                }
                if (part.startsWith('`') && part.endsWith('`') && !part.includes('\n')) {
                  return <code key={partIdx}>{part.replace(/`/g, '')}</code>;
                }
                if (part.startsWith('```') && part.endsWith('```')) {
                  return (
                    <pre key={partIdx}>
                      <code>{part.replace(/```(javascript)?\n?/g, '').trim()}</code>
                    </pre>
                  );
                }
                if (part.startsWith('[') && part.includes('](')) {
                  const [text, link] = part.match(/\[(.*?)\]\((.*?)\)/).slice(1);
                  return (
                    <a key={partIdx} href={link} target="_blank" rel="noopener noreferrer">
                      {text}
                    </a>
                  );
                }
                return part;
              })}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="theme-container">
      <aside className="sidebar">
        <FaNode className="icon" />
      </aside>
      <main className="content">
        <div className="content-wrapper">
          <h1>Entendendo o Node.<span>JS</span></h1>
          {conteudo.map((item, index) => (
            <section key={index} className="section">
              <h2>{item.name}</h2>
              {formatDescription(item.description)}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Theme;