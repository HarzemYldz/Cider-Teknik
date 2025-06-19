import React from 'react';
import { motion } from 'framer-motion';

export default function Certificates() {
  return (
    <section id="certificates" className="my-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl">
        <motion.img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
          alt="Yetkili Satıcılık Sertifikası"
          className="w-full max-w-lg border-2 border-yellow-400 rounded-xl shadow-lg object-cover mx-auto"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="glass p-10 md:p-14 rounded-2xl shadow-2xl flex flex-col justify-center gap-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2 text-heading-light dark:text-heading-dark text-center md:text-left">Yetkili Satıcılık Sertifikamız</h2>
          <p className="text-lg text-text-light dark:text-text-dark text-center md:text-left">CIDEB TİCARET, Türkiye mümessili olduğumuz markaların ürünlerinin İzmir Yetkili Satıcısıdır.</p>
        </motion.div>
      </div>
    </section>
  );
} 