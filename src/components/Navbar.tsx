import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

const menu = [
  { name: 'ANASAYFA', href: '#hero' },
  { name: 'HAKKIMIZDA', href: '#about' },
  { name: 'ÜRÜNLER', href: '#products' },
  { name: 'KAMPANYALAR', href: '#campaigns' },
  { name: 'İLETİŞİM', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="w-full sticky top-0 z-50 nav-glass border-b border-border-light dark:border-border-dark">
      <div className="container flex items-center justify-between py-2">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold text-primary dark:text-primary-light tracking-wide flex items-center gap-2">
          <span>Cider Teknik</span>
        </a>
        {/* Masaüstü Menü */}
        <ul className="hidden lg:flex flex-1 justify-center gap-8">
          {menu.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={clsx(
                  'px-4 py-2 font-bold text-lg rounded-xl transition-all duration-200',
                  'hover:bg-primary/10 dark:hover:bg-primary/20 hover:underline underline-offset-8',
                  'text-primary dark:text-primary-light',
                  window.location.hash === item.href && 'bg-primary/20 dark:bg-primary/30 underline underline-offset-8'
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Sağda: Dark mode ve iletişim */}
        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden md:inline-flex btn text-base font-semibold">İletişim</a>
          <button
            aria-label="Toggle dark mode"
            className="p-2 rounded-full bg-glass-light dark:bg-glass-dark border border-border-light dark:border-border-dark hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
            onClick={() => setIsDark((d) => !d)}
          >
            {isDark ? (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-primary dark:text-primary-light" />
            )}
          </button>
          {/* Mobil menü butonu */}
          <button className="lg:hidden ml-2 p-2 rounded-xl bg-primary text-white dark:bg-primary-light dark:text-bg-dark shadow" onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Mobil Menü */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center">
          <div className="w-full max-w-xs mx-auto nav-glass p-8 flex flex-col gap-6 rounded-2xl shadow-2xl border border-border-light dark:border-border-dark">
            <div className="flex justify-end mb-4">
              <button className="p-2 rounded-full bg-glass-light dark:bg-glass-dark border border-border-light dark:border-border-dark" onClick={() => setIsOpen(false)}>
                <X className="w-7 h-7 text-primary dark:text-primary-light" />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-6">
              {menu.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-primary dark:text-primary-light px-6 py-3 rounded-xl hover:bg-primary/10 dark:hover:bg-primary/20 hover:underline underline-offset-8 transition-all w-full text-center"
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" className="btn w-full text-lg mt-2 flex items-center justify-center">İletişim</a>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
} 