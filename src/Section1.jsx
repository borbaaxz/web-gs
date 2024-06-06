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
              <p>O grupo em parceria com a Oceans propõe o desenvolvimento de uma plataforma de monitoramento e gestão sustentável dos oceanos chamada Sustentablue. 
                Esta solução integra várias tecnologiaspara capturar, analisar e visualizar dados sobre a saúde dos oceanos,
                 com o objetivo de reduzir a poluição marinha e promover práticas de economia azul.</p>
                <p>A solução proposta, Sustentablue, aborda diretamente os principais problemas enfrentados pelos oceanos através de uma abordagem tecnológica e integrada. 
                  Aqui estão os principais pontos:</p>
                <p>Tecnologia Simples e Inovadora</p>
                <p>Abordagem Integrada</p>
                <p>Facilidade de Acesso a Dados</p>
                <p>Sustentabilidade Econômica</p>
                <p>Parcerias Estratégicas</p>
              <ul>
                
              </ul>
            </div>
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
}

export default Section1;
