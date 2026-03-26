import React from 'react';
import {SITE_CONTENT} from '@app/lib/constants';
import {Facebook, Instagram, Linkedin, Mail, MapPin, Phone} from 'lucide-react';
import MetallicGlowEffect from '@app/components/ui/MetallicGlowEffect';

export const Footer = () => {
    return (
        <>
            <MetallicGlowEffect/>
            <footer className="bg-black border-t border-white/10 pt-20 pb-10">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold tracking-[0.2em] text-white">KAYUS</span>
                            <span className="text-[12px] tracking-[0.3em] text-gold uppercase -mt-1">Construct</span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            {SITE_CONTENT.slogan}
                        </p>
                        <div className="flex gap-4">
                            <Facebook size={20}
                                      className="text-white/40 hover:text-gold transition-colors cursor-pointer"/>
                            <Instagram size={20}
                                       className="text-white/40 hover:text-gold transition-colors cursor-pointer"/>
                            <Linkedin size={20}
                                      className="text-white/40 hover:text-gold transition-colors cursor-pointer"/>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm">Navigație</h4>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-white/50 hover:text-gold text-sm transition-colors">Despre
                                Noi</a></li>
                            <li><a href="#services"
                                   className="text-white/50 hover:text-gold text-sm transition-colors">Servicii</a></li>
                            <li><a href="#portfolio"
                                   className="text-white/50 hover:text-gold text-sm transition-colors">Portofoliu</a>
                            </li>
                            <li><a href="#contact"
                                   className="text-white/50 hover:text-gold text-sm transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-4">
                                <Phone size={16} className="text-gold"/>
                                <span className="text-white/50 text-sm">{SITE_CONTENT.contact.phone}</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={16} className="text-gold"/>
                                <span className="text-white/50 text-sm">{SITE_CONTENT.contact.email}</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <MapPin size={16} className="text-gold"/>
                                <span className="text-white/50 text-sm">{SITE_CONTENT.contact.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="container mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/30 text-xs">
                        © {new Date().getFullYear()} {SITE_CONTENT.companyName}. Toate drepturile rezervate.
                    </p>
                    <div className="flex gap-8">
                        {SITE_CONTENT.footer.legalLinks.map((link) => (
                            <a key={link.label} href={link.href}
                               className="text-white/30 hover:text-white text-xs transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    );
};
