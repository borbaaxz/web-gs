import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importe diretamente os estilos do Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import './Carousel.css'; // Importe o arquivo CSS do seu carousel

// Configure o Swiper para usar os módulos
SwiperCore.use([Navigation, Pagination]);

function Carousel() {
  const slides = [
    { id: 1, image: '/images/020.png' },
    { id: 2, image: '/images/mundo.jpeg' },
    { id: 3, image: '/images/tartaruga.avif' }
  ];

  return (
    <div className="carousel-container"> {/* Adicione uma classe para o container do carousel */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={`Slide ${slide.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
