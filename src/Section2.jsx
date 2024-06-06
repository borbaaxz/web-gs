import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web'; // Importe useSpring e animated
import './Section1.css'; // Importe o arquivo CSS
import  Navbar  from './Navbar';

function Section2() {
  // Animations
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });
  const slideIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
  const floatIn = useSpring({
    to: { transform: 'translateY(-10px)' },
    from: { transform: 'translateY(10px)' },
    loop: true,
    config: { duration: 1500 },
  });

  return (
    <div>
      {/* Header */}
      <Navbar />

      <div className="section-container">
        <animated.div style={fadeIn}>
          <animated.div style={slideIn}>
            <div className="escritas" style={floatIn}>
            <h2>Azul Sustentável</h2>
        <p>
          O conceito de "Azul Sustentável" no contexto do Oceans 20 (O20) refere-se a uma abordagem integrada e holística para a gestão e utilização dos recursos oceânicos, com o objetivo de promover práticas econômicas que sejam ao mesmo tempo ambientalmente sustentáveis e economicamente viáveis. Aqui estão os principais pilares do Azul Sustentável conforme promovido pelo O20:
        </p>
        <ul>
          <li>Proteção Ambiental: Implementar e apoiar medidas para proteger ecossistemas marinhos vulneráveis, incluindo recifes de corais, manguezais e habitats de espécies ameaçadas. Desenvolver iniciativas para reduzir a poluição marinha, incluindo a gestão de resíduos, redução do uso de plásticos e controle da poluição química e agrícola. Desenvolver estratégias para mitigar os efeitos das mudanças climáticas nos oceanos, como o aumento da temperatura da água e a acidificação dos oceanos.</li>
          <li>Economia Azul Sustentável: Promover práticas de pesca que garantam a sustentabilidade das populações de peixes e minimizem os impactos sobre os ecossistemas marinhos. Incentivar métodos de aquicultura que sejam ecologicamente corretos, reduzindo os impactos negativos sobre os habitats marinhos e a biodiversidade. Fomentar o turismo que respeite o meio ambiente marinho, promovendo a conscientização e a educação sobre a importância da conservação dos oceanos.</li>
          <li>Inovação Científica: Apoiar a pesquisa científica e a inovação tecnológica para entender melhor os oceanos e desenvolver soluções para desafios como a acidificação dos oceanos, a perda de biodiversidade e a poluição por plásticos. Investir em tecnologias que promovam a sustentabilidade dos recursos oceânicos, como energias renováveis marinhas e tecnologias de monitoramento ambiental.</li>
          <li>Educação e Conscientização: Desenvolver campanhas de conscientização para aumentar o entendimento público sobre a importância dos oceanos e as ameaças que eles enfrentam. Implementar programas educacionais em escolas e comunidades para promover a conservação marinha e incentivar uma cultura de responsabilidade ambiental. Envolver as comunidades locais na gestão dos recursos marinhos, incentivando práticas sustentáveis e promovendo o desenvolvimento econômico local de maneira responsável.</li>
        </ul>
      </div>
          </animated.div>
        </animated.div>
      </div>        
    </div>
  );
}

export default Section2;