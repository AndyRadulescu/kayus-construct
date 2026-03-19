import React from 'react';
import { SectionHeading } from '@app/components/ui/SectionHeading';

const PROJECTS = [
  { 
    title: "Vila Rezidențială Pipera", 
    category: "Case la Cheie", 
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    title: "Complex Office Aviatorilor", 
    category: "Spații Comerciale", 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    title: "Restaurare Conac Istoric", 
    category: "Renovări Premium", 
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    title: "Dezvoltare Rezidențială Nord", 
    category: "Imobiliare", 
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop" 
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="bg-black py-32">
      <div className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Portofoliu" 
          title="Proiecte Realizate cu Excelență" 
        />

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="relative group overflow-hidden metallic-border cursor-pointer">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
