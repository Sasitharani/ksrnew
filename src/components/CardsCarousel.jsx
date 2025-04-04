import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Navigation, Pagination, Autoplay, EffectCube, EffectCoverflow, EffectFlip, EffectCards } from 'swiper/modules'; // Removed EffectParallax
import 'swiper/css';
import 'swiper/css/effect-cards';
//import { EffectCards } from 'swiper';
import img1 from '../img/slide1.jpg';
import img2 from '../img/slide3.jpeg';
import img3 from '../img/slide3.jpg';

const CardsCarousel = () => {
  const images = [img1, img2, img3];
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

  return (
    <div className="">
              {/* Cards Transition Carousel */}
              <motion.div
                    className="slider-item bg-white p-4 rounded shadow"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={animationVariants}
                >
                    <h2 className="text-xl font-semibold mb-2">Cards Transition Carousel</h2>
                    <div className="w-96 h-96 mx-auto"> {/* Standard size for the div */}
                        <Swiper
                            modules={[EffectCards, Pagination, Autoplay]} // Added EffectCards module
                            effect="cards"
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 1000, disableOnInteraction: false }} // Autoplay configuration
                            className="h-full"
                        >
                            <SwiperSlide>
                                <img src={img1} alt="Cards Slide 1" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img2} alt="Cards Slide 2" className="w-full h-full object-cover" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={img3} alt="Cards Slide 3" className="w-full h-full object-cover" />
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </motion.div>
    </div>
  );
};

export default CardsCarousel;
