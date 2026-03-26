import React from 'react';
import {SectionHeading} from '@app/components/ui/SectionHeading';
import {SITE_CONTENT} from '@app/lib/constants';
import * as Icons from 'lucide-react';
import MetallicGlowEffect from '@app/components/ui/MetallicGlowEffect';

export const ServicesSection = () => {
    return (
        <>
            <MetallicGlowEffect/>

            <section id="services" className="bg-black py-32 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <SectionHeading
                        centered
                        subtitle="Servicii"
                        title="Expertiză Profesională în Construcții"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SITE_CONTENT.services.map((service, index) => {
                            const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[service.icon] || Icons.HelpCircle;

                            return (
                                <div
                                    key={index}
                                    className="group metallic-border p-10 space-y-6 hover:premium-glow-hover transition-all duration-500 cursor-pointer"
                                >
                                    <div
                                        className="h-14 w-14 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm group-hover:border-[#A88C65] group-hover:bg-[#A88C65]/10 transition-all duration-500">
                                        <IconComponent
                                            className="text-white group-hover:text-[#FFDA9A] transition-colors"
                                            size={28}/>
                                    </div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wider group-hover:primary-gradient-text transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div
                                        className="pt-4 flex items-center gap-2 primary-gradient-text text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        Detalii Serviciu <Icons.ArrowRight size={14}/>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};
