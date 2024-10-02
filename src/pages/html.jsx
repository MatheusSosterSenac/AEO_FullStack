import React from 'react';
import '../styles/sobre.css';

export default function Sobre() {
  return (
    <div className="container">
      <h1>Principais Tags HTML</h1>

      <section>
        <h2>1. Estruturais</h2>
        <div className="feature">
          <code>&lt;html&gt;</code>: Define um documento HTML.
        </div>
        <div className="feature">
          <code>&lt;head&gt;</code>: Contém metadados sobre o documento.
        </div>
        <div className="feature">
          <code>&lt;body&gt;</code>: Contém o conteúdo visível da página.
        </div>
        <div className="feature">
          <code>&lt;div&gt;</code>: Um contêiner genérico para agrupar elementos.
        </div>
        <div className="feature">
          <code>&lt;span&gt;</code>: Um contêiner em linha para texto ou outros elementos.
        </div>
      </section>

      <section>
        <h2>2. Textuais</h2>
        <div className="feature">
          <code>&lt;h1&gt; - &lt;h6&gt;</code>: Cabeçalhos, com <code>&lt;h1&gt;</code> sendo o mais importante.
        </div>
        <div className="feature">
          <code>&lt;p&gt;</code>: Define um parágrafo de texto.
        </div>
        <div className="feature">
          <code>&lt;a&gt;</code>: Define um link, usando o atributo <code>href</code>.
        </div>
        <div className="feature">
          <code>&lt;strong&gt;</code>: Destaca texto em negrito.
        </div>
        <div className="feature">
          <code>&lt;em&gt;</code>: Destaca texto em itálico.
        </div>
      </section>

      <section>
        <h2>3. Mídia</h2>
        <div className="feature">
          <code>&lt;img&gt;</code>: Insere uma imagem.
        </div>
        <div className="feature">
          <code>&lt;audio&gt;</code>: Insere um áudio.
        </div>
        <div className="feature">
          <code>&lt;video&gt;</code>: Insere um vídeo.
        </div>
      </section>

      <section>
        <h2>4. Formulários</h2>
        <div className="feature">
          <code>&lt;form&gt;</code>: Define um formulário.
        </div>
        <div className="feature">
          <code>&lt;input&gt;</code>: Um campo de entrada.
        </div>
        <div className="feature">
          <code>&lt;textarea&gt;</code>: Campo para texto em várias linhas.
        </div>
        <div className="feature">
          <code>&lt;button&gt;</code>: Define um botão.
        </div>
        <div className="feature">
          <code>&lt;select&gt;</code>: Cria uma lista suspensa de opções.
        </div>
      </section>

      <section>
        <h2>5. Tabelas</h2>
        <div className="feature">
          <code>&lt;table&gt;</code>: Define uma tabela.
        </div>
        <div className="feature">
          <code>&lt;tr&gt;</code>: Define uma linha na tabela.
        </div>
        <div className="feature">
          <code>&lt;td&gt;</code>: Define uma célula na tabela.
        </div>
        <div className="feature">
          <code>&lt;th&gt;</code>: Define um cabeçalho de coluna na tabela.
        </div>
      </section>

      <section>
        <h2>6. Semânticas</h2>
        <div className="feature">
          <code>&lt;header&gt;</code>: Define o cabeçalho da página ou seção.
        </div>
        <div className="feature">
          <code>&lt;footer&gt;</code>: Define o rodapé da página ou seção.
        </div>
        <div className="feature">
          <code>&lt;article&gt;</code>: Define um conteúdo independente.
        </div>
        <div className="feature">
          <code>&lt;section&gt;</code>: Define uma seção no documento.
        </div>
        <div className="feature">
          <code>&lt;nav&gt;</code>: Define um bloco de links de navegação.
        </div>
      </section>

      <h1>Principais Tags HTML</h1>

<section>
  <h2>1. Estruturais</h2>
  <div className="feature">
    <code>&lt;html&gt;</code>: Define um documento HTML.<br />
    <pre>{`<html>
<head>
<title>Meu Documento</title>
</head>
<body>
<h1>Bem-vindo!</h1>
</body>
</html>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;head&gt;</code>: Contém metadados sobre o documento.<br />
    <pre>{`<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;body&gt;</code>: Contém o conteúdo visível da página.<br />
    <pre>{`<body>
<h1>Título Principal</h1>
<p>Parágrafo de texto.</p>
</body>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;div&gt;</code>: Um contêiner genérico para agrupar elementos.<br />
    <pre>{`<div class="container">
<p>Texto dentro de um div.</p>
</div>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;span&gt;</code>: Um contêiner em linha para texto ou outros elementos.<br />
    <pre>{`<p>Texto normal <span style="color:red;">destacado em vermelho</span>.</p>`}</pre>
  </div>
</section>

<section>
  <h2>2. Textuais</h2>
  <div className="feature">
    <code>&lt;h1&gt; - &lt;h6&gt;</code>: Cabeçalhos, com <code>&lt;h1&gt;</code> sendo o mais importante.<br />
    <pre>{`<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Seção</h3>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;p&gt;</code>: Define um parágrafo de texto.<br />
    <pre>{`<p>Este é um parágrafo de texto.</p>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;a&gt;</code>: Define um link, usando o atributo <code>href</code>.<br />
    <pre>{`<a href="https://www.exemplo.com">Clique aqui</a>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;strong&gt;</code>: Destaca texto em negrito.<br />
    <pre>{`<p>Texto <strong>importante</strong> em negrito.</p>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;em&gt;</code>: Destaca texto em itálico.<br />
    <pre>{`<p>Texto <em>enfático</em> em itálico.</p>`}</pre>
  </div>
</section>

<section>
  <h2>3. Mídia</h2>
  <div className="feature">
    <code>&lt;img&gt;</code>: Insere uma imagem.<br />
    <pre>{`<img src="imagem.jpg" alt="Descrição da imagem" />`}</pre>
  </div>
  <div className="feature">
    <code>&lt;audio&gt;</code>: Insere um áudio.<br />
    <pre>{`<audio controls>
<source src="audio.mp3" type="audio/mpeg">
Seu navegador não suporta o elemento de áudio.
</audio>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;video&gt;</code>: Insere um vídeo.<br />
    <pre>{`<video width="320" height="240" controls>
<source src="video.mp4" type="video/mp4">
Seu navegador não suporta o elemento de vídeo.
</video>`}</pre>
  </div>
</section>

<section>
  <h2>4. Formulários</h2>
  <div className="feature">
    <code>&lt;form&gt;</code>: Define um formulário.<br />
    <pre>{`<form action="/submit" method="POST">
<input type="text" name="nome" />
<button type="submit">Enviar</button>
</form>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;input&gt;</code>: Um campo de entrada.<br />
    <pre>{`<input type="text" placeholder="Digite seu nome" />`}</pre>
  </div>
  <div className="feature">
    <code>&lt;textarea&gt;</code>: Campo para texto em várias linhas.<br />
    <pre>{`<textarea rows="4" cols="50"></textarea>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;button&gt;</code>: Define um botão.<br />
    <pre>{`<button type="button">Clique Aqui</button>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;select&gt;</code>: Cria uma lista suspensa de opções.<br />
    <pre>{`<select>
<option value="opcao1">Opção 1</option>
<option value="opcao2">Opção 2</option>
</select>`}</pre>
  </div>
</section>

<section>
  <h2>5. Tabelas</h2>
  <div className="feature">
    <code>&lt;table&gt;</code>: Define uma tabela.<br />
    <pre>{`<table>
<tr>
<th>Nome</th>
<th>Idade</th>
</tr>
<tr>
<td>João</td>
<td>30</td>
</tr>
</table>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;tr&gt;</code>: Define uma linha na tabela.<br />
    <pre>{`<tr>
<td>Texto da célula</td>
</tr>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;td&gt;</code>: Define uma célula na tabela.<br />
    <pre>{`<td>Texto da célula</td>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;th&gt;</code>: Define um cabeçalho de coluna na tabela.<br />
    <pre>{`<th>Texto do Cabeçalho</th>`}</pre>
  </div>
</section>

<section>
  <h2>6. Semânticas</h2>
  <div className="feature">
    <code>&lt;header&gt;</code>: Define o cabeçalho da página ou seção.<br />
    <pre>{`<header>
<h1>Título da Página</h1>
</header>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;footer&gt;</code>: Define o rodapé da página ou seção.<br />
    <pre>{`<footer>
<p>Copyright © 2024</p>
</footer>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;article&gt;</code>: Define um conteúdo independente.<br />
    <pre>{`<article>
<h2>Título do Artigo</h2>
<p>Conteúdo do artigo.</p>
</article>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;section&gt;</code>: Define uma seção no documento.<br />
    <pre>{`<section>
<h2>Título da Seção</h2>
</section>`}</pre>
  </div>
  <div className="feature">
    <code>&lt;nav&gt;</code>: Define um bloco de links de navegação.<br />
    <pre>{`<nav>
<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#about">Sobre</a></li>
</ul>
</nav>`}</pre>
  </div>
</section>
      <br />
      <h1>Propriedades de CSS</h1>

      <section>
        <h2>1. Seletores</h2>
        <p>Os seletores permitem aplicar estilos a elementos específicos.</p>
        <div className="feature">
          <code>.classe</code> - Seleciona todos os elementos com a classe <code>classe</code>.<br />
          <code>#id</code> - Seleciona o elemento com o ID <code>id</code>.<br />
          <code>elemento</code> - Seleciona todos os elementos do tipo <code>elemento</code>.<br />
          <code>[atributo]</code> - Seleciona elementos com um atributo específico.<br />
          <code>:hover</code> - Aplica estilos quando o mouse passa sobre o elemento.<br />
          <code>::before</code> - Adiciona conteúdo antes do elemento.
        </div>
      </section>

      <section>
        <h2>2. Propriedades de Texto</h2>
        <p>Estas propriedades controlam a aparência do texto.</p>
        <div className="feature">
          <code>color</code>: Altera a cor do texto.<br />
          <code>font-size</code>: Define o tamanho da fonte.<br />
          <code>font-weight</code>: Define a espessura da fonte (ex: <code>bold</code>).<br />
          <code>line-height</code>: Controla o espaço entre linhas de texto.<br />
          <code>text-align</code>: Alinha o texto (ex: <code>left</code>, <code>center</code>, <code>right</code>).
        </div>
      </section>

      <section>
        <h2>3. Propriedades de Layout</h2>
        <p>Estas propriedades controlam a posição e o layout dos elementos.</p>
        <div className="feature">
          <code>display</code>: Define como o elemento é exibido (ex: <code>block</code>, <code>inline</code>, <code>flex</code>).<br />
          <code>position</code>: Define o posicionamento (ex: <code>static</code>, <code>relative</code>, <code>absolute</code>, <code>fixed</code>).<br />
          <code>top, right, bottom, left</code>: Controlam a posição dos elementos quando <code>position</code> não é <code>static</code>.<br />
          <code>float</code>: Faz um elemento flutuar à esquerda ou à direita.<br />
          <code>clear</code>: Controla se um elemento pode ser posicionado ao lado de elementos flutuantes.
        </div>
      </section>

      <section>
        <h2>4. Propriedades de Box Model</h2>
        <p>Essas propriedades controlam o espaço em torno dos elementos.</p>
        <div className="feature">
          <code>margin</code>: Espaço externo ao redor do elemento.<br />
          <code>padding</code>: Espaço interno entre o conteúdo e a borda do elemento.<br />
          <code>border</code>: Define a borda do elemento.<br />
          <code>width</code>: Define a largura do elemento.<br />
          <code>height</code>: Define a altura do elemento.
        </div>
      </section>

      <section>
        <h2>5. Propriedades de Background</h2>
        <p>Estas propriedades controlam o fundo dos elementos.</p>
        <div className="feature">
          <code>background-color</code>: Define a cor de fundo.<br />
          <code>background-image</code>: Define uma imagem de fundo.<br />
          <code>background-size</code>: Controla o tamanho da imagem de fundo.<br />
          <code>background-repeat</code>: Define se a imagem de fundo deve se repetir.
        </div>
      </section>

      <section>
        <h2>6. Propriedades de Flexbox e Grid</h2>
        <p>Essas propriedades facilitam o layout de elementos.</p>
        <div className="feature">
          <code>display: flex</code>: Define um contêiner flexível.<br />
          <code>justify-content</code>: Alinha itens dentro do contêiner flexível.<br />
          <code>align-items</code>: Alinha itens ao longo do eixo transversal.<br />
          <code>display: grid</code>: Define um contêiner de grid.<br />
          <code>grid-template-columns</code>: Define as colunas do grid.<br />
          <code>grid-gap</code>: Controla o espaço entre as células do grid.
        </div>
      </section>
      <h1>Propriedades de CSS</h1>

<section>
  <h2>1. Seletores</h2>
  <p>Os seletores permitem aplicar estilos a elementos específicos.</p>
  <div className="feature">
    <code>.classe</code>: Seleciona todos os elementos com a classe <code>classe</code>.<br />
    <pre>{`.classe {
color: blue;
}`}</pre>
  </div>
  <div className="feature">
    <code>#id</code>: Seleciona o elemento com o ID <code>id</code>.<br />
    <pre>{`#meuId {
font-size: 20px;
}`}</pre>
  </div>
  <div className="feature">
    <code>elemento</code>: Seleciona todos os elementos do tipo <code>elemento</code>.<br />
    <pre>{`p {
margin: 10px;
}`}</pre>
  </div>
  <div className="feature">
    <code>[atributo]</code>: Seleciona elementos com um atributo específico.<br />
    <pre>{`input[type="text"] {
border: 1px solid gray;
}`}</pre>
  </div>
  <div className="feature">
    <code>:hover</code>: Aplica estilos quando o mouse passa sobre o elemento.<br />
    <pre>{`a:hover {
text-decoration: underline;
}`}</pre>
  </div>
  <div className="feature">
    <code>::before</code>: Adiciona conteúdo antes do elemento.<br />
    <pre>{`h1::before {
content: "Título: ";
}`}</pre>
  </div>
</section>

<section>
  <h2>2. Propriedades de Texto</h2>
  <p>Estas propriedades controlam a aparência do texto.</p>
  <div className="feature">
    <code>color</code>: Altera a cor do texto.<br />
    <pre>{`p {
color: red;
}`}</pre>
  </div>
  <div className="feature">
    <code>font-size</code>: Define o tamanho da fonte.<br />
    <pre>{`h2 {
font-size: 24px;
}`}</pre>
  </div>
  <div className="feature">
    <code>font-weight</code>: Define a espessura da fonte.<br />
    <pre>{`strong {
font-weight: bold;
}`}</pre>
  </div>
  <div className="feature">
    <code>line-height</code>: Controla o espaço entre linhas de texto.<br />
    <pre>{`p {
line-height: 1.5;
}`}</pre>
  </div>
  <div className="feature">
    <code>text-align</code>: Alinha o texto (ex: <code>left</code>, <code>center</code>, <code>right</code>).<br />
    <pre>{`h1 {
text-align: center;
}`}</pre>
  </div>
</section>

<section>
  <h2>3. Propriedades de Layout</h2>
  <p>Estas propriedades controlam a posição e o layout dos elementos.</p>
  <div className="feature">
    <code>display</code>: Define como o elemento é exibido.<br />
    <pre>{`div {
display: flex;
}`}</pre>
  </div>
  <div className="feature">
    <code>position</code>: Define o posicionamento (ex: <code>static</code>, <code>relative</code>, <code>absolute</code>, <code>fixed</code>).<br />
    <pre>{`div {
position: relative;
top: 10px;
}`}</pre>
  </div>
  <div className="feature">
    <code>top, right, bottom, left</code>: Controlam a posição dos elementos quando <code>position</code> não é <code>static</code>.<br />
    <pre>{`div {
position: absolute;
top: 50px;
left: 100px;
}`}</pre>
  </div>
  <div className="feature">
    <code>float</code>: Faz um elemento flutuar à esquerda ou à direita.<br />
    <pre>{`img {
float: left;
}`}</pre>
  </div>
  <div className="feature">
    <code>clear</code>: Controla se um elemento pode ser posicionado ao lado de elementos flutuantes.<br />
    <pre>{`div {
clear: both;
}`}</pre>
  </div>
</section>

<section>
  <h2>4. Propriedades de Box Model</h2>
  <p>Essas propriedades controlam o espaço em torno dos elementos.</p>
  <div className="feature">
    <code>margin</code>: Espaço externo ao redor do elemento.<br />
    <pre>{`div {
margin: 20px;
}`}</pre>
  </div>
  <div className="feature">
    <code>padding</code>: Espaço interno entre o conteúdo e a borda do elemento.<br />
    <pre>{`div {
padding: 10px;
}`}</pre>
  </div>
  <div className="feature">
    <code>border</code>: Define a borda do elemento.<br />
    <pre>{`div {
border: 1px solid black;
}`}</pre>
  </div>
  <div className="feature">
    <code>width</code>: Define a largura do elemento.<br />
    <pre>{`div {
width: 300px;
}`}</pre>
  </div>
  <div className="feature">
    <code>height</code>: Define a altura do elemento.<br />
    <pre>{`div {
height: 150px;
}`}</pre>
  </div>
</section>

<section>
  <h2>5. Propriedades de Background</h2>
  <p>Estas propriedades controlam o fundo dos elementos.</p>
  <div className="feature">
    <code>background-color</code>: Define a cor de fundo.<br />
    <pre>{`div {
background-color: lightblue;
}`}</pre>
  </div>
  <div className="feature">
    <code>background-image</code>: Define uma imagem de fundo.<br />
    <pre>{`div {
background-image: url('imagem.jpg');
}`}</pre>
  </div>
  <div className="feature">
    <code>background-size</code>: Controla o tamanho da imagem de fundo.<br />
    <pre>{`div {
background-size: cover;
}`}</pre>
  </div>
  <div className="feature">
    <code>background-repeat</code>: Define se a imagem de fundo deve se repetir.<br />
    <pre>{`div {
background-repeat: no-repeat;
}`}</pre>
  </div>
</section>

<section>
  <h2>6. Propriedades de Flexbox e Grid</h2>
  <p>Essas propriedades facilitam o layout de elementos.</p>
  <div className="feature">
    <code>display: flex</code>: Define um contêiner flexível.<br />
    <pre>{`.container {
display: flex;
}`}</pre>
  </div>
  <div className="feature">
    <code>justify-content</code>: Alinha itens dentro do contêiner flexível.<br />
    <pre>{`.container {
justify-content: space-between;
}`}</pre>
  </div>
  <div className="feature">
    <code>align-items</code>: Alinha itens ao longo do eixo transversal.<br />
    <pre>{`.container {
align-items: center;
}`}</pre>
  </div>
  <div className="feature">
    <code>display: grid</code>: Define um contêiner de grid.<br />
    <pre>{`.grid-container {
display: grid;
}`}</pre>
  </div>
  <div className="feature">
    <code>grid-template-columns</code>: Define as colunas do grid.<br />
    <pre>{`.grid-container {
grid-template-columns: repeat(3, 1fr);
}`}</pre>
  </div>
  <div className="feature">
    <code>grid-gap</code>: Controla o espaço entre as células do grid.<br />
    <pre>{`.grid-container {
grid-gap: 10px;
}`}</pre>
  </div>
</section>

      <h1>JavaScript no Frontend</h1>

      <section>
        <h2>1. Manipulação de DOM</h2>
        <p>O DOM permite que o JavaScript interaja e manipule o conteúdo da página web.</p>
        <div className="example">
          <code>document.getElementById</code>: Seleciona um elemento pelo seu ID.<br />
          <code>document.querySelector</code>: Seleciona o primeiro elemento que corresponde ao seletor CSS.<br />
          <code>document.createElement</code>: Cria um novo elemento HTML.<br />
          <code>element.appendChild</code>: Adiciona um elemento filho a um elemento existente.
        </div>
        <div className="code-example">
          <pre>
            {`// Exemplo de uso
const elemento = document.getElementById('minhaDiv');
elemento.textContent = 'Texto alterado!';`}
          </pre>
        </div>
      </section>

      <section>
        <h2>2. Eventos</h2>
        <p>JavaScript pode escutar e responder a eventos do usuário, como cliques e teclas pressionadas.</p>
        <div className="example">
          <code>addEventListener</code>: Registra um evento em um elemento.<br />
          Eventos comuns incluem: <code>click</code>, <code>submit</code>, <code>mouseover</code>, <code>keydown</code>.
        </div>
        <div className="code-example">
          <pre>
            {`// Exemplo de uso
const botao = document.querySelector('.meuBotao');
botao.addEventListener('click', () => {
  alert('Botão clicado!');
});`}
          </pre>
        </div>
      </section>

      <section>
        <h2>3. Manipulação de Dados</h2>
        <p>JavaScript fornece diversas formas de manipular dados usando arrays e objetos.</p>
        <div className="example">
          <code>map</code>: Cria um novo array com os resultados da chamada de uma função em cada elemento.<br />
          <code>filter</code>: Cria um novo array com elementos que atendem a uma condição.<br />
          <code>reduce</code>: Aplica uma função a um acumulador e a cada elemento do array, reduzindo-o a um único valor.
        </div>
        <div className="code-example">
          <pre>
            {`// Exemplo de uso
const numeros = [1, 2, 3];
const quadrados = numeros.map(num => num * num); // [1, 4, 9]`}
          </pre>
        </div>
      </section>

      <section>
        <h2>4. Objetos</h2>
        <p>Objetos em JavaScript são coleções de pares chave-valor.</p>
        <div className="example">
          <pre>{`const pessoa = { nome = 'João', idade = 30 }`}</pre>: Criação e acesso a propriedades de objetos.
        </div>
        <div className="code-example">
          <pre>
          {`// Exemplo de uso
const pessoa = { nome: 'João', idade: 30 };
console.log(pessoa.nome); // João`}
          </pre>
        </div>
      </section>

      <section>
        <h2>5. Funções</h2>
        <p>As funções podem ser declaradas de diferentes formas.</p>
        <div className="example">
          <code>function</code>: Declaração de funções.<br />
          <code>const funcao = function() {}</code>: Expressão de função.<br />
          <code>const funcaoArrow = () => {}</code>: Arrow function.
        </div>
        <div className="code-example">
          <pre>
            {`// Exemplo de uso
const saudacao = () => 'Olá!';
console.log(saudacao()); // Olá!`}
          </pre>
        </div>
      </section>

      <section>
        <h2>6. Fetch API</h2>
        <p>A Fetch API permite que você faça requisições HTTP para obter dados de servidores.</p>
        <div className="example">
          <code>fetch</code>: Faz uma requisição para um recurso da web.<br />
          <code>Promises</code>: Representa a conclusão ou falha de uma operação assíncrona.<br />
          <code>Async/Await</code>: Simplifica o trabalho com Promises.
        </div>
        <div className="code-example">
          <pre>
            {`// Exemplo de uso
const obterDados = async () => {
  try {
    const resposta = await fetch('https://api.exemplo.com/dados');
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error('Erro:', erro);
  }
};

obterDados();`}
          </pre>
        </div>
      </section>
    </div>
  );
}
