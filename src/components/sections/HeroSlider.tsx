"use client";

import React from 'react';
import Image from 'next/image';
import { SITE_CONTENT } from '@app/lib/constants';
import { Button } from '@app/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const HeroSlider = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex items-center pt-32 pb-12 lg:pt-0 lg:pb-0">
      {/* Background Construction Image - Blended */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-full h-1/2 lg:h-full lg:w-1/2 opacity-50">
          <Image 
            src="/construction-background.jpeg" 
            alt="Construction background" 
            fill
            className="object-cover grayscale brightness-50"
            priority
          />
          {/* Gradient to hide the "beginning" of the image (Left edge on desktop, Top edge on mobile) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent lg:hidden" />
          
          {/* Additional subtle darkening to ensure text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>

      {/* Decorative side element */}
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block z-10" />

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
              <Button variant="primary" className="flex items-center justify-center gap-3">
                {SITE_CONTENT.hero.cta}
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline">
                Portofoliu Proiecte
              </Button>
            </div>
          </div>

          {/* Right Space - Kept empty to show the background image */}
          <div className="w-full lg:w-2/5" />
        </div>
      </div>
    </section>
  );
};
