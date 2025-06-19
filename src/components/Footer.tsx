import React from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const footerLinks = {
  company: [
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Ürünlerimiz', href: '#products' },
    { name: 'Sertifikalarımız', href: '#certificates' },
    { name: 'İletişim', href: '#contact' }
  ],
  products: [
    { name: 'Kesici Takımlar', href: '#products' },
    { name: 'Takım Tutucular', href: '#products' },
    { name: 'Frezeleme', href: '#products' },
    { name: 'Torna', href: '#products' },
    { name: 'Delme', href: '#products' }
  ],
  contact: [
    { icon: <MapPinIcon className="w-5 h-5" />, text: 'Ata Sanayi Sitesi 1. Kısım 1. Cadde No: 1 Çiğli / İzmir' },
    { icon: <PhoneIcon className="w-5 h-5" />, text: '+90 (232) 328 00 00' },
    { icon: <EnvelopeIcon className="w-5 h-5" />, text: 'info@ciderteknik.com' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-bg-dark dark:bg-bg-darker text-text-dark py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo ve Açıklama */}
          <div className="lg:col-span-1">
            <a href="#hero" className="text-2xl font-bold text-primary-light tracking-wide mb-4 inline-block">
              Cider Teknik
            </a>
            <p className="text-text-dark/80 mt-4">
              30 yılı aşkın tecrübemizle endüstriyel çözümler sunuyoruz.
            </p>
          </div>

          {/* Şirket Linkleri */}
          <div>
            <h3 className="text-lg font-semibold text-primary-light mb-4">
              Şirket
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-dark/80 hover:text-primary-light transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ürün Kategorileri */}
          <div>
            <h3 className="text-lg font-semibold text-primary-light mb-4">
              Ürünler
            </h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-dark/80 hover:text-primary-light transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-semibold text-primary-light mb-4">
              İletişim
            </h3>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary-light mt-1">
                    {item.icon}
                  </span>
                  <span className="text-text-dark/80">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Telif Hakkı */}
        <div className="mt-12 pt-8 border-t border-border-dark">
          <p className="text-center text-text-dark/60">
            © {new Date().getFullYear()} Cider Teknik. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
} 