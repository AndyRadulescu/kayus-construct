"use client";

import React, { useState, useEffect } from 'react';
import { SITE_CONTENT } from '@app/lib/constants';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Despre", href: "#about" },
    { label: "Servicii", href: "#services" },
    { label: "Portofoliu", href: "#portfolio" },
    { label: "Proces", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-[0.2em] text-white">KAYUS</span>
          <span className="text-[10px] tracking-[0.3em] text-gold uppercase -mt-1">Construct</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium tracking-widest text-white/70 hover:text-gold transition-colors uppercase">
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-sm">
            <Phone size={14} className="text-gold" />
            <span className="text-sm text-white font-medium">{SITE_CONTENT.contact.phone}</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-black transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-light tracking-widest text-white uppercase">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
