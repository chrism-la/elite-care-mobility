import { MapPin, PhoneCall } from 'lucide-react';
import Container from '../ui/Container';
import CTAButton from '../ui/CTAButton';
import { areas } from '../../data/areas';
import { business } from '../../data/business';

export default function AreasServed() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <Container size="wide">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <div className="max-w-xl">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#2563EB]">
                            <MapPin size={28} />
                        </div>

                        <h2 className="text-3xl font-semibold tracking-tight text-[#12355B] sm:text-4xl">Local transportation support across nearby communities</h2>

                        <p className="mt-5 leading-8 text-[#6B7280]">
                            Elite Care Mobility provides accessible transportation throughout nearby service areas. Contact us to confirm pickup, destination, and scheduling availability.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <CTAButton href="/contact">Request a Ride</CTAButton>

                            <a
                                href={business.phoneHref}
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-3 font-semibold text-[#12355B] transition hover:border-[#2563EB] hover:text-[#2563EB]"
                            >
                                <PhoneCall size={18} />
                                Call Now
                            </a>
                        </div>
                    </div>

                    <div className="rounded-4xl border border-[#E5E7EB] bg-[#EFF6FF]/70 p-6 sm:p-8 lg:p-10">
                        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                            {areas.map((area) => (
                                <div key={area} className="rounded-2xl bg-white px-5 py-4 text-base font-semibold text-[#12355B] shadow-sm">
                                    {area}
                                </div>
                            ))}
                        </div>

                        <p className="mt-6 text-sm leading-6 text-[#6B7280]">Service availability may vary by schedule, pickup location, and destination. Please contact us to confirm details.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
