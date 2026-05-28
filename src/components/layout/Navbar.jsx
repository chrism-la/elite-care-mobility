'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from '../ui/Container';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <Container>
                <nav className="flex h-20 items-center justify-between">
                    <Link href="/" className="text-lg font-bold tracking-tight text-[#12355B] sm:text-xl" onClick={() => setOpen(false)}>
                        Elite Care Mobility
                    </Link>

                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-[#2563EB]">
                                {link.label}
                            </Link>
                        ))}
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
                        className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-[#E5E7EB] text-[#12355B] md:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={open}
                    >
                        {open ? 'Close' : 'Menu'}
                    </button>
                </nav>

                {open && (
                    <div className="border-t border-[#E5E7EB] py-5 md:hidden">
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="min-h-12 rounded-2xl px-4 py-3 text-base font-semibold text-[#12355B] hover:bg-[#EFF6FF]"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                                className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-[#2563EB] px-5 py-3 text-base font-semibold text-white"
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
