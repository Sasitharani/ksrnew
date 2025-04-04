import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-cards';
import EffectCards from 'swiper';
import img1 from 'src/img/slide1.jpg';
import img2 from 'src/img/slide3.jpeg';
import img3 from 'src/img/slide3.jpg';

const CardsCarousel: React.FC = () => {
  const images = [img1, img2, img3];

  return (
    <Swiper
      effect="cards"
      grabCursor={true}
      modules={[EffectCards]}
      className="cards-carousel"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="card"
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardsCarousel;
