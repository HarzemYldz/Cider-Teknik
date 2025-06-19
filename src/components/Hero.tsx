import React, { useRef, useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { motion, AnimatePresence } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';
import clsx from 'clsx';

const slides = [
  {
    id: 1,
    image: '/images/hero-1.jpg',
    title: 'Cider Teknik',
    subtitle: 'Endüstriyel Çözümler',
    description: 'Yenilikçi ve sürdürülebilir endüstriyel çözümler sunuyoruz.',
    cta: 'Hakkımızda',
    ctaLink: '#about',
  },
  {
    id: 2,
    image: '/images/hero-2.jpg',
    title: 'Kaliteli Ürünler',
    subtitle: 'Geniş Ürün Yelpazesi',
    description: 'Sektörün önde gelen markalarının ürünlerini sizlere sunuyoruz.',
    cta: 'Ürünlerimiz',
    ctaLink: '#products',
  },
  {
    id: 3,
    image: '/images/hero-3.jpg',
    title: 'Profesyonel Hizmet',
    subtitle: 'Teknik Destek',
    description: 'Uzman ekibimizle her zaman yanınızdayız.',
    cta: 'İletişim',
    ctaLink: '#contact',
  },
];

const fadeVariants = {
  initial: { opacity: 0, scale: 0.98, y: 40 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: 'easeInOut' } },
  exit: { opacity: 0, scale: 0.98, y: -40, transition: { duration: 0.7, ease: 'easeInOut' } },
};

const contentStagger = {
  animate: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(s) {
      setCurrent(s.track.details.rel);
    },
    created(s) {
      setCurrent(s.track.details.rel);
    },
  });

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div ref={sliderRef} className="keen-slider h-full w-full">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className="keen-slider__slide relative h-full w-full flex items-center justify-center"
            style={{ minHeight: '100vh' }}
            aria-hidden={current !== idx}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f9fafb]/80 via-[#e2e8f0]/60 to-[#1e3a8a]/40 dark:from-bg-dark/80 dark:via-bg-darker/60 dark:to-primary/40 backdrop-blur-xl" />
            {/* Content */}
            <AnimatePresence>
              {current === idx && (
                <motion.div
                  className="container z-10 flex items-center justify-center h-full"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={fadeVariants}
                  key={slide.id}
                >
                  <motion.div
                    className="glass max-w-2xl mx-auto p-8 md:p-14 text-center"
                    variants={contentStagger}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <motion.h1
                      className="text-3xl md:text-5xl font-semibold text-[#1e3a8a] dark:text-primary-light mb-3 font-comfortaa"
                      variants={fadeVariants}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.h2
                      className="text-base md:text-xl font-medium text-[#475569] dark:text-primary-light/80 mb-6"
                      variants={fadeVariants}
                    >
                      {slide.subtitle}
                    </motion.h2>
                    <motion.p
                      className="text-base md:text-lg text-[#475569] dark:text-text-dark mb-8"
                      variants={fadeVariants}
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div variants={fadeVariants}>
                      <a
                        href={slide.ctaLink}
                        className="btn-primary inline-flex"
                      >
                        {slide.cta}
                      </a>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={clsx(
              'w-3 h-3 rounded-full transition-all duration-300',
              current === idx
                ? 'bg-[#1e3a8a] dark:bg-primary-light scale-125 shadow-lg'
                : 'bg-[#1e3a8a]/30 dark:bg-primary-light/30'
            )}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
} 