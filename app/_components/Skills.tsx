'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const slideUpEl =
                containerRef.current?.querySelectorAll('.slide-up');
            if (!slideUpEl?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
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
                    end: 'bottom 10%',
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
        <section id="my-stack" ref={containerRef} className="py-20 md:py-32">
            <div className="container">
                <SectionTitle title="My Stack" />

                <div className="mt-16 space-y-24 md:space-y-32">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div
                            className="grid sm:grid-cols-12 gap-8 md:gap-12 items-start"
                            key={key}
                        >
                            <div className="sm:col-span-5">
                                <h3 className="slide-up text-4xl md:text-5xl lg:text-6xl font-anton leading-none text-muted-foreground uppercase tracking-tight">
                                    {key}
                                </h3>
                            </div>

                            <div className="sm:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                                {value.map((item) => (
                                    <div
                                        className="slide-up group flex flex-col gap-3 items-center text-center p-4 rounded-xl border border-transparent hover:border-border hover:bg-accent/50 transition-all duration-300 cursor-pointer"
                                        key={item.name}
                                    >
                                        <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                            <img
                                                src={item.icon}
                                                alt={item.name}
                                                className="w-[56px] h-[56px] object-contain"
                                            />
                                        </div>
                                        <span className="text-base md:text-lg font-medium capitalize leading-tight">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
