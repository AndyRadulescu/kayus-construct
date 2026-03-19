import React from 'react';
import { SITE_CONTENT } from '@app/lib/constants';

export const StatsSection = () => {
  return (
    <section className="bg-black py-24 border-y border-white/10">
      <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
        {SITE_CONTENT.stats.map((stat, index) => (
          <div key={index} className="text-center group">
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-2 transition-transform duration-500 group-hover:scale-110">
              <span className="gold-gradient-text">{stat.value}</span>
            </h3>
            <p className="text-white/40 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
