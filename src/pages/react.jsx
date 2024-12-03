import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "../../src/styles/react.css";
import routerLogo from './imagem.png';

const ContadorInterativo = () => {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>Contador: <strong>{contador}</strong></p>
            <Button variant="primary" onClick={() => setContador(contador + 1)}>
                Incrementar
            </Button>
        </div>
    );
};

const ContadorComEfeito = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Você clicou ${count} vezes`;
    }, [count]); // O efeito será executado sempre que "count" mudar.

    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <Button variant="secondary" onClick={() => setCount(count + 1)}>
                Clique aqui
            </Button>
        </div>
    );
};

const UserStateExample = () => {
    const [user, setUser] = useState({ name: 'John', age: 30 });

    const handleClick = () => {
        setUser({ ...user, age: user.age + 1 }); // Atualiza a idade
    };

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <Button variant="info" onClick={handleClick}>Increase Age</Button>
        </div>
    );
};

const JSXExample = () => {
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    const user = {
        firstName: 'Satoshi',
        lastName: 'Nakamoto'
    };

    const element = (
        <h1>
            Hello, {formatName(user)}!
        </h1>
    );

    return element;
};

const ReactExplicativo = () => {
    // Tópicos explicativos sobre React
    const topicos = [
        {
            titulo: "Uso de Hooks - useState",
            descricao: `O Hook **useState** permite gerenciar o estado local de um componente funcional. Ele é útil quando precisamos manter e atualizar dados como números, textos ou objetos.`,
            exemplo: `
function App() {
    const [user, setUser] = useState({ name: 'John', age: 30 });

    const handleClick = () => {
        setUser({ ...user, age: user.age + 1 });
    };

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <button onClick={handleClick}>Increase Age</button>
        </div>
    );
}
            `,
        },
        {
            titulo: "Uso de Hooks - useEffect",
            descricao: `O Hook **useEffect** permite realizar efeitos colaterais em componentes funcionais, como atualizar o título da página ou fazer chamadas para APIs.`,
            exemplo: `
import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Você clicou \${count} vezes\`;
  });

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  );
}
            `,
        },
        {
            titulo: "JSX",
            descricao: `O JSX permite que você escreva código HTML e JavaScript juntos. Ele transforma a sintaxe de HTML em JavaScript, permitindo embutir expressões JavaScript diretamente no JSX.`,
            exemplo: `
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Satoshi',
  lastName: 'Nakamoto'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
            `,
        },
        {
            titulo: "React Router DOM",
            descricao: `O React Router DOM é uma biblioteca essencial para navegação em aplicações React, criando Single Page Applications (SPAs).`,
            exemplo: `
           import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
           
           function App() {
            return (
            <BrowserRouter>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/react">React</Link>
            </nav>
            <Routes>
            <Route path="/" element={<h1>Página Inicial</h1>} />
            <Route path="/react" element={<h1>React</h1>} />
            </Routes>
            </BrowserRouter>
            );
           }
            `,
            imagem: routerLogo, 
        },
        {
            titulo: "Gerenciamento de Estado Global",
            descricao: `
              O React oferece duas opções principais para gerenciamento de estado global:
              - Context API: Abordagem nativa, ideal para projetos pequenos a médios.
              - Redux: Biblioteca externa, projetada para aplicações maiores.
              
              O princípio "Um único ponto da verdade" serve como uma solução para armazenar informações em um único lugar, chamado store. 
              Qualquer acesso aos dados armazenados na aplicação deve ser feito através dele. 
              Quando um determinado dado é atualizado, uma notificação é enviada a todos os componentes inscritos para receber essa informação.
            `,
            exemplo: `
              import { createContext, useContext, useState } from 'react';
      
              const GlobalContext = createContext();
      
              function AppProvider({ children }) {
                const [estado, setEstado] = useState("Valor Inicial");
      
                return (
                  <GlobalContext.Provider value={{ estado, setEstado }}>
                    {children}
                  </GlobalContext.Provider>
                );
              }
      
              function Componente() {
                const { estado, setEstado } = useContext(GlobalContext);
      
                return (
                  <div>
                    <p>Estado: {estado}</p>
                    <button onClick={() => setEstado("Novo Valor")}>Atualizar</button>
                  </div>
                );
              }
      
              function App() {
                return (
                  <AppProvider>
                    <Componente />
                  </AppProvider>
                );
              }
            `,
          },
    ];

    return (
        <Container className="react-explicativo">
            <h1 className="text-center my-4">Guia React: Principais Conceitos</h1>
            <Row>
                {topicos.map((topico, index) => (
                    <Col md={6} key={index} className="mb-4">
                        <Card className="topico shadow-sm">
                            <Card.Body>
                                <Card.Title>{topico.titulo}</Card.Title>
                                <Card.Text>{topico.descricao}</Card.Text>
                                {topico.titulo === "JSX" && (
                                    <div className="interativo my-3">
                                        <h5>Exemplo:</h5>
                                        <JSXExample />
                                    </div>
                                )}
                                {topico.titulo === "Uso de Hooks - useState" && (
                                    <div className="interativo my-3">
                                        <h5>Exemplo:</h5>
                                        <UserStateExample />
                                    </div>
                                )}
                                {topico.titulo === "Uso de Hooks - useEffect" && (
                                    <div className="interativo my-3">
                                        <h5>Exemplo:</h5>
                                        <ContadorComEfeito />
                                    </div>
                                )}
                                {topico.titulo === "React Router DOM" && (
                                <div className="interativo my-3">
                                <h5>Exemplo:</h5>
                                <p>Endereço para a página do react</p> 
                                <img src={topico.imagem} alt="Logo React Router DOM" className="img-fluid" />
                                </div>
                                )}
                                <pre className="codigo">{topico.exemplo}</pre>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ReactExplicativo;
