"use client";

import React from 'react';
import Image from 'next/image';
import { SITE_CONTENT } from '@app/lib/constants';
import { Button } from '@app/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const HeroSlider = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex items-center">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="w-full lg:w-3/5 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
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

          {/* Right Content - Logo */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="relative group">
              <div className="relative">
                <Image 
                  src="/logo.jpeg" 
                  alt="Kayus Construct Logo" 
                  width={600} 
                  height={600}
                  className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-none h-auto rounded-sm"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative side element */}
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
    </section>
  );
};
