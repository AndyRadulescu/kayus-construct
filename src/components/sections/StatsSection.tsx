import React from 'react';
import {SITE_CONTENT} from '@app/lib/constants';
import MetallicGlowEffect from '@app/components/ui/MetallicGlowEffect';

export const StatsSection = () => {
    return (
        <>
            <MetallicGlowEffect/>
            <section className="bg-black py-24 border-t rounded-t-4xl border-white/15">
                <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-3 gap-12">
                    {SITE_CONTENT.stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <h3 className="primary-gradient-text text-4xl text-black md:text-6xl font-bold mb-2 transition-transform duration-500 group-hover:scale-110">
                                {stat.value}
                            </h3>
                            <p className="text-white/40 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};
