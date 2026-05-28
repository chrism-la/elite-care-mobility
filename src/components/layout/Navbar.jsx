import Link from 'next/link';
import Container from '../ui/Container';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <Container>
                <nav className="flex h-20 items-center justify-between">
                    <Link href="/" className="text-xl font-bold tracking-tight text-[#12355B]">
                        Elite Care Mobility
                    </Link>

                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-[#2563EB]">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <Link href="/contact" className="rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12355B]">
                        Request a Ride
                    </Link>
                </nav>
            </Container>
        </header>
    );
}
