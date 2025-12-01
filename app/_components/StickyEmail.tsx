import { GENERAL_INFO } from '@/lib/data';
import React from 'react';

const StickyEmail = () => {
    return (
        <div className="max-xl:hidden fixed bottom-32 left-0 z-50">
            <div className="relative group">
                {/* Decorative line */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-primary/60" />

                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="relative block px-4 py-3 text-sm font-medium tracking-widest transition-all duration-500 overflow-hidden"
                    style={{
                        textOrientation: 'mixed',
                        writingMode: 'vertical-rl',
                    }}
                >
                    {/* Animated background gradient */}
                    <span className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/10 to-primary/0 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                    {/* Animated border accent */}
                    <span className="absolute left-0 top-0 w-0.5 h-0 bg-gradient-to-b from-primary to-primary/30 group-hover:h-full transition-all duration-700" />

                    {/* Text with gradient effect */}
                    <span
                        className="relative bg-gradient-to-b from-muted-foreground via-muted-foreground to-muted-foreground bg-clip-text text-transparent group-hover:from-primary group-hover:via-foreground group-hover:to-primary transition-all duration-500"
                        style={{
                            backgroundSize: '100% 200%',
                            backgroundPosition: '0% 0%',
                        }}
                    >
                        {GENERAL_INFO.email}
                    </span>

                    {/* Glow effect on hover */}
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-primary/10" />
                </a>

                {/* Bottom decorative dot */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
            </div>
        </div>
    );
};

export default StickyEmail;
