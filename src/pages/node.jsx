// src/pages/Theme.js
import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/fetchData';
import { axiosData } from '../api/axiosData';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaNode } from "react-icons/fa";

function Theme() {
  const [fetchResults, setFetchResults] = useState([]);
  const [axiosResults, setAxiosResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const fetchResponse = await fetchData();
        setFetchResults(fetchResponse);

        const axiosResponse = await axiosData();
        setAxiosResults(axiosResponse);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const conteudo = [
    {
      name: 'O que é Node.js?',
      email: 'Node.js é um ambiente de execução JavaScript do lado do servidor, criado para construir aplicações de rede escaláveis e eficientes. Utiliza o motor V8 do Google Chrome para executar código JavaScript e é conhecido por seu modelo de I/O não bloqueante e orientado a eventos, que o torna ideal para aplicações em tempo real e servidores de alta carga. Node.js permite a construção de aplicações rápidas e escaláveis usando JavaScript no servidor.'
    },
    {
      name: 'História do Node.js',
      email: 'Node.js foi criado por Ryan Dahl em 2009. A ideia surgiu como uma solução para problemas de I/O (input/output) assíncrono e não bloqueante que eram comuns em plataformas tradicionais na época. O primeiro lançamento do Node.js foi em 2009, e desde então, tem evoluído com o apoio de uma comunidade ativa e uma série de melhorias na plataforma.'
    },
    {
      name: 'Arquitetura do Node.js',
      email: 'Node.js é baseado no motor V8 do Google Chrome, que compila JavaScript em código de máquina nativo. A arquitetura do Node.js é orientada a eventos e utiliza um modelo de I/O não bloqueante, o que significa que operações de leitura e escrita não bloqueiam o fluxo de execução do código. Em vez disso, Node.js usa um loop de eventos para processar tarefas e eventos, o que permite lidar com um grande número de conexões simultâneas de forma eficiente.'
    },
    {
      name: 'Principais Recursos',
      email: '1. **Modelo de I/O Não Bloqueante**: Permite que o Node.js execute operações de entrada e saída sem bloquear o fluxo de execução do código. 2. **Loop de Eventos**: Gerencia e distribui eventos e callbacks, garantindo que o código seja executado de forma eficiente. 3. **NPM (Node Package Manager)**: O maior repositório de pacotes de código aberto, que facilita a instalação e gerenciamento de bibliotecas e ferramentas. 4. **Single Threaded**: Usa um único thread para executar código JavaScript, mas pode lidar com muitas conexões simultaneamente através do modelo de I/O não bloqueante.'
    },
    {
      name: 'Comparação com Outras Tecnologias',
      email: 'Node.js se destaca em relação a outras tecnologias por seu modelo de I/O não bloqueante e sua capacidade de lidar com grandes volumes de conexões simultâneas. Comparado a servidores tradicionais como Apache, que usam threads para cada conexão, Node.js usa um modelo baseado em eventos que consome menos recursos e é mais eficiente para aplicações em tempo real. No entanto, para aplicações com processamento intenso de CPU, Node.js pode não ser tão eficiente quanto outras tecnologias baseadas em threads múltiplos.'
    },
    {
      name: 'Casos de Uso',
      email: '1. **Aplicações em Tempo Real**: Como chats e sistemas de notificação, onde a comunicação em tempo real é crucial. 2. **APIs RESTful**: Para a construção de interfaces de programação de aplicações que interagem com clientes e outros serviços. 3. **Servidores Web**: Para servir aplicações web escaláveis e rápidas. 4. **Microservices**: Node.js é frequentemente utilizado em arquiteturas de microserviços devido à sua capacidade de lidar com várias conexões simultâneas e seu suporte para construção de serviços pequenos e independentes.'
    },
    {
      name: 'Bibliotecas Populares do Node.js',
      email: '1. **Express.js**: Um framework minimalista e flexível que fornece um conjunto robusto de funcionalidades para criar aplicações web e APIs. 2. **Socket.io**: Facilita a comunicação bidirecional em tempo real entre clientes e servidores, ideal para aplicações como chats e jogos online. 3. **Mongoose**: Uma biblioteca de modelagem de dados para MongoDB, que facilita a interação com o banco de dados e a validação de dados. 4. **Passport**: Um middleware de autenticação que suporta uma variedade de estratégias de login, incluindo OAuth e autenticação baseada em senha.'
    }
  ];

  const Sidebar = () => {
    return (
      <div className="bg-light p-3 position-fixed d-flex flex-column align-items-center justify-content-center border-end">
        <div className="mb-3">
          <FaNode size={80} />
        </div>
        <p className="text-center">Node.js</p>
      </div>
    );
  };

  const Content = ({ conteudo }) => {
    return (
      <div className="p-4">
        <div className="bg-white p-4 shadow rounded">
          <h1 className="text-primary mb-4">Entendendo o Node.<span className='text-success'>JS</span></h1>
          <h6 className="text-secondary mb-4">Autor: Eduardo Hansen</h6>
          <h5 className="text-muted mb-3">Sumário</h5>
          <ListGroup variant="flush" className="mb-4">
            {conteudo.map((section, index) => (
              <ListGroup.Item key={index} className="border-0">
                <strong>{index + 1}. {section.name}</strong>
              </ListGroup.Item>
            ))}
          </ListGroup>

          {conteudo.map((section, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-dark">{section.name}</h3>
              <p className="text-muted">{section.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={2} className="bg-light p-0">
          <Sidebar />
        </Col>
        <Col xs={10}>
          <Content conteudo={conteudo} />
        </Col>
      </Row>
    </Container>
  );
}

export default Theme;
