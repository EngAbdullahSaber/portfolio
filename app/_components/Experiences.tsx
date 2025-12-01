'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section
            className="py-section relative overflow-hidden"
            id="my-experience"
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 -z-10 opacity-20">
                <div className="absolute top-40 right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl"></div>
            </div>

            <div className="container" ref={containerRef}>
                <SectionTitle title="My Experience" />

                {/* Timeline container */}
                <div className="relative mt-16 md:mt-20">
                    {/* Vertical timeline line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden sm:block"></div>

                    <div className="grid gap-12 md:gap-16">
                        {MY_EXPERIENCE.map((item, index) => (
                            <div
                                key={item.title}
                                className="experience-item group relative"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-8 top-8 w-4 h-4 -translate-x-1/2 hidden sm:block">
                                    <div className="w-full h-full rounded-full bg-primary ring-4 ring-background group-hover:ring-primary/20 transition-all duration-500"></div>
                                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
                                </div>

                                {/* Experience card */}
                                <div className="relative sm:ml-20 md:ml-24">
                                    <div className="relative p-8 md:p-10 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/5">
                                        {/* Corner accent */}
                                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl group-hover:border-primary/50 transition-colors duration-500"></div>
                                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-2xl group-hover:border-primary/50 transition-colors duration-500"></div>

                                        {/* Gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Index number */}
                                            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                                                <span className="text-sm font-bold text-primary">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        '0',
                                                    )}
                                                </span>
                                            </div>

                                            {/* Company */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                                    <p className="text-lg md:text-xl font-medium text-primary uppercase tracking-wide">
                                                        {item.company}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-anton leading-none mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                                                {item.title}
                                            </h3>

                                            {/* Duration */}
                                            <div className="flex items-center gap-2 mt-6">
                                                <svg
                                                    className="w-5 h-5 text-muted-foreground"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                <p className="text-lg text-muted-foreground font-medium">
                                                    {item.duration}
                                                </p>
                                            </div>

                                            {/* Decorative bottom line */}
                                            <div className="mt-6 pt-6 border-t border-border/30">
                                                <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom decorative element */}
                <div className="mt-16 flex justify-center">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                        <div className="w-16 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
                        <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
