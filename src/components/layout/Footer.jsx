import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import Container from '../ui/Container';
import { business } from '../../data/business';

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50 py-12">
            <Container>
                <div className="grid gap-12 lg:gap-20 md:grid-cols-2 md:items-center">
                    <div>
                        <Image src={business.logo} alt="Elite Care Mobility logo" width={260} height={170} className="h-24 w-auto object-contain" />

                        <p className="mt-4 text-base font-semibold leading-7 text-[#12355B]">
                            Mobility You Can <span className="font-bold text-(--orange)">Trust</span>. <br></br>
                            <span className="font-bold text-(--orange)">Care</span> You Deserve.
                        </p>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
                            Safe, reliable, and accessible transportation for medical appointments, hospital discharges, rehabilitation visits, community outings, and everyday mobility needs.
                        </p>
                    </div>

                    <div className="self-center md:text-right">
                        <p className="font-semibold text-slate-900">Contact</p>

                        <a href={business.phoneHref} className="mt-3 block text-sm font-semibold text-[#2563EB] transition hover:text-[#12355B]">
                            {business.phoneDisplay}
                        </a>

                        <a href={business.emailHref} className="mt-2 block break-all text-sm font-semibold text-[#2563EB] transition hover:text-[#12355B]">
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
