import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const missionVision = [
  {
    title: 'Misyonumuz',
    description: 'Müşterilerimize en kaliteli ürünleri, en uygun fiyatlarla sunarak, sektörde öncü olmak ve sürdürülebilir büyümeyi sağlamak.',
    icon: '🎯'
  },
  {
    title: 'Vizyonumuz',
    description: 'Endüstriyel çözümler alanında Türkiye\'nin lider firmalarından biri olmak ve global pazarda söz sahibi olmak.',
    icon: '🌟'
  }
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-light mb-4">
            Hakkımızda
          </h2>
          <p className="text-lg text-text-light dark:text-text-dark max-w-2xl mx-auto">
            30 yılı aşkın tecrübemizle endüstriyel çözümler sunuyoruz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol: Görsel */}
          <motion.div 
            className="relative"
            variants={fadeInLeft}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
          >
            <div className="glass p-4 rounded-2xl">
              <img 
                src="/images/about.jpg" 
                alt="Cider Teknik" 
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 dark:bg-secondary/30 rounded-full blur-2xl" />
          </motion.div>

          {/* Sağ: İçerik */}
          <motion.div 
            className="glass p-8 md:p-12 rounded-2xl"
            variants={fadeInRight}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-primary-light mb-6">
              Cider Teknik
            </h3>
            <p className="text-lg text-text-light dark:text-text-dark mb-8">
              1990 yılından bu yana, endüstriyel makineler, kesici takımlar ve teknik hırdavat alanında müşterilerimize en kaliteli ürünleri sunuyoruz. Deneyimli ekibimiz ve geniş ürün yelpazemizle, işletmenizin ihtiyaçlarına özel çözümler üretiyoruz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {missionVision.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="glass p-6 rounded-xl"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport="viewport"
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold text-primary dark:text-primary-light mb-2">
                    {item.title}
                  </h4>
                  <p className="text-text-light dark:text-text-dark">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 