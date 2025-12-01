'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const trailsRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useGSAP((context, contextSafe) => {
        if (window.innerWidth < 768) return;

        const handleMouseMove = contextSafe?.((e: MouseEvent) => {
            if (!cursorRef.current || !cursorDotRef.current) return;

            const { clientX, clientY } = e;

            // Main cursor follows with smooth delay
            gsap.to(cursorRef.current, {
                x: clientX,
                y: clientY,
                ease: 'power2.out',
                duration: 0.4,
                opacity: 1,
            });

            // Dot follows faster for more dynamic feel
            gsap.to(cursorDotRef.current, {
                x: clientX,
                y: clientY,
                ease: 'power3.out',
                duration: 0.15,
                opacity: 1,
            });

            // Create trail effect
            if (trailsRef.current) {
                const trail = document.createElement('div');
                trail.className = 'cursor-trail';
                trail.style.left = `${clientX}px`;
                trail.style.top = `${clientY}px`;
                trailsRef.current.appendChild(trail);

                gsap.to(trail, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    onComplete: () => trail.remove(),
                });
            }
        }) as any;

        const handleMouseDown = contextSafe?.(() => {
            setIsClicking(true);
        }) as any;

        const handleMouseUp = contextSafe?.(() => {
            setIsClicking(false);
        }) as any;

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    });

    useEffect(() => {
        if (window.innerWidth < 768) return;

        const handleHoverElements = () => {
            const interactiveElements = document.querySelectorAll(
                'a, button, input, textarea, select, [role="button"], .cursor-hover',
            );

            interactiveElements.forEach((el) => {
                el.addEventListener('mouseenter', () => setIsHovering(true));
                el.addEventListener('mouseleave', () => setIsHovering(false));
            });

            return () => {
                interactiveElements.forEach((el) => {
                    el.removeEventListener('mouseenter', () =>
                        setIsHovering(true),
                    );
                    el.removeEventListener('mouseleave', () =>
                        setIsHovering(false),
                    );
                });
            };
        };

        const cleanup = handleHoverElements();

        // Re-run when DOM changes
        const observer = new MutationObserver(handleHoverElements);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            cleanup();
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Trail container */}
            <div
                ref={trailsRef}
                className="hidden md:block fixed inset-0 pointer-events-none z-[49]"
            />

            {/* Main cursor ring */}
            <div
                ref={cursorRef}
                className="hidden md:block fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-0 z-[50] pointer-events-none transition-all duration-200"
                style={{
                    width: isHovering ? '60px' : isClicking ? '35px' : '40px',
                    height: isHovering ? '60px' : isClicking ? '35px' : '40px',
                }}
            >
                {/* Outer ring with gradient border */}
                <div
                    className="relative w-full h-full rounded-full transition-all duration-300"
                    style={{
                        background: isHovering
                            ? 'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--primary) / 0.5), hsl(var(--primary)))'
                            : 'transparent',
                        padding: '2px',
                    }}
                >
                    <div
                        className="w-full h-full rounded-full border-2 transition-all duration-300"
                        style={{
                            borderColor: isClicking
                                ? 'hsl(var(--primary))'
                                : isHovering
                                ? 'transparent'
                                : 'hsl(var(--foreground) / 0.3)',
                            backgroundColor: isHovering
                                ? 'hsl(var(--background))'
                                : 'transparent',
                        }}
                    >
                        {/* Inner glow effect */}
                        {isHovering && (
                            <div className="absolute inset-0 rounded-full bg-primary/10 blur-sm animate-pulse" />
                        )}
                    </div>
                </div>

                {/* Rotating accent lines when hovering */}
                {isHovering && (
                    <>
                        <div
                            className="absolute top-1/2 left-1/2 w-8 h-px bg-primary/50 -translate-x-1/2 -translate-y-1/2 animate-spin"
                            style={{ animationDuration: '3s' }}
                        />
                        <div
                            className="absolute top-1/2 left-1/2 w-8 h-px bg-primary/30 -translate-x-1/2 -translate-y-1/2 animate-spin"
                            style={{
                                animationDuration: '3s',
                                animationDirection: 'reverse',
                            }}
                        />
                    </>
                )}

                {/* Corner accents when clicking */}
                {isClicking && (
                    <>
                        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary rounded-tl-full" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary rounded-tr-full" />
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary rounded-bl-full" />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary rounded-br-full" />
                    </>
                )}
            </div>

            {/* Center dot */}
            <div
                ref={cursorDotRef}
                className="hidden md:block fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-0 z-[51] pointer-events-none"
            >
                <div
                    className="rounded-full transition-all duration-200"
                    style={{
                        width: isHovering ? '6px' : isClicking ? '3px' : '4px',
                        height: isHovering ? '6px' : isClicking ? '3px' : '4px',
                        backgroundColor: isClicking
                            ? 'hsl(var(--primary))'
                            : 'hsl(var(--foreground))',
                        boxShadow: isHovering
                            ? '0 0 20px hsl(var(--primary) / 0.5)'
                            : 'none',
                    }}
                />
            </div>

            {/* Styles for trail effect */}
            <style jsx global>{`
                .cursor-trail {
                    position: fixed;
                    width: 8px;
                    height: 8px;
                    background: hsl(var(--primary) / 0.3);
                    border-radius: 50%;
                    pointer-events: none;
                    transform: translate(-50%, -50%);
                    z-index: 48;
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
