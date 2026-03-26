"use client";

import React, { useState, useEffect } from 'react';
import { SITE_CONTENT } from '@app/lib/constants';
import { Menu, X, Phone } from 'lucide-react';
import { handleScrollToSection } from '@app/lib/utils/scroll';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
          {/* Logo */}
          <div 
            className="flex flex-col group cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-2xl font-bold tracking-[0.2em] text-white">KAYUS</span>
            <span className="text-[10px] tracking-[0.3em] primary-gradient-text uppercase -mt-1 font-bold">Construct</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="text-sm font-medium tracking-widest text-white/70 hover:primary-gradient-text transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-sm">
              <Phone size={14} className="text-[#A88C65]" />
              <span className="text-sm text-white font-medium">{SITE_CONTENT.contact.phone}</span>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-[100] bg-black flex flex-col transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header inside mobile menu */}
        <div className="flex justify-between items-center px-6 py-6 border-b border-white/5">
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-[0.2em] text-white">KAYUS</span>
            <span className="text-[10px] tracking-[0.3em] primary-gradient-text uppercase -mt-1 font-bold">Construct</span>
          </div>
          <button 
            className="text-white p-2" 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center justify-center flex-1 gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={(e) => handleScrollToSection(e, link.href, { onComplete: () => setIsMobileMenuOpen(false) })}
              className="text-3xl font-light tracking-widest text-white uppercase hover:primary-gradient-text transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <div className="mt-8 flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
            <Phone size={18} className="text-[#A88C65]" />
            <span className="text-lg text-white font-medium">{SITE_CONTENT.contact.phone}</span>
          </div>
        </div>
      </div>
    </>
  );
};
