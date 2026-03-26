import React from 'react';
import {SectionHeading} from '@app/components/ui/SectionHeading';
import {SITE_CONTENT} from '@app/lib/constants';
import MetallicGlowEffect from '@app/components/ui/MetallicGlowEffect';

export const ProcessSection = () => {
    return (
        <>
            <MetallicGlowEffect/>
            <section id="process" className="bg-black py-32 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <SectionHeading
                        centered
                        subtitle="Cum Lucrăm"
                        title="Proces Profesional de Execuție"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 relative">
                        {/* Connector Line (Desktop) */}
                        <div
                            className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0"/>

                        {SITE_CONTENT.process.map((step, index) => (
                            <div key={index} className="relative z-10 group text-center lg:text-left">
                                <div className="mb-6 relative inline-block">
                                    <div
                                        className="h-20 w-20 primary-gradient rounded-sm flex items-center justify-center text-3xl font-bold text-black group-hover:premium-glow transition-all duration-500">
                                        {step.step}
                                    </div>
                                    {/* Connector Dot */}
                                    <div
                                        className="hidden lg:block absolute top-1/2 -right-6 h-2 w-2 primary-gradient rounded-full -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"/>
                                </div>
                                <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-4 group-hover:primary-gradient-text transition-colors">
                                    {step.title}
                                </h4>
                                <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
