import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const contactInfo = [
  {
    icon: <MapPinIcon className="w-6 h-6" />,
    title: 'Adres',
    content: 'Ata Sanayi Sitesi 1. Kısım 1. Cadde No: 1 Çiğli / İzmir',
    link: 'https://maps.google.com'
  },
  {
    icon: <PhoneIcon className="w-6 h-6" />,
    title: 'Telefon',
    content: '+90 (232) 328 00 00',
    link: 'tel:+902323280000'
  },
  {
    icon: <EnvelopeIcon className="w-6 h-6" />,
    title: 'E-posta',
    content: 'info@ciderteknik.com',
    link: 'mailto:info@ciderteknik.com'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-light mb-4">
            İletişim
          </h2>
          <p className="text-lg text-text-light dark:text-text-dark max-w-2xl mx-auto">
            Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sol Kolon: İletişim Bilgileri */}
          <motion.div
            className="glass p-8 md:p-12 rounded-2xl"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
          >
            <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-8">
              İletişim Bilgileri
            </h3>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport="viewport"
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary dark:text-primary-light mb-1">
                      {info.title}
                    </h4>
                    <p className="text-text-light dark:text-text-dark">
                      {info.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Harita */}
            <div className="mt-8 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.1234567890123!2d27.12345678901234!3d38.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDA3JzI0LjUiTiAyN8KwMDcnMjQuNSJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
          </motion.div>

          {/* Sağ Kolon: Çağrı Merkezi */}
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
          >
            <div className="glass h-full p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <img
                src="/images/contact.jpg"
                alt="Çağrı Merkezi"
                className="w-full h-[400px] object-cover rounded-xl mb-8"
              />
              <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">
                Çağrı Merkezimiz
              </h3>
              <p className="text-lg text-text-light dark:text-text-dark mb-8">
                Uzman ekibimiz, sorularınızı yanıtlamak ve size yardımcı olmak için hazır.
              </p>
              <a
                href="tel:+902323280000"
                className="btn hover:shadow-[0_0_16px_2px_rgba(79,70,229,0.25)] hover:scale-105 transition-all duration-300"
              >
                Hemen Arayın
              </a>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 dark:bg-secondary/30 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 