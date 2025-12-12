'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useEffect } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);

    // Block entire DOM on mount
    useEffect(() => {
        // Hide everything except preloader
        document.documentElement.style.visibility = 'hidden';
        document.body.style.overflow = 'hidden';
        document.body.style.pointerEvents = 'none';

        return () => {
            // Restore when component unmounts
            document.documentElement.style.visibility = '';
            document.body.style.overflow = '';
            document.body.style.pointerEvents = '';
        };
    }, []);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: {
                    ease: 'power1.inOut',
                },
                onComplete: () => {
                    // Reveal content with delay for smooth transition
                    gsap.delayedCall(0.3, () => {
                        document.documentElement.style.visibility = 'visible';
                        document.body.style.overflow = '';
                        document.body.style.pointerEvents = '';
                    });
                },
            });

            tl.to('.name-text span', {
                y: 0,
                stagger: 0.05,
                duration: 0.2,
            });

            tl.to('.preloader-item', {
                delay: 1,
                y: '100%',
                duration: 0.5,
                stagger: 0.1,
            })
                .to('.name-text span', { autoAlpha: 0 }, '<0.5')
                .to(
                    preloaderRef.current,
                    {
                        autoAlpha: 0,
                        onComplete: () => {
                            // Make preloader non-interactive after animation
                            if (preloaderRef.current) {
                                preloaderRef.current.style.pointerEvents =
                                    'none';
                            }
                        },
                    },
                    '<1',
                );
        },
        { scope: preloaderRef },
    );

    return (
        <div className="fixed inset-0 z-[9999] flex" ref={preloaderRef}>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>

            <p className="name-text flex text-[20vw] lg:text-[200px] font-anton text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden">
                <span className="inline-block translate-y-full">A</span>
                <span className="inline-block translate-y-full">B</span>
                <span className="inline-block translate-y-full">D</span>
                <span className="inline-block translate-y-full">U</span>
                <span className="inline-block translate-y-full">L</span>
                <span className="inline-block translate-y-full">L</span>
                <span className="inline-block translate-y-full">A</span>
                <span className="inline-block translate-y-full">H</span>
            </p>
        </div>
    );
};

export default Preloader;
