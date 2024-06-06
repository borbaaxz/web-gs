import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import './Section1.css';
import  Navbar  from './Navbar';

function Section3() {
  const [oceanData, setOceanData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });
  const slideIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
  const floatIn = useSpring({
    to: { transform: 'translateY(-10px)' },
    from: { transform: 'translateY(10px)' },
    loop: true,
    config: { duration: 1500 },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Rio de Janeiro,br&appid=3abc4bd4f1c794f5812ff88419ba0b7f');
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados. Status: ' + response.status);
        }
        
        const data = await response.json();
        console.log('Dados obtidos:', data);
        
        // Extrair os dados relevantes da resposta
        const temperatureInCelsius = convertKelvinToCelsius(data.main.temp);
        const oceanInfo = {
          temperature: temperatureInCelsius,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          weatherDescription: data.weather[0].description,
        };

        setOceanData(oceanInfo);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Função para converter Kelvin para Celsius
  const convertKelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  return (
    <div>
      <Navbar />

      <div className="section-container">
        <animated.div style={fadeIn}>
          <animated.div style={slideIn}>
            <div className="escritas" style={floatIn}>
              <h1>Dados do Oceano (Rio de Janeiro)</h1>
              {loading ? (
                <p>Carregando...</p>
              ) : (
                <div>
                  <p>Temperatura da água do mar: {oceanData.temperature.toFixed(2)}°C</p>
                  <p>Pressão atmosférica: {oceanData.pressure} hPa</p>
                  <p>Umidade relativa: {oceanData.humidity}%</p>
                  <p>Condição do tempo: {oceanData.weatherDescription}</p>
                </div>
              )}
            </div>
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
}

export default Section3;

