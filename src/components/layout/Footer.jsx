import Image from 'next/image';
import Link from 'next/link';
import Container from '../ui/Container';
import { business } from '../../data/business';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50 py-10">
            <Container>
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <div>
                            <Image src={business.logo} alt="Elite Care Mobility logo" width={260} height={170} className="h-24 w-auto object-contain" />

                            <p className="mt-4 text-base font-semibold leading-7 text-[#12355B]">{business.tagline}</p>
                        </div>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
                            Safe, reliable, and accessible transportation for seniors, wheelchair users, and clients who need extra assistance.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-slate-900">Pages</p>
                        <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
                            <Link href="/">Home</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-slate-900">Contact</p>
                        <a href={business.phoneHref} className="mt-3 block text-sm font-semibold text-[#2563EB]">
                            {business.phoneDisplay}
                        </a>
                        <a href={business.emailHref} className="mt-2 block break-all text-sm font-semibold text-[#2563EB]">
                            {business.email}
                        </a>
                    </div>
                </div>

                <div className="mt-10 border-t border-[#E5E7EB] pt-6">
                    <div className="flex flex-col gap-4 text-sm text-[#6B7280] sm:flex-row sm:items-center sm:justify-between">
                        <p>© {new Date().getFullYear()} Elite Care Mobility. All rights reserved.</p>

                        <a
                            href="https://www.linkedin.com/in/chrism-la"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 transition hover:text-[#12355B]"
                            aria-label="Christopher Morales LinkedIn"
                        >
                            <FaLinkedin className="text-[15px]" />
                            <span>Designed & Developed by Christopher Morales</span>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
