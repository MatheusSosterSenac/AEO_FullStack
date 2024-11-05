import React from "react";
import { Link } from "react-router-dom"; // Importe o Link para criar links internos
import "../styles/inicial.css";

export default function Inicial() {
  return (
    <div className="container">
      <h1 className="titulo">Seja bem-vindo</h1>
      <div className="destaque-container">
        <div className="destaque-item">
          <img className="foto" src="https://hermes.dio.me/articles/cover/8baa0855-4bd5-4abf-a007-48527a7c5859.png" alt="Símbolo do Anarcocapitalismo" />
          <h3>O que são HTML, JS e CSS?</h3>
          <p>
          HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. 
          Define o significado e a estrutura do conteúdo da web. Outras tecnologias além do HTML geralmente são usadas para descrever a aparência/apresentação (CSS)
          ou a funcionalidade/comportamento (JavaScript) de uma página da web.
          </p>
          <Link to="/html/" className="saiba-mais-link">Saiba mais</Link>
        </div>
        <div className="destaque-item">
          <img className="foto" src="https://www.freecodecamp.org/portuguese/news/content/images/2023/03/Ekran-Resmi-2019-11-18-18.08.13.png" alt="Capitalismo de Livre Mercado" />
          <h3>O que é React?</h3>
          <p>
          O React é uma das principais bibliotecas utilizadas hoje em dia no desenvolvimento web front-end, que é a parte de qualquer aplicação que interage com o usuário. O React é uma tecnologia que já faz parte de projetos de grandes empresas como Facebook, WhatsApp, Twitter e Netflix.
          </p>
          <Link to="/react/" className="saiba-mais-link">Saiba mais</Link>
        </div>
        <div className="destaque-item">
          <img className="foto" src="https://blog.geekhunter.com.br/wp-content/uploads/2021/02/1_mp91A9RzagntGGjBnwu4Yw.png" alt="Capitalismo de Livre Mercado" />
          <h3>O que é Node?</h3>
          <p>
          Node, geralmente referido como Node.js, é um ambiente de execução JavaScript no lado do servidor. Desenvolvido inicialmente por Ryan Dahl em 2009, ele permite que desenvolvedores usem JavaScript para escrever scripts do lado do servidor, ou seja, scripts que rodam no servidor, em vez de no navegador do cliente. 
          </p>
          <Link to="/node/" className="saiba-mais-link">Saiba mais</Link>
        </div>
        <div className="destaque-item">
          <img className="foto" src="https://community.aws/raw-post-images/concepts/devops-essentials/images/devops_loop.jpeg?imgSize=1600x960" alt="Capitalismo de Livre Mercado" />
          <h3>O que é DevOps?</h3>
          <p>
          DevOps é uma cultura, um conjunto de práticas e uma abordagem que visa unificar o desenvolvimento de software (Development) e as operações de TI (Operations). O objetivo do DevOps é melhorar a colaboração entre estas duas áreas, aumentar a eficiência do desenvolvimento e entrega de software, e proporcionar um ciclo de vida de desenvolvimento mais ágil e contínuo.           </p>
          <Link to="/devops/" className="saiba-mais-link">Saiba mais</Link>
        </div>
      </div>
    </div>
  );
}
