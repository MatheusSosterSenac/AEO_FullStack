import React from 'react';
import docker from '../assets/docker.jpeg';
import dockerimg from '../assets/DockerFile_Diagram-min.png';
import '../styles/sobre.css';
export default function DevOps() {
  return (
    <div className="container">
      <h1 className="titulo">Sobre o Docker</h1>
      <div className='divimg'>
        <img src={docker} className='imgdocker'></img>
      </div>
      <p className="descricao">Conheça mais sobre o Docker</p>

      <h2 className="subtitulo">O que é Docker?</h2>
      <p className='texto'>
        O Docker é uma plataforma de software de código aberto que permite aos desenvolvedores criar, enviar e executar aplicativos dentro de contêineres. Esses contêineres são leves, portáteis e isolados, o que facilita a implantação de aplicativos em diferentes ambientes. Ele automatiza a implantação de aplicações dentro de contêineres de software, proporcionando uma camada adicional de abstração e automação de virtualização a nível de sistema operacional.
      </p>
      
      <h2 className="subtitulo">História</h2>
      <p className='texto'>
        O Docker foi lançado em 2013 por Solomon Hykes como parte da empresa dotCloud. Desde então, tornou-se uma das ferramentas mais populares para desenvolvimento e implantação de aplicativos. Em 2014, a empresa mudou seu nome para Docker, Inc. A tecnologia de contêineres em si existe há algum tempo, mas o Docker simplificou significativamente o processo, tornando-o mais acessível para desenvolvedores e empresas de todos os portes.
      </p>

      <h2 className="subtitulo">Princípios Fundamentais</h2>
      <ul>
        <li>Contêinerização: O Docker usa contêineres para encapsular aplicativos e suas dependências, garantindo que funcionem de maneira consistente em diferentes ambientes. Isso inclui bibliotecas, variáveis de ambiente e arquivos de configuração necessários.</li>
        <li>Portabilidade: Os contêineres Docker podem ser executados em qualquer sistema que suporte Docker, independentemente do sistema operacional, tornando a movimentação entre ambientes de desenvolvimento, teste e produção mais fluida.</li>
        <li>Isolamento: Cada contêiner Docker é isolado dos outros, garantindo que os aplicativos não interfiram uns com os outros. Isso facilita a depuração e a manutenção, além de melhorar a segurança.</li>
        <li>Escalabilidade: O Docker facilita a escalabilidade dos aplicativos, permitindo que novos contêineres sejam adicionados conforme a demanda aumenta. Isso ajuda a melhorar a eficiência dos recursos e a responder rapidamente às mudanças nas cargas de trabalho.</li>
        <li>Eficiência de Recursos: O Docker utiliza recursos de maneira mais eficiente do que as máquinas virtuais tradicionais, permitindo que mais contêineres sejam executados na mesma infraestrutura.</li>
      </ul>

      <h2 className="subtitulo">Componentes Principais</h2>
      <p className='texto'>
        O Docker é composto por vários componentes principais:
      </p>
      <ul>
        <li>Docker Engine: O núcleo do Docker, responsável pela criação e execução de contêineres.</li>
        <li>Docker Hub: Um serviço de registro e compartilhamento de contêineres. Permite que os desenvolvedores publiquem e compartilhem imagens de contêineres.</li>
        <li>Docker Compose: Uma ferramenta para definir e executar aplicativos Docker multi-contêiner. Utiliza arquivos YAML para configurar os serviços do aplicativo.</li>
        <li>Docker Swarm: Um sistema nativo de orquestração de contêineres do Docker, que permite o gerenciamento e escalonamento de contêineres em um cluster.</li>
      </ul>

      <h2 className="subtitulo">Imagens Docker</h2>
      <p className='texto'>
        Uma imagem Docker é um pacote leve, stand-alone e executável que inclui tudo o que é necessário para rodar um pedaço de software, incluindo o código, uma runtime, bibliotecas, variáveis de ambiente e arquivos de configuração. Elas são criadas a partir de um Dockerfile, que é um script de texto simples que contém uma série de comandos que a Docker Engine irá rodar para montar a imagem.
      </p>
      <p className='texto'>
        <i>Componentes chave de uma imagem Docker:</i>
      </p>
      <ul>
        <li>Base Image: A imagem de base a partir da qual sua imagem Docker será construída. Por exemplo, uma imagem Ubuntu ou uma imagem do Node.js.</li>
        <li>Layers: Cada instrução no Dockerfile cria uma camada. Quando a imagem é construída, essas camadas são empilhadas e consolidadas em uma única imagem.</li>
        <li>Union File System: Este sistema permite que a Docker Engine crie uma única imagem a partir dessas múltiplas camadas.</li>
      </ul>

      <h2 className="subtitulo">Docker Hub</h2>
      <p className='texto'>
        O Docker Hub é um serviço de registro baseado em nuvem que permite armazenar e compartilhar imagens Docker. É como um GitHub para contêineres Docker, onde você pode encontrar uma vasta coleção de imagens oficiais e de comunidade.
      </p>
      <p className='texto'>
        <i>Funcionalidades do Docker Hub:</i>
      </p>
      <ul>
        <li>Repositórios Públicos e Privados: Você pode criar repositórios públicos para compartilhar suas imagens com a comunidade ou repositórios privados para uso interno.</li>
        <li>Automated Builds: O Docker Hub pode ser configurado para construir automaticamente uma imagem a partir de um repositório do GitHub ou Bitbucket toda vez que você fizer push de uma atualização no código.</li>
        <li>Webhooks: Permitem notificações automáticas a outros serviços quando uma nova imagem é construída ou atualizada.</li>
        <li>Explorar Imagens: Você pode pesquisar e baixar imagens de outros usuários ou organizações. As imagens oficiais são mantidas pela Docker e pela comunidade, oferecendo versões otimizadas e seguras de aplicações comuns como Nginx, MongoDB, Redis, etc.</li>
      </ul>
      <div className='divimg'>
        <img src={dockerimg} className='imgdocker2'></img>
      </div>
      <h2 className="subtitulo">Como Usar</h2>
      <p className='texto'>
        Para usar o Docker Hub:
      </p>
      <ul>
        <li><strong>Fazer login no Docker Hub:</strong>
          <pre>
            <code>
              docker login
            </code>
          </pre>
        </li>
        <li><strong>Puxar uma imagem do Docker Hub:</strong>
          <pre>
            <code>
              docker pull [nome-da-imagem]
            </code>
          </pre>
        </li>
        <li><strong>Enviar uma imagem para o Docker Hub:</strong>
          <pre>
            <code>
              docker push [nome-do-repositório]
            </code>
          </pre>
        </li>
      </ul>

      <h2 className="subtitulo">Docker Hoje</h2>
      <p className='texto'>
        Hoje, o Docker é amplamente utilizado em ambientes de desenvolvimento, teste e produção. Ele é uma ferramenta essencial para DevOps e CI/CD (Integração Contínua/Entrega Contínua), ajudando as equipes a entregar software de forma mais rápida e eficiente. Além disso, o Docker é suportado por uma grande comunidade de desenvolvedores e empresas, que contribuem para seu contínuo desenvolvimento e aprimoramento.
      </p>

      <h2 className="subtitulo">Casos de Uso</h2>
      <p className='texto'>
        Alguns dos principais casos de uso do Docker incluem:
      </p>
      <ul>
        <li>Desenvolvimento e Teste: Facilita a criação de ambientes de desenvolvimento consistentes e isolados.</li>
        <li>Microserviços: Ideal para arquiteturas baseadas em microserviços, onde cada serviço pode ser encapsulado em um contêiner.</li>
        <li>CI/CD: Integração contínua e entrega contínua, automatizando a construção, teste e implantação de aplicativos.</li>
        <li>Escalabilidade: Permite a fácil escalabilidade horizontal de aplicativos, adicionando ou removendo contêineres conforme necessário.</li>
      </ul>

      <h2 className="subtitulo">Recursos Adicionais</h2>
      <p className='texto'>Para saber mais sobre Docker, confira os seguintes recursos:</p>
      <ul>
        <li><a href="https://www.docker.com" target="_blank" rel="noopener noreferrer">Site Oficial do Docker</a></li>
        <li><a href="https://www.redhat.com/pt-br/topics/containers/what-is-docker" target="_blank" rel="noopener noreferrer">Red Hat - O que é Docker?</a></li>
        <li><a href="https://www.alura.com.br/artigos/comecando-com-docker" target="_blank" rel="noopener noreferrer">Alura - Começando com Docker</a></li>
      </ul>
    </div>
  );
}
