// Section1.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web'; // Importe useSpring e animated
import './Section1.css';
import  Navbar  from './Navbar';

function Section1() {
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
      <Navbar />
      <div className="section-container">
        <animated.div style={fadeIn}>
          <animated.div style={slideIn}>
            <div className="escritas" style={floatIn}>
              <h1>Missão</h1>
              <p>A missão do O20 é catalisar ações que promovam a sustentabilidade dos oceanos através de abordagens integradas e baseadas em evidências. Nossos principais objetivos incluem:</p>
              <ul>
                <li>Proteção Ambiental: Implementar e apoiar medidas para proteger ecossistemas marinhos vulneráveis, combater a poluição e mitigar os efeitos das mudanças climáticas nos oceanos.</li>
                <li>Economia Azul Sustentável: Desenvolver e promover práticas econômicas que sejam ambientalmente sustentáveis e economicamente viáveis, como a pesca sustentável, aquicultura responsável e turismo ecológico.</li>
                <li>Inovação Científica: Incentivar a pesquisa e a inovação tecnológica para entender melhor os oceanos e desenvolver soluções para desafios como a acidificação dos oceanos, a perda de biodiversidade e a poluição por plásticos.</li>
                <li>Educação e Conscientização: Aumentar a conscientização pública e educar sobre a importância dos oceanos, incentivando uma cultura de conservação e responsabilidade ambiental.</li>
              </ul>
            </div>
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
}

export default Section1;
