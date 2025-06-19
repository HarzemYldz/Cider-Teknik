import React, { useRef, useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { motion } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';

const products = [
  {
    id: 1,
    name: 'Korloy Kesici Takımlar',
    description: 'Yüksek kaliteli endüstriyel kesici takımlar ve ekipmanlar.',
    image: '/images/products/korloy.jpg',
    category: 'Kesici Takımlar'
  },
  {
    id: 2,
    name: 'Sandvik Takım Tutucular',
    description: 'Profesyonel takım tutucular ve aksesuarlar.',
    image: '/images/products/sandvik.jpg',
    category: 'Takım Tutucular'
  },
  {
    id: 3,
    name: 'Mitsubishi Frezeler',
    description: 'Yüksek performanslı CNC frezeleme çözümleri.',
    image: '/images/products/mitsubishi.jpg',
    category: 'Frezeleme'
  },
  {
    id: 4,
    name: 'Walter Torna Takımları',
    description: 'Prezisyon torna takımları ve kesici uçlar.',
    image: '/images/products/walter.jpg',
    category: 'Torna'
  },
  {
    id: 5,
    name: 'Seco Delme Sistemleri',
    description: 'Modern delme ve işleme sistemleri.',
    image: '/images/products/seco.jpg',
    category: 'Delme'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeInOut' } },
  viewport: { once: true },
};

export default function Products() {
  const [current, setCurrent] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 24 },
    breakpoints: {
      '(min-width: 640px)': { slides: { perView: 2, spacing: 24 } },
      '(min-width: 1024px)': { slides: { perView: 3, spacing: 24 } },
      '(min-width: 1280px)': { slides: { perView: 4, spacing: 24 } },
    },
    slideChanged(s) {
      setCurrent(s.track.details.rel);
    },
  });

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-light mb-4">
            Ürünlerimiz
          </h2>
          <p className="text-lg text-text-light dark:text-text-dark max-w-2xl mx-auto">
            Sektörün önde gelen markalarının kaliteli ürünlerini sizlere sunuyoruz
          </p>
        </motion.div>
        <div className="relative">
          <div ref={sliderRef} className="keen-slider pb-12">
            {products.map((product, idx) => (
              <div className="keen-slider__slide" key={product.id}>
                <motion.div
                  className="glass h-full rounded-2xl overflow-hidden group"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport="viewport"
                >
                  {/* Ürün Görseli */}
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm" />
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 bg-primary/80 text-white text-xs rounded-full">
                      {product.category}
                    </span>
                  </div>
                  {/* Ürün Bilgileri */}
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold text-primary dark:text-primary-light mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-text-light dark:text-text-dark mb-4">
                      {product.description}
                    </p>
                    <button className="btn-primary w-full">
                      Detay
                    </button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          {/* Arrows */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-glass-light dark:bg-glass-dark p-2 rounded-full shadow hover:scale-110 transition-all duration-300"
            onClick={() => instanceRef.current?.prev()}
            aria-label="Önceki"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-glass-light dark:bg-glass-dark p-2 rounded-full shadow hover:scale-110 transition-all duration-300"
            onClick={() => instanceRef.current?.next()}
            aria-label="Sonraki"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </button>
          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {products.map((_, idx) => (
              <button
                key={idx}
                className={
                  'w-3 h-3 rounded-full transition-all duration-300 ' +
                  (current === idx ? 'bg-primary dark:bg-primary-light scale-125 shadow-lg' : 'bg-primary/30 dark:bg-primary-light/30')
                }
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 