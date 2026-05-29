'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Container from '../ui/Container';
import { business } from '../../data/business';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <Container>
                <nav className="flex h-24 items-center justify-between sm:h-28">
                    <Link href="/" className="flex items-center gap-4" onClick={() => setOpen(false)} aria-label="Elite Care Mobility home">
                        <Image src={business.logoMark} alt="Elite Care Mobility" width={72} height={72} priority className="h-18 w-18 object-contain" />

                        <div className="hidden flex-col items-center leading-none sm:flex">
                            <span className="font-brand text-[1.75rem] font-extrabold uppercase tracking-[0.03em] text-[#12355B]">ELITE CARE</span>

                            <div className="mt-1 flex items-center justify-center">
                                <div className="mr-3 h-0.5 w-5 bg-[#F97316]" />

                                <span className="font-brand text-[1.15rem] font-bold uppercase tracking-[0.22em] text-[#F97316]">MOBILITY</span>

                                <div className="ml-3 h-0.5 w-5 bg-[#F97316]" />
                            </div>
                        </div>
                    </Link>

                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => {
                            const active = pathname === link.href;

                            return (
                                <Link key={link.href} href={link.href} className={`text-sm font-medium transition ${active ? 'text-[#2563EB]' : 'text-slate-700 hover:text-[#2563EB]'}`}>
                                    <span className="relative">
                                        {link.label}
                                        {active && <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#2563EB]" />}
                                    </span>
                                </Link>
                            );
                        })}

                        <Link
                            href="/contact"
                            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#12355B]"
                        >
                            Get Started
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen((current) => !current)}
                        className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#12355B] shadow-sm md:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={open}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {open ? (
                                <motion.span
                                    key="close"
                                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                                    transition={{ duration: 0.18 }}
                                >
                                    <X size={22} />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="menu"
                                    initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                    exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                                    transition={{ duration: 0.18 }}
                                >
                                    <Menu size={22} />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </nav>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="border-t border-[#E5E7EB] py-5 md:hidden"
                        >
                            <div className="flex flex-col gap-3">
                                {navLinks.map((link) => {
                                    const active = pathname === link.href;

                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className={`min-h-12 rounded-2xl px-4 py-3 text-base font-semibold ${active ? 'bg-[#EFF6FF] text-[#2563EB]' : 'text-[#12355B] hover:bg-[#EFF6FF]'}`}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </header>
    );
}
