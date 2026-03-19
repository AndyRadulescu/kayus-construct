import React from 'react';
import { SectionHeading } from '@app/components/ui/SectionHeading';
import { SITE_CONTENT } from '@app/lib/constants';
import { Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section className="bg-black py-32">
      <div className="container mx-auto px-6">
        <SectionHeading 
          centered 
          subtitle="Testimoniale" 
          title="Ce Spun Clienții Noștri" 
        />

        <div className="grid md:grid-cols-2 gap-12">
          {SITE_CONTENT.testimonials.map((t, index) => (
            <div key={index} className="metallic-border p-12 space-y-8 relative">
              <Quote size={40} className="text-gold/20 absolute top-10 right-10" />
              <p className="text-white/70 italic text-lg leading-relaxed font-light">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-1 bg-gold" />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm">{t.name}</h4>
                  <p className="text-gold text-xs uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
