'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const ParticleBackground = () => {
    const particlesRef = useRef<HTMLDivElement[]>([]);
    const glowParticlesRef = useRef<HTMLDivElement[]>([]);
    const orbitParticlesRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        // Floating particles with varied movements
        particlesRef.current.forEach((particle, i) => {
            const size = Math.random() * 4 + 1;
            const duration = Math.random() * 15 + 15;
            const delay = Math.random() * 5;
            const xMovement = (Math.random() - 0.5) * 200;

            gsap.set(particle, {
                width: size,
                height: size,
                opacity: Math.random() * 0.6 + 0.2,
                left: Math.random() * window.innerWidth,
                top: Math.random() * window.innerHeight,
                rotation: Math.random() * 360,
            });

            // Create organic floating motion
            const tl = gsap.timeline({ repeat: -1, delay });

            tl.to(particle, {
                y: -window.innerHeight - 100,
                x: `+=${xMovement}`,
                rotation: `+=${Math.random() * 360}`,
                duration: duration,
                ease: 'none',
                opacity: 0,
                onComplete: () => {
                    gsap.set(particle, {
                        y: window.innerHeight + 100,
                        x: Math.random() * window.innerWidth,
                        opacity: Math.random() * 0.6 + 0.2,
                    });
                },
            });
        });

        // Glowing accent particles
        glowParticlesRef.current.forEach((particle, i) => {
            const size = Math.random() * 8 + 4;
            const duration = Math.random() * 20 + 20;
            const delay = Math.random() * 8;

            gsap.set(particle, {
                width: size,
                height: size,
                left: Math.random() * window.innerWidth,
                top: Math.random() * window.innerHeight,
            });

            const tl = gsap.timeline({ repeat: -1, delay });

            tl.to(particle, {
                y: -window.innerHeight - 100,
                x: `+=${(Math.random() - 0.5) * 300}`,
                duration: duration,
                ease: 'sine.inOut',
                opacity: 0,
                scale: Math.random() * 1.5 + 0.5,
                onComplete: () => {
                    gsap.set(particle, {
                        y: window.innerHeight + 100,
                        x: Math.random() * window.innerWidth,
                        opacity: 1,
                        scale: 1,
                    });
                },
            });

            // Pulsing animation
            gsap.to(particle, {
                opacity: Math.random() * 0.5 + 0.3,
                scale: `+=${Math.random() * 0.3}`,
                duration: Math.random() * 3 + 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        });

        // Orbiting particles in fixed positions
        orbitParticlesRef.current.forEach((particle, i) => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const orbitRadius = Math.random() * 50 + 30;
            const duration = Math.random() * 10 + 10;

            gsap.set(particle, {
                width: Math.random() * 3 + 2,
                height: Math.random() * 3 + 2,
                left: x,
                top: y,
            });

            // Circular orbit motion
            gsap.to(particle, {
                motionPath: {
                    path: [
                        { x: x + orbitRadius, y: y },
                        { x: x, y: y + orbitRadius },
                        { x: x - orbitRadius, y: y },
                        { x: x, y: y - orbitRadius },
                        { x: x + orbitRadius, y: y },
                    ],
                    curviness: 2,
                },
                duration: duration,
                repeat: -1,
                ease: 'none',
            });

            // Opacity pulse
            gsap.to(particle, {
                opacity: 0.2,
                duration: Math.random() * 2 + 1,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        });
    }, []);

    return (
        <>
            {/* Main particle layer */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {[...Array(60)].map((_, i) => (
                    <div
                        key={`particle-${i}`}
                        ref={(el) => {
                            if (el) particlesRef.current[i] = el;
                        }}
                        className="absolute rounded-full bg-gradient-to-br from-foreground/40 to-foreground/20 blur-[0.5px]"
                        style={{
                            boxShadow: '0 0 2px rgba(255, 255, 255, 0.1)',
                        }}
                    />
                ))}
            </div>

            {/* Glowing accent particles */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={`glow-${i}`}
                        ref={(el) => {
                            if (el) glowParticlesRef.current[i] = el;
                        }}
                        className="absolute rounded-full"
                        style={{
                            background:
                                i % 3 === 0
                                    ? 'radial-gradient(circle, hsl(var(--primary) / 0.4), transparent)'
                                    : i % 3 === 1
                                    ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)'
                                    : 'radial-gradient(circle, rgba(20, 184, 166, 0.3), transparent)',
                            filter: 'blur(8px)',
                        }}
                    />
                ))}
            </div>

            {/* Orbiting particles */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={`orbit-${i}`}
                        ref={(el) => {
                            if (el) orbitParticlesRef.current[i] = el;
                        }}
                        className="absolute rounded-full"
                        style={{
                            background:
                                'radial-gradient(circle, hsl(var(--primary) / 0.6), hsl(var(--primary) / 0.2))',
                            boxShadow: '0 0 4px hsl(var(--primary) / 0.3)',
                        }}
                    />
                ))}
            </div>

            {/* Ambient gradient overlays */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-3xl"
                    style={{
                        background:
                            'radial-gradient(circle, hsl(var(--primary)), transparent)',
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-3xl"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(59, 130, 246, 1), transparent)',
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.02] blur-3xl"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(20, 184, 166, 1), transparent)',
                    }}
                />
            </div>

            {/* Animated mesh gradient */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.015]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            radial-gradient(at 40% 20%, hsla(var(--primary), 0.3) 0px, transparent 50%),
                            radial-gradient(at 80% 0%, rgba(59, 130, 246, 0.2) 0px, transparent 50%),
                            radial-gradient(at 0% 50%, rgba(20, 184, 166, 0.2) 0px, transparent 50%),
                            radial-gradient(at 80% 50%, rgba(168, 85, 247, 0.2) 0px, transparent 50%),
                            radial-gradient(at 0% 100%, rgba(59, 130, 246, 0.2) 0px, transparent 50%),
                            radial-gradient(at 80% 100%, rgba(20, 184, 166, 0.2) 0px, transparent 50%),
                            radial-gradient(at 0% 0%, rgba(168, 85, 247, 0.2) 0px, transparent 50%)
                        `,
                    }}
                />
            </div>
        </>
    );
};

export default ParticleBackground;
