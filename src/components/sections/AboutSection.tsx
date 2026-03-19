import React from 'react';
import { SectionHeading } from '@app/components/ui/SectionHeading';
import { Check } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="bg-black py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 border border-gold/30 rounded-sm translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700" />
            <div className="relative z-10 metallic-border overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590644365607-1c5a519a9a37?q=80&w=2070&auto=format&fit=crop" 
                alt="Şantier profesional" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
            </div>
            {/* Trust Badge */}
            <div className="absolute -bottom-10 -right-10 z-20 bg-gold p-8 rounded-sm gold-glow hidden md:block">
              <span className="text-black font-black text-4xl block leading-none">10+</span>
              <span className="text-black/80 text-xs font-bold uppercase tracking-widest block mt-1">Ani de<br/>Experiență</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <SectionHeading 
              subtitle="Despre Noi" 
              title="Suntem KAYUS Construct. Integritate în Execuție." 
            />
            <p className="text-white/60 leading-relaxed text-lg font-light">
              Pozitionare: Firma solida, serioasa, orientata spre executie corecta si respectarea termenelor. 
              Suntem partenerul strategic pentru investitori imobiliari, proprietari de case și dezvoltatori care caută siguranță financiară și profesionalism absolut.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Siguranță financiară",
                "Respectarea termenelor",
                "Deviz fără costuri ascunse",
                "Garanție lucrări",
                "Contract legal clar",
                "Execuție monitorizată"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-5 w-5 bg-gold/10 flex items-center justify-center rounded-full">
                    <Check size={12} className="text-gold" />
                  </div>
                  <span className="text-white/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
