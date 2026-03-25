'use client';

import React, {useEffect, useState} from 'react';
import {X} from 'lucide-react';
import {Button} from './Button';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAccepted, setHasAccepted] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAccepted = () => {
            const accepted = localStorage.getItem('kayus-cookie-accepted');
            if (accepted === 'true') {
                setHasAccepted(true);
            } else {
                const timer = setTimeout(() => {
                    setIsVisible(true);
                }, 1000);
                return () => clearTimeout(timer);
            }
        };

        const timerId = setTimeout(checkAccepted, 0);
        return () => clearTimeout(timerId);
    }, []);

    const handleAccept = () => {
        localStorage.setItem('kayus-cookie-accepted', 'true');
        setIsVisible(false);
        setHasAccepted(true);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    if (hasAccepted) return null;

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-[100] px-4 pb-4 md:pb-6 pointer-events-none transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            <div className="max-w-7xl mx-auto pointer-events-auto">
                <div
                    className="border border-zinc-800
                     bg-zinc-950/80 backdrop-blur-md premium-glow rounded-lg overflow-hidden group">
                    <div className="w-full flex justify-center relative">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute top-0 left-1/2 h-px w-[300px] max-w-full -translate-x-1/2 -translate-y-1/2"
                            style={{
                                background:
                                    'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)',
                            }}
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute left-1/2 -top-1 h-[200px] w-full max-w-[200px] -translate-x-1/2 -translate-y-1/2 md:max-w-[400px]"
                            style={{
                                background: `conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%), 
                     radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)`,
                            }}
                        />
                    </div>

                    <div className="p-6 md:p-8">
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors p-1"
                            aria-label="Close"
                        >
                            <X size={20}/>
                        </button>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex-1 space-y-2">
                                <h3 className="text-lg font-bold uppercase tracking-widest text-[#FFDA9A]">
                                    Cookie Settings
                                </h3>
                                <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
                                    We use cookies to enhance your experience. By clicking &quot;Accept&quot;, you agree
                                    to
                                    our use of cookies for analytics and personalization.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Button
                                    variant="metallic"
                                    onClick={handleClose}
                                    className="w-full sm:w-auto text-xs py-2 px-6"
                                >
                                    Decline
                                </Button>
                                <Button
                                    variant="primary"
                                    onClick={handleAccept}
                                    className="w-full sm:w-auto text-xs py-2 px-6"
                                >
                                    Accept
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
