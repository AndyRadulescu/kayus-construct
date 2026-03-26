import React from 'react';
import { SectionHeading } from '@app/components/ui/SectionHeading';
import { SITE_CONTENT } from '@app/lib/constants';
import { Button } from '@app/components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="bg-black py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-12">
            <SectionHeading 
              subtitle="Contact" 
              title="Începe Proiectul Tău Astăzi" 
            />
            
            <p className="text-white/50 text-lg leading-relaxed max-w-md">
              Suntem aici să oferim consultanță și execuție de elită. Contactează-ne pentru un deviz detaliat și transparent.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="h-12 w-12 bg-zinc-900 border border-zinc-800 rounded-sm flex items-center justify-center group-hover:border-[#FFDA9A] transition-colors">
                  <Phone size={20} className="text-[#FFDA9A]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Telefon</p>
                  <p className="text-white font-bold">{SITE_CONTENT.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="h-12 w-12 bg-zinc-900 border border-zinc-800 rounded-sm flex items-center justify-center group-hover:border-[#FFDA9A] transition-colors">
                  <Mail size={20} className="text-[#FFDA9A]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white font-bold">{SITE_CONTENT.contact.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="h-12 w-12 bg-zinc-900 border border-zinc-800 rounded-sm flex items-center justify-center group-hover:border-[#FFDA9A] transition-colors">
                  <MapPin size={20} className="text-[#FFDA9A]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Adresă</p>
                  <p className="text-white font-bold">{SITE_CONTENT.contact.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
