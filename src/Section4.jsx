import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import './Section1.css';
import Navbar from './Navbar';

function Section4() {
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
              <h1>Contato</h1>
              <p>Aqui estão algumas informações de contato:</p>
              <ul>
                <li>
                  <strong>Contato Oceans</strong>
                  <br />
                  Facebook: g20org
                  <br />
                  Instagram: @g20org
                </li>
                <br></br>
                <li><strong>Contato Grupo FIAP</strong></li>
                <p>
                <strong> Matheus Zottis</strong>
                <br />
                Cel: (11) 97394-2970
                <br />
                Email: mathzottis2970@gmail.com
                </p>
                <p>
                  <strong>Gabriel Borba</strong>
                  <br />
                  Cel: (11) 95898-3984
                  <br />
                  Email: gabrielborbaaxz@gmail.com
                </p>
              </ul>
            </div>
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
}

export default Section4;
