'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            {/* Animated background gradients */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl opacity-40"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 -z-10 opacity-[0.02]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                        backgroundSize: '64px 64px',
                    }}
                ></div>
            </div>

            <ArrowAnimation />

            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col relative z-10"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[600px]">
                    {/* Badge */}
                    <div className="slide-up-and-fade mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm font-medium text-primary">
                            Available for Work
                        </span>
                    </div>

                    {/* Main Title with enhanced styling */}
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-7xl lg:text-8xl font-anton relative">
                        <span className="relative inline-block">
                            <span className="text-primary relative z-10">
                                FRONTEND
                            </span>
                            <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/20 -rotate-1 -z-10"></span>
                        </span>
                        <br />
                        <span className="ml-4 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                            DEVELOPER
                        </span>

                        {/* Decorative line */}
                        <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
                    </h1>

                    {/* Description with card style */}
                    <div className="banner-description slide-up-and-fade mt-8 relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-primary/30 rounded-full"></div>
                        <p className="text-lg md:text-xl leading-relaxed pl-4">
                            Hi! I&apos;m{' '}
                            <span className="font-bold text-primary relative">
                                Abdullah Saber
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50"></span>
                            </span>
                            . A creative Frontend Developer with{' '}
                            <span className="font-semibold text-foreground">
                                2+ years
                            </span>{' '}
                            of experience in building high-performance,
                            scalable, and responsive web solutions.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={GENERAL_INFO.upworkProfile}
                        variant="primary"
                        className="mt-10 banner-button slide-up-and-fade group relative overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Hire Me
                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </span>
                    </Button>
                </div>

                {/* Stats Section with enhanced design */}
                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-6 md:gap-10">
                    {[
                        { value: '3+', label: 'Years of Experience', delay: 0 },
                        {
                            value: '9+',
                            label: 'Completed Projects',
                            delay: 0.1,
                        },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="slide-up-and-fade group relative"
                        >
                            <div className="relative p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 text-center md:text-right">
                                {/* Decorative corner accent */}
                                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl group-hover:border-primary/50 transition-colors duration-500"></div>

                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                                <h5 className="text-4xl sm:text-5xl font-anton bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent mb-2 relative z-10">
                                    {stat.value}
                                </h5>
                                <p className="text-sm md:text-base text-muted-foreground font-medium relative z-10 whitespace-nowrap">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;
