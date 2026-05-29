import { MapPin, PhoneCall } from 'lucide-react';
import Container from '../ui/Container';
import CTAButton from '../ui/CTAButton';
import { areas } from '../../data/areas';
import { business } from '../../data/business';

export default function AreasServed() {
    return (
        <section className="bg-[#EFF6FF]/50 py-16 sm:py-20 lg:py-24">
            <Container size="wide">
                <div className="overflow-hidden rounded-4xl border border-[#E5E7EB] bg-white shadow-sm">
                    <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                        <div className="bg-[#12355B] p-8 text-white sm:p-10 lg:p-12 xl:p-14">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#F97316]">
                                <MapPin size={28} />
                            </div>

                            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Serving local communities with dependable mobility support</h2>

                            <p className="mt-5 max-w-2xl leading-8 text-blue-100">
                                Elite Care Mobility provides accessible transportation throughout nearby communities. Contact us to confirm pickup, destination, and scheduling availability.
                            </p>
                        </div>

                        <div className="bg-white p-8 sm:p-10 lg:p-12 xl:p-14">
                            <p className="text-sm font-semibold uppercase tracking-wide text-[#F97316]">Areas Served</p>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                                {areas.map((area) => (
                                    <div key={area} className="rounded-2xl border border-[#E5E7EB] bg-[#EFF6FF]/60 px-5 py-4 text-base font-semibold text-[#12355B]">
                                        {area}
                                    </div>
                                ))}
                            </div>

                            <p className="mt-6 text-sm leading-6 text-[#6B7280]">Service availability may vary by schedule, pickup location, and destination. Please contact us to confirm details.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
