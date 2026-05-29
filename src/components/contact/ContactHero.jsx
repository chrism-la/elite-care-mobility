import { PhoneCall } from 'lucide-react';
import Container from '../ui/Container';
import { business } from '../../data/business';

export default function ContactHero() {
    return (
        <section className="bg-linear-to-br from-[#DBEAFE] via-white to-[#FFEDD5] py-14 sm:py-16 lg:py-20">
            <Container size="wide">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div className="max-w-4xl">
                        <p className="mb-5 inline-flex rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#12355B] shadow-sm">Contact Elite Care Mobility</p>

                        <h1 className="text-4xl font-semibold tracking-tight text-[#12355B] sm:text-5xl lg:text-6xl">Request transportation or speak with our team.</h1>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6B7280]">
                            Share a few details about the ride, pickup area, and accessibility needs. We’ll follow up to confirm scheduling and availability.
                        </p>
                    </div>

                    <div className="rounded-4xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#F97316]">Prefer to call?</p>

                        <a href={business.phoneHref} className="mt-3 flex items-center gap-3 text-2xl font-semibold text-[#12355B] transition hover:text-[#2563EB]">
                            <PhoneCall className="text-[#F97316]" size={26} />
                            {business.phoneDisplay}
                        </a>

                        <p className="mt-3 text-sm leading-6 text-[#6B7280]">Calling is often the fastest way to discuss pickup details, mobility needs, and timing.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
