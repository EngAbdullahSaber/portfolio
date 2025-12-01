'use client';
import SectionTitle from '@/components/SectionTitle';
import { PROJECTS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef, useState, MouseEvent } from 'react';
import Project from './Project';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectList = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectListRef = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [selectedProject, setSelectedProject] = useState<string | null>(
        PROJECTS[0].slug,
    );

    // update imageRef.current href based on the cursor hover position
    // also update image position
    useGSAP(
        (context, contextSafe) => {
            // show image on hover
            if (window.innerWidth < 768) {
                setSelectedProject(null);
                return;
            }

            const handleMouseMove = contextSafe?.((e: MouseEvent) => {
                if (!containerRef.current) return;
                if (!imageContainer.current) return;

                if (window.innerWidth < 768) {
                    setSelectedProject(null);
                    return;
                }

                const containerRect =
                    containerRef.current?.getBoundingClientRect();
                const imageRect =
                    imageContainer.current.getBoundingClientRect();
                const offsetTop = e.clientY - containerRect.y;

                // if cursor is outside the container, hide the image
                if (
                    containerRect.y > e.clientY ||
                    containerRect.bottom < e.clientY ||
                    containerRect.x > e.clientX ||
                    containerRect.right < e.clientX
                ) {
                    return gsap.to(imageContainer.current, {
                        duration: 0.3,
                        opacity: 0,
                        scale: 0.9,
                    });
                }

                gsap.to(imageContainer.current, {
                    y: offsetTop - imageRect.height / 2,
                    duration: 1,
                    opacity: 1,
                    scale: 1,
                });
            }) as any;

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        },
        { scope: containerRef, dependencies: [containerRef.current] },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from(containerRef.current, {
                y: 150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    const handleMouseEnter = (slug: string) => {
        if (window.innerWidth < 768) {
            setSelectedProject(null);
            return;
        }

        setSelectedProject(slug);
    };

    return (
        <section
            className="pb-section relative overflow-hidden"
            id="selected-projects"
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 -z-10 opacity-30">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl"></div>
            </div>

            <div className="container">
                <div className="relative mb-16">
                    <SectionTitle title="SELECTED PROJECTS" />

                    {/* Project count indicator */}
                    <div className="mt-8 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent"></div>
                            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                {PROJECTS.length} Projects
                            </span>
                        </div>
                    </div>
                </div>

                <div className="group/projects relative" ref={containerRef}>
                    {/* Floating preview image with enhanced styling */}
                    {selectedProject !== null && (
                        <div
                            className="max-md:hidden fixed right-[5%] top-1/2 z-50 pointer-events-none w-[280px] xl:w-[400px] aspect-[3/4] opacity-0"
                            ref={imageContainer}
                        >
                            {/* Glow effect behind image */}
                            <div className="absolute inset-0 bg-primary/20 blur-2xl scale-110 opacity-50"></div>

                            {/* Image container with border and shadow */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden ring-2 ring-primary/30 shadow-2xl shadow-primary/20">
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"></div>

                                {/* Corner accents */}
                                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl z-20"></div>
                                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/50 rounded-br-2xl z-20"></div>

                                {PROJECTS.map((project) => (
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        width="400"
                                        height="533"
                                        className={cn(
                                            'absolute inset-0 transition-all duration-700 w-full h-full object-cover',
                                            {
                                                'opacity-0 scale-95':
                                                    project.slug !==
                                                    selectedProject,
                                                'opacity-100 scale-100':
                                                    project.slug ===
                                                    selectedProject,
                                            },
                                        )}
                                        ref={imageRef}
                                        key={project.slug}
                                    />
                                ))}

                                {/* Bottom info bar */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent z-20">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                                            Preview
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Project list with enhanced container */}
                    <div className="relative">
                        {/* Decorative side line */}
                        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>

                        <div
                            className="flex flex-col max-md:gap-10 lg:pl-8"
                            ref={projectListRef}
                        >
                            {PROJECTS.map((project, index) => (
                                <Project
                                    index={index}
                                    project={project}
                                    selectedProject={selectedProject}
                                    onMouseEnter={handleMouseEnter}
                                    key={project.slug}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Bottom decorative element */}
                    <div className="mt-16 flex justify-center items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                        <div className="text-xs text-muted-foreground uppercase tracking-widest">
                            End of Projects
                        </div>
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                        <div className="w-2 h-2 rounded-full bg-primary/50"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectList;
