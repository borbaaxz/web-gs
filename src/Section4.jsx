import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import './Section1.css';
import  Navbar  from './Navbar';

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
              <h1>Title</h1>
              <p>Escrita:</p>
              <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
              </ul>
            </div>
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
}

export default Section4;