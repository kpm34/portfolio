"use client";

import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, CornerRightDown } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "circOut"
            }
        }
    };

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top } = e.currentTarget.getBoundingClientRect();
        setMousePosition({ x: clientX - left, y: clientY - top });
    };

    return (
        <section
            className="min-h-[80vh] flex flex-col justify-center relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Reveal Background Image */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                animate={{
                    maskImage: isHovered
                        ? `radial-gradient(100px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
                        : "radial-gradient(0px circle at 0px 0px, black, transparent)",
                    WebkitMaskImage: isHovered
                        ? `radial-gradient(100px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
                        : "radial-gradient(0px circle at 0px 0px, black, transparent)",
                } as any}
                transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
            >
                <div
                    className="absolute inset-0 bg-center opacity-40"
                    style={{
                        backgroundImage: "url('/hero-bg.png?v=3')",
                        backgroundSize: '110% 120%', // Increase height (length) by 10%
                        backgroundPosition: 'center'
                    }}
                />
            </motion.div>

            {/* Top Header / Navbar */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="absolute top-0 left-0 w-full flex justify-center py-8 z-50 pointer-events-auto"
            >
                <div className="w-full max-w-7xl px-6 flex justify-between items-start">
                    {/* Left: Tagline */}
                    <div className="max-w-[200px]">
                        <h2 className="text-sm md:text-base font-light text-[#F5F5DC]/60 tracking-wide">
                            Systems that ship.
                        </h2>
                    </div>

                    {/* Right: Socials */}
                    <div className="flex gap-6 items-center">
                        <SocialLink href="https://github.com/kpm34" icon={<Github size={20} />} label="GitHub" />
                        <SocialLink href="https://linkedin.com/in/kashyapmaheshwari" icon={<Linkedin size={20} />} label="LinkedIn" />
                        <SocialLink href="mailto:kashpm2002@gmail.com" icon={<Mail size={20} />} label="Email" />
                    </div>
                </div>
            </motion.nav>

            {/* Center: Name */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full flex justify-center items-center z-10 pointer-events-none"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-3xl md:text-5xl font-bold tracking-tighter text-[#F5F5DC] text-center"
                >
                    Kashyap
                    <br />
                    Maheshwari
                </motion.h1>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-0 w-full flex justify-center pointer-events-none"
            >
                <div className="w-full max-w-7xl px-6">
                    <div className="flex items-center gap-4">
                        <span className="text-[#F5F5DC]/40 font-mono text-xs tracking-widest uppercase">Projects</span>
                        <CornerRightDown className="text-[#F5F5DC]/40" size={20} />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[#F5F5DC]/60 hover:text-[#800020] transition-colors duration-300"
            aria-label={label}
        >
            {icon}
            <span className="text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                {label}
            </span>
        </a>
    );
}
