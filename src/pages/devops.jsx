import React from 'react';
import '../styles/sobre.css';

export default function DevOps() {
  return (
    <div className="container">
      <h1 className="titulo">Sobre o Libertarianismo</h1>
      <p className="descricao">Conheça mais sobre essa filosofia política</p>

      <h2 className="subtitulo">O que é Libertarianismo?</h2>
      <p className='texto'>
        O libertarianismo é uma filosofia política que defende a maximização da liberdade individual e a minimização da intervenção estatal. Seus princípios fundamentais incluem a soberania individual, a propriedade privada e a livre associação.
      </p>
      
      <h2 className="subtitulo">História</h2>
      <p className='texto'>
        As raízes do libertarianismo podem ser traçadas até os filósofos clássicos liberais como John Locke e Adam Smith. No século 20, figuras como Friedrich Hayek, Ayn Rand e Murray Rothbard deram forma moderna à filosofia, enfatizando a importância do livre mercado e da não agressão.
      </p>

      <h2 className="subtitulo">Princípios Fundamentais</h2>
      <ul>
        <li>Liberdade Individual: A crença de que cada pessoa deve ser livre para fazer suas próprias escolhas, desde que não infrinja os direitos dos outros.</li>
        <li>Propriedade Privada: A defesa da propriedade privada como um direito fundamental e essencial para a liberdade econômica.</li>
        <li>Mercado Livre: A convicção de que os mercados livres são a melhor forma de organizar a atividade econômica, promovendo eficiência e inovação.</li>
        <li>Não Agressão: O princípio de que a força não deve ser usada contra outros, exceto em autodefesa.</li>
      </ul>

      <h2 className="subtitulo">Libertarianismo Hoje</h2>
      <p className='texto'>
        Hoje, o libertarianismo é um movimento global com seguidores e partidos políticos em vários países. Ele continua a influenciar debates sobre política econômica, direitos civis e a função do governo na sociedade.
      </p>

      <h2 className="subtitulo">Recursos Adicionais</h2>
      <p className='texto'>Para saber mais sobre libertarianismo, confira os seguintes recursos:</p>
      <ul>
        <li><a href="https://www.mises.org" target="_blank" rel="noopener noreferrer">Instituto Ludwig von Mises</a></li>
        <li><a href="https://www.libertarianism.org" target="_blank" rel="noopener noreferrer">Libertarianism.org</a></li>
        <li><a href="https://www.cato.org" target="_blank" rel="noopener noreferrer">Cato Institute</a></li>
      </ul>
    </div>
  );
}
