'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });
            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });
            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section relative overflow-hidden" id="about-me">
            {/* Decorative background elements */}
            <div className="absolute inset-0 -z-10 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container" ref={container}>
                {/* Hero Statement */}
                <div className="relative mb-24 md:mb-32">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent slide-up-and-fade"></div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight md:leading-tight lg:leading-tight pl-8 slide-up-and-fade">
                        I believe in a{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 font-medium text-primary">
                                user centered design
                            </span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -rotate-1"></span>
                        </span>{' '}
                        approach, ensuring that every project I work on is
                        tailored to meet the specific needs of its users.
                    </h2>
                </div>

                {/* Section Label */}
                <div className="relative mb-12 slide-up-and-fade">
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
                        <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
                            This is me
                        </p>
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
                    {/* Left Column - Name */}
                    <div className="md:col-span-5">
                        <div className="sticky top-32">
                            <div className="relative inline-block slide-up-and-fade">
                                <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
                                    Hi, I&apos;m{' '}
                                    <span className="block mt-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                        Abdullah
                                    </span>
                                </h3>
                                <div className="absolute -bottom-4 left-0 w-24 h-1 bg-primary slide-up-and-fade"></div>
                            </div>

                            {/* Decorative stats or badges */}
                            <div className="mt-12 space-y-4 slide-up-and-fade">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-sm text-muted-foreground">
                                        Available for projects
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <span className="text-sm text-muted-foreground">
                                        Frontend Developer
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Description */}
                    <div className="md:col-span-7">
                        <div className="space-y-6 max-w-2xl">
                            <div className="group slide-up-and-fade">
                                <div className="relative p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                                    <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <p className="text-lg md:text-xl leading-relaxed relative z-10">
                                        I&apos;m a frontend web developer
                                        dedicated to turning ideas into{' '}
                                        <span className="text-primary font-medium">
                                            creative solutions
                                        </span>
                                        . I specialize in creating seamless and
                                        intuitive user experiences.
                                    </p>
                                </div>
                            </div>

                            <div className="group slide-up-and-fade">
                                <div className="relative p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                                    <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <p className="text-lg md:text-xl leading-relaxed relative z-10">
                                        My approach focuses on creating{' '}
                                        <span className="text-primary font-medium">
                                            scalable, high-performing solutions
                                        </span>{' '}
                                        tailored to both user needs and business
                                        objectives. By prioritizing performance,
                                        accessibility, and responsiveness, I
                                        strive to deliver experiences that not
                                        only engage users but also drive
                                        tangible results.
                                    </p>
                                </div>
                            </div>

                            {/* Key Skills Highlight */}
                            <div className="flex flex-wrap gap-3 mt-8 slide-up-and-fade">
                                {[
                                    'Performance',
                                    'Accessibility',
                                    'Responsiveness',
                                    'User-Centered',
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
