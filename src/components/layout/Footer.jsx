import Image from 'next/image';
import Link from 'next/link';
import Container from '../ui/Container';
import { business } from '../../data/business';

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50 py-10">
            <Container>
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <div className="flex items-center gap-3">
                            <Image src={business.logo} alt="Elite Care Mobility logo" width={48} height={48} className="h-12 w-auto" />

                            <div>
                                <p className="text-lg font-bold text-[#12355B]">{business.name}</p>
                                <p className="text-sm font-medium text-[#6B7280]">{business.tagline}</p>
                            </div>
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

                <p className="mt-10 text-sm text-slate-500">
                    © {new Date().getFullYear()} {business.name}. All rights reserved.
                </p>
            </Container>
        </footer>
    );
}
