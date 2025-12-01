import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star, ArrowUpRight, Heart, Sparkles } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    return (
        <footer className="relative pb-8 pt-20 overflow-hidden" id="contact">
            {/* Decorative background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            {/* Gradient line separator */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

            <div className="container">
                {/* Main CTA Section */}
                <div className="text-center mb-16 relative">
                    {/* Floating sparkle decorations */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 animate-pulse">
                        <Sparkles size={20} className="text-primary/40" />
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <p className="text-sm font-medium text-primary">
                            Available for new projects
                        </p>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-medium mb-3 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                        Have a project in mind?
                    </h2>

                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                        Let's bring your ideas to life together
                    </p>
                    <a
                        href={`mailto:${GENERAL_INFO.email}`}
                        className="group relative inline-flex items-center gap-3 text-3xl sm:text-5xl font-anton"
                    >
                        {/* Animated underline */}
                        <span className="relative">
                            {GENERAL_INFO.email}
                            <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-teal-500 group-hover:w-full transition-all duration-700 ease-out rounded-full"></span>

                            {/* Glow effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        </span>

                        {/* Arrow icon */}
                        <ArrowUpRight
                            className="opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-primary"
                            size={32}
                        />
                    </a>
                </div>

                {/* Divider with gradient */}
                <div className="relative h-px bg-gradient-to-r from-transparent via-border to-transparent my-12 max-w-2xl mx-auto">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center">
                        <Heart
                            size={14}
                            className="text-primary fill-primary/20"
                        />
                    </div>
                </div>

                {/* Credits Section */}
                <div className="text-center">
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-block"
                    >
                        <div className="relative px-6 py-4 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 overflow-hidden">
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-3 flex items-center justify-center gap-2">
                                    <span>Design & built with</span>
                                    <Heart
                                        size={14}
                                        className="text-red-500 fill-red-500 animate-pulse"
                                    />
                                    <span>by</span>
                                </p>

                                <p className="text-lg font-semibold mb-3 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent group-hover:from-primary group-hover:to-blue-500 transition-all duration-500">
                                    Abdullah Saber
                                </p>

                                {/* Stats */}
                                <div className="flex items-center justify-center gap-6 text-sm">
                                    <span className="group/star flex items-center gap-2 text-muted-foreground hover:text-yellow-500 transition-colors duration-300">
                                        <Star
                                            size={16}
                                            className="group-hover/star:fill-yellow-500 group-hover/star:scale-110 transition-all duration-300"
                                        />
                                        <span className="font-medium">
                                            Star
                                        </span>
                                    </span>

                                    <div className="w-px h-4 bg-border"></div>

                                    <span className="group/fork flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300">
                                        <GitFork
                                            size={16}
                                            className="group-hover/fork:scale-110 transition-transform duration-300"
                                        />
                                        <span className="font-medium">
                                            Fork
                                        </span>
                                    </span>
                                </div>
                            </div>

                            {/* Decorative corner accents */}
                            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-primary/20 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-primary/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </a>

                    {/* Copyright text */}
                    <p className="text-xs text-muted-foreground/60 mt-8">
                        © {new Date().getFullYear()} All rights reserved
                    </p>
                </div>
            </div>

            {/* Bottom decorative gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        </footer>
    );
};

export default Footer;
