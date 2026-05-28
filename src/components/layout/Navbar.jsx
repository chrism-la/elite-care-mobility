'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
                <nav className="flex h-20 items-center justify-between">
                    <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label="Elite Care Mobility home">
                        <Image src={business.logo} alt="Elite Care Mobility logo" width={48} height={48} priority className="h-12 w-auto" />

                        <div className="hidden sm:block">
                            <p className="text-base font-bold leading-tight tracking-tight text-[#12355B]">{business.name}</p>
                            <p className="text-xs font-medium text-[#6B7280]">{business.tagline}</p>
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
                    </div>

                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12355B]"
                        >
                            Request a Ride
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen((current) => !current)}
                        className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-[#E5E7EB] text-sm font-semibold text-[#12355B] md:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={open}
                    >
                        {open ? 'Close' : 'Menu'}
                    </button>
                </nav>

                {open && (
                    <div className="border-t border-[#E5E7EB] py-5 md:hidden">
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

                            <a href={business.phoneHref} className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-[#F97316] px-5 py-3 text-base font-semibold text-white">
                                Call Now
                            </a>

                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#2563EB] px-5 py-3 text-base font-semibold text-white"
                            >
                                Request a Ride
                            </Link>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
}
