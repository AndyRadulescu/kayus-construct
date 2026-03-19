"use client";

import React, { useState, useEffect } from 'react';
import { SITE_CONTENT } from '@app/lib/constants';
import { Button } from '@app/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SITE_CONTENT.hero.slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {SITE_CONTENT.hero.slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-60' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 primary-gradient" />
            <span className="primary-gradient-text tracking-[0.4em] text-xs font-bold uppercase">
              {SITE_CONTENT.companyName}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] tracking-tight">
            {SITE_CONTENT.hero.title.split(' ').slice(0, 2).join(' ')} <br />
            <span className="font-bold text-white">
              {SITE_CONTENT.hero.title.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 font-light max-w-xl leading-relaxed">
            {SITE_CONTENT.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Button variant="primary" className="flex items-center gap-3">
              {SITE_CONTENT.hero.cta}
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline">
              Portofoliu Proiecte
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-6 container mx-auto px-6 flex gap-4">
        {SITE_CONTENT.hero.slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-[2px] transition-all duration-500 ${
              index === currentSlide ? 'w-16 primary-gradient' : 'w-8 bg-white/20'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
