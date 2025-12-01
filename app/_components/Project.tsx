import TransitionLink from '@/components/TransitionLink';
import { cn } from '@/lib/utils';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';

interface Props {
    index: number;
    project: IProject;
    selectedProject: string | null;
    onMouseEnter: (_slug: string) => void;
}

gsap.registerPlugin(useGSAP);

const Project = ({ index, project, selectedProject, onMouseEnter }: Props) => {
    const externalLinkSVGRef = useRef<SVGSVGElement>(null);
    const projectRef = useRef<HTMLAnchorElement>(null);

    const { context, contextSafe } = useGSAP(() => {}, {
        scope: externalLinkSVGRef,
        revertOnUpdate: true,
    });

    const handleMouseEnter = contextSafe?.(() => {
        onMouseEnter(project.slug);

        const arrowLine = externalLinkSVGRef.current?.querySelector(
            '#arrow-line',
        ) as SVGPathElement;
        const arrowCurb = externalLinkSVGRef.current?.querySelector(
            '#arrow-curb',
        ) as SVGPathElement;
        const box = externalLinkSVGRef.current?.querySelector(
            '#box',
        ) as SVGPathElement;

        gsap.set(box, {
            opacity: 0,
            strokeDasharray: box?.getTotalLength(),
            strokeDashoffset: box?.getTotalLength(),
        });
        gsap.set(arrowLine, {
            opacity: 0,
            strokeDasharray: arrowLine?.getTotalLength(),
            strokeDashoffset: arrowLine?.getTotalLength(),
        });
        gsap.set(arrowCurb, {
            opacity: 0,
            strokeDasharray: arrowCurb?.getTotalLength(),
            strokeDashoffset: arrowCurb?.getTotalLength(),
        });

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        tl.to(externalLinkSVGRef.current, {
            autoAlpha: 1,
        })
            .to(box, {
                opacity: 1,
                strokeDashoffset: 0,
            })
            .to(
                arrowLine,
                {
                    opacity: 1,
                    strokeDashoffset: 0,
                },
                '<0.2',
            )
            .to(arrowCurb, {
                opacity: 1,
                strokeDashoffset: 0,
            })
            .to(
                externalLinkSVGRef.current,
                {
                    autoAlpha: 0,
                },
                '+=1',
            );
    });

    const handleMouseLeave = contextSafe?.(() => {
        context.kill();
    });

    return (
        <TransitionLink
            href={`/projects/${project.slug}`}
            ref={projectRef}
            className="project-item group leading-none py-8 md:py-10 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/projects:opacity-30 md:hover:!opacity-100 transition-all duration-500"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative overflow-hidden rounded-2xl">
                {/* Image container with enhanced styling */}
                {selectedProject === null && (
                    <div className="relative overflow-hidden rounded-2xl mb-8 group/image">
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10"></div>

                        {/* Border glow effect */}
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-border group-hover:ring-primary/50 transition-all duration-500 z-10"></div>

                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            width="800"
                            height="533"
                            className={cn(
                                'w-full object-cover aspect-[3/2] object-top transition-all duration-700 group-hover:scale-105',
                            )}
                            key={project.slug}
                            loading="lazy"
                        />

                        {/* Corner accent */}
                        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 rounded-tr-xl transition-all duration-500 z-10"></div>
                    </div>
                )}

                {/* Content section */}
                <div className="flex gap-4 md:gap-6 items-start">
                    {/* Index number with enhanced design */}
                    <div className="relative flex-shrink-0">
                        <div className="relative">
                            <span className="font-anton text-2xl md:text-3xl text-muted-foreground group-hover:text-primary transition-colors duration-500">
                                {(index + 1).toString().padStart(2, '0')}
                            </span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></span>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="flex-1 min-w-0">
                        {/* Title with gradient effect */}
                        <div className="relative mb-4">
                            <h4 className="text-4xl xs:text-5xl md:text-6xl font-anton transition-all duration-700 bg-gradient-to-r from-primary via-primary to-foreground from-[0%] via-[50%] to-[100%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left flex items-center gap-3 md:gap-4 flex-wrap">
                                <span>{project.title}</span>

                                {/* External link icon */}
                                <span className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary/0 group-hover:border-primary/50 bg-primary/0 group-hover:bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-primary"
                                        ref={externalLinkSVGRef}
                                    >
                                        <path
                                            id="box"
                                            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                        ></path>
                                        <path
                                            id="arrow-line"
                                            d="M10 14 21 3"
                                        ></path>
                                        <path
                                            id="arrow-curb"
                                            d="M15 3h6v6"
                                        ></path>
                                    </svg>
                                </span>
                            </h4>
                        </div>

                        {/* Tech stack with enhanced styling */}
                        <div className="flex flex-wrap gap-3">
                            {project.techStack.slice(0, 3).map((tech, idx) => (
                                <div className="group/tech relative" key={tech}>
                                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/5 text-primary border border-primary/20 group-hover:bg-primary/10 group-hover:border-primary/40 transition-all duration-300 backdrop-blur-sm">
                                        {tech}
                                    </span>
                                </div>
                            ))}

                            {/* Show remaining count if more than 3 */}
                            {project.techStack.length > 3 && (
                                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-muted/50 text-muted-foreground border border-border group-hover:bg-muted transition-all duration-300">
                                    +{project.techStack.length - 3} more
                                </span>
                            )}
                        </div>

                        {/* View project hint */}
                        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <span>View Project</span>
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
                        </div>
                    </div>
                </div>
            </div>
        </TransitionLink>
    );
};

export default Project;
