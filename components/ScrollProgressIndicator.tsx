'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollProgressIndicator = () => {
    const scrollBarRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const scrollBar = scrollBarRef.current;
        let ticking = false;
        let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
        let lastUpdateTime = performance.now();

        const update = () => {
            if (!scrollBar) {
                ticking = false;
                return;
            }

            const { scrollHeight, clientHeight } = document.documentElement;
            const scrollableHeight = Math.max(scrollHeight - clientHeight, 1);
            const progress = (lastScrollY / scrollableHeight) * 100;

            // Apply transform directly to avoid rerendering
            scrollBar.style.transform = `translateY(-${100 - progress}%)`;

            // Update visibility only when it changes to avoid frequent state updates
            setIsVisible((prev) => {
                const next = lastScrollY > 300;
                return prev === next ? prev : next;
            });

            // Throttle progress text updates to ~150ms
            const now = performance.now();
            if (now - lastUpdateTime > 150) {
                setScrollProgress(progress);
                lastUpdateTime = now;
            }

            ticking = false;
        };

        const handleScroll = () => {
            lastScrollY = window.scrollY;
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };

        // Initial update
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            ref={containerRef}
            className={`fixed top-[50svh] right-5 md:right-10 -translate-y-1/2 z-40 transition-all duration-500 ${
                isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8 pointer-events-none'
            }`}
        >
            <div className="relative group">
                {/* Progress percentage tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="px-3 py-1.5 rounded-lg bg-background border border-border shadow-lg backdrop-blur-sm">
                        <span className="text-xs font-semibold text-primary">
                            {Math.round(scrollProgress)}%
                        </span>
                    </div>
                    {/* Arrow pointing to indicator */}
                    <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 rotate-45 bg-background border-r border-b border-border"></div>
                </div>

                {/* Main progress bar container */}
                <div className="relative">
                    {/* Background track with gradient */}
                    <div className="relative w-2 h-32 rounded-full bg-gradient-to-b from-background-light/50 to-background-light overflow-hidden backdrop-blur-sm border border-border/30">
                        {/* Animated shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-shimmer"></div>

                        {/* Progress fill */}
                        <div
                            className="w-full h-full rounded-full bg-gradient-to-b from-primary via-primary to-blue-500 transition-transform duration-300 ease-out relative overflow-hidden"
                            ref={scrollBarRef}
                        >
                            {/* Animated glow inside progress */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>

                            {/* Moving light effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent translate-y-[-100%] animate-progress-shine"></div>
                        </div>
                    </div>

                    {/* Percentage markers */}
                    <div className="absolute inset-y-0 -left-3 flex flex-col justify-between py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {[100, 75, 50, 25, 0].map((mark) => (
                            <div key={mark} className="relative">
                                <div className="w-1.5 h-px bg-border"></div>
                            </div>
                        ))}
                    </div>

                    {/* Decorative ring around progress bar */}
                    <div className="absolute inset-0 -m-1 rounded-full border border-primary/0 group-hover:border-primary/30 transition-colors duration-500"></div>
                </div>

                {/* Scroll to top button */}
                <button
                    onClick={scrollToTop}
                    className="mt-6 w-10 h-10 rounded-full bg-gradient-to-br from-background-light to-background border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 active:scale-95 group/button"
                    aria-label="Scroll to top"
                >
                    {/* Button glow effect */}
                    <div className="absolute inset-0 rounded-full bg-primary/0 group-hover/button:bg-primary/10 transition-colors duration-300"></div>

                    <ArrowUp
                        size={18}
                        className="text-muted-foreground group-hover/button:text-primary transition-all duration-300 group-hover/button:-translate-y-0.5 relative z-10"
                    />

                    {/* Ripple effect on hover */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover/button:border-primary/30 scale-100 group-hover/button:scale-150 opacity-100 group-hover/button:opacity-0 transition-all duration-500"></div>
                </button>

                {/* Scroll hint text */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    <p className="text-[10px] font-medium text-muted-foreground tracking-wider">
                        SCROLL
                    </p>
                </div>

                {/* Decorative dots */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-primary/40 animate-pulse"></div>
                    <div
                        className="w-1 h-1 rounded-full bg-primary/40 animate-pulse"
                        style={{ animationDelay: '0.2s' }}
                    ></div>
                    <div
                        className="w-1 h-1 rounded-full bg-primary/40 animate-pulse"
                        style={{ animationDelay: '0.4s' }}
                    ></div>
                </div>
            </div>

            {/* Custom animations */}
            <style jsx>{`
                @keyframes shimmer {
                    0%,
                    100% {
                        transform: translateY(-100%);
                    }
                    50% {
                        transform: translateY(100%);
                    }
                }

                @keyframes progress-shine {
                    0% {
                        transform: translateY(-100%);
                    }
                    100% {
                        transform: translateY(200%);
                    }
                }

                .animate-shimmer {
                    animation: shimmer 3s ease-in-out infinite;
                }

                .animate-progress-shine {
                    animation: progress-shine 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default ScrollProgressIndicator;
