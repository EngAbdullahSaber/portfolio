'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MoveUpRight, Mail, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const COLORS = [
    'bg-yellow-500 text-black',
    'bg-blue-500 text-white',
    'bg-teal-500 text-black',
    'bg-indigo-500 text-white',
];

const MENU_LINKS = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'About Me',
        url: '/#about-me',
    },
    {
        name: 'Experience',
        url: '/#my-experience',
    },
    {
        name: 'Projects',
        url: '/#selected-projects',
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <div className="sticky top-0 z-[4]">
                <button
                    className={cn(
                        'group size-14 absolute top-5 right-5 md:right-10 z-[2] rounded-full backdrop-blur-sm border border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10',
                        {
                            'bg-background-light/95 border-primary/60':
                                isMenuOpen,
                            'bg-background/60': !isMenuOpen,
                        },
                    )}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span
                        className={cn(
                            'inline-block w-1/2 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px]',
                            {
                                'rotate-45 -translate-y-1/2 bg-primary':
                                    isMenuOpen,
                                'md:group-hover:rotate-12 md:group-hover:w-7/12':
                                    !isMenuOpen,
                            },
                        )}
                    ></span>
                    <span
                        className={cn(
                            'inline-block w-1/2 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px]',
                            {
                                '-rotate-45 -translate-y-1/2 bg-primary':
                                    isMenuOpen,
                                'md:group-hover:-rotate-12 md:group-hover:w-7/12':
                                    !isMenuOpen,
                            },
                        )}
                    ></span>
                </button>
            </div>

            <div
                className={cn(
                    'overlay fixed inset-0 z-[2] bg-black/70 backdrop-blur-sm transition-all duration-300',
                    {
                        'opacity-0 invisible pointer-events-none': !isMenuOpen,
                    },
                )}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            <div
                className={cn(
                    'fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform translate-x-full transition-all duration-700 z-[3] overflow-hidden gap-y-14',
                    'flex flex-col lg:justify-center py-10',
                    { 'translate-x-0': isMenuOpen },
                )}
            >
                {/* Animated background with gradient */}
                <div
                    className={cn(
                        'fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] duration-700 delay-150 z-[-1]',
                        'bg-gradient-to-br from-background-light via-background-light to-background',
                        {
                            'translate-x-0': isMenuOpen,
                        },
                    )}
                >
                    {/* Subtle pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)',
                            backgroundSize: '40px 40px',
                        }}
                    ></div>
                </div>

                {/* Decorative floating elements */}
                <div
                    className={cn(
                        'absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl transition-all duration-1000',
                        {
                            'opacity-100 scale-100': isMenuOpen,
                            'opacity-0 scale-0': !isMenuOpen,
                        },
                    )}
                ></div>
                <div
                    className={cn(
                        'absolute bottom-32 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl transition-all duration-1000 delay-200',
                        {
                            'opacity-100 scale-100': isMenuOpen,
                            'opacity-0 scale-0': !isMenuOpen,
                        },
                    )}
                ></div>

                <div className="grow flex md:items-center w-full max-w-[320px] mx-8 sm:mx-auto">
                    <div className="flex gap-12 lg:justify-between max-lg:flex-col w-full">
                        <div className="max-lg:order-2">
                            <div className="flex items-center gap-2 mb-5 md:mb-8">
                                <Sparkles size={14} className="text-primary" />
                                <p className="text-xs font-semibold tracking-widest text-muted-foreground">
                                    SOCIAL
                                </p>
                            </div>
                            <ul className="space-y-3">
                                {SOCIAL_LINKS.map((link, idx) => (
                                    <li
                                        key={link.name}
                                        className={cn(
                                            'transform transition-all duration-500',
                                            {
                                                'translate-x-0 opacity-100':
                                                    isMenuOpen,
                                                'translate-x-10 opacity-0':
                                                    !isMenuOpen,
                                            },
                                        )}
                                        style={{
                                            transitionDelay: `${
                                                (idx + 1) * 100
                                            }ms`,
                                        }}
                                    >
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group text-base capitalize inline-flex items-center gap-2 hover:text-primary transition-colors relative"
                                        >
                                            <span className="relative">
                                                {link.name}
                                                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
                                            </span>
                                            <MoveUpRight
                                                size={14}
                                                className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-2 mb-5 md:mb-8">
                                <div className="w-1 h-4 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
                                <p className="text-xs font-semibold tracking-widest text-muted-foreground">
                                    MENU
                                </p>
                            </div>
                            <ul className="space-y-4">
                                {MENU_LINKS.map((link, idx) => (
                                    <li
                                        key={link.name}
                                        className={cn(
                                            'transform transition-all duration-500',
                                            {
                                                'translate-x-0 opacity-100':
                                                    isMenuOpen,
                                                'translate-x-10 opacity-0':
                                                    !isMenuOpen,
                                            },
                                        )}
                                        style={{
                                            transitionDelay: `${
                                                (idx + 1) * 100 + 200
                                            }ms`,
                                        }}
                                    >
                                        <button
                                            onClick={() => {
                                                router.push(link.url);
                                                setIsMenuOpen(false);
                                            }}
                                            className="group text-xl font-medium flex items-center gap-3 hover:translate-x-2 transition-all duration-300"
                                        >
                                            <span
                                                className={cn(
                                                    'size-4 rounded-full flex items-center justify-center transition-all duration-300 relative overflow-hidden',
                                                    COLORS[idx],
                                                    'group-hover:scale-110 group-hover:shadow-lg',
                                                )}
                                            >
                                                <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
                                                <MoveUpRight
                                                    size={10}
                                                    className="opacity-0 scale-0 -rotate-45 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 transition-all duration-300 relative z-10"
                                                />
                                            </span>
                                            <span className="relative">
                                                {link.name}
                                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-500"></span>
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div
                    className={cn(
                        'w-full max-w-[320px] mx-8 sm:mx-auto transition-all duration-700 delay-500',
                        {
                            'translate-y-0 opacity-100': isMenuOpen,
                            'translate-y-4 opacity-0': !isMenuOpen,
                        },
                    )}
                >
                    <div className="relative p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 group overflow-hidden">
                        {/* Animated background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-3">
                                <Mail size={14} className="text-primary" />
                                <p className="text-xs font-semibold tracking-widest text-muted-foreground">
                                    GET IN TOUCH
                                </p>
                            </div>
                            <a
                                href={`mailto:${GENERAL_INFO.email}`}
                                className="text-sm font-medium hover:text-primary transition-colors inline-flex items-center gap-2 group/email"
                            >
                                <span className="relative">
                                    {GENERAL_INFO.email}
                                    <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-primary/50 to-transparent scale-x-0 group-hover/email:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </span>
                                <MoveUpRight
                                    size={14}
                                    className="opacity-0 -translate-y-1 translate-x-1 group-hover/email:opacity-100 group-hover/email:translate-y-0 group-hover/email:translate-x-0 transition-all duration-300"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
