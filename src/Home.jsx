import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import './Home.css';
import Carousel from './Carousel';

function Home() {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    from: { transform: 'translateY(100px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    config: { duration: 1000 },
  });

  const linkHover = {
    from: { scale: 1 },
    to: { scale: 1.1 },
    config: { tension: 300, friction: 10 }
  };

  return (
    <div className="container">
      <header className="header">
        <video
          id="comp-lu2shmns_video"
          className="header-video"
          src="https://video.wixstatic.com/video/0a78ab_b076fd53d8ff4d168ddaa94fc8fb4084/1080p/mp4/file.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto" />
        <div className="header-overlay">
          <animated.h1 style={fade}>OCEANS</animated.h1>
          <animated.div className="sections-container" style={slideIn}>
            <Link to="/section1" style={linkHover}>Missão</Link>
            <Link to="/section2" style={linkHover}>Azul Sustentável</Link>
            <Link to="/section3" style={linkHover}>Oceano agora</Link>
            <Link to="/section4" style={linkHover}>Seção 4</Link>
          </animated.div>
        </div>
      </header>
      <Carousel />
      <animated.h2 style={fade}></animated.h2>
      <p>
        O Oceans 20 (O20) é uma iniciativa global dedicada a promover a sustentabilidade dos oceanos e a economia azul. Fundado em 2020, o O20 reúne líderes, cientistas,
        empresários e ativistas de todo o mundo com o objetivo de discutir, planejar e implementar estratégias eficazes para a preservação e o uso sustentável dos recursos marinhos.
      </p>
      <p>
        Nossa Visão: A visão do O20 é um mundo onde os oceanos são saudáveis, produtivos e resilientes. Acreditamos que a conservação dos oceanos é essencial não apenas para a saúde ambiental, mas também para o desenvolvimento econômico sustentável e a prosperidade das comunidades costeiras.
      </p>
    </div>
  );
}

export default Home;

