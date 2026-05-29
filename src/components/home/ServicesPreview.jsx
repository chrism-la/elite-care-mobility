import Link from 'next/link';
import { Accessibility, Footprints, HeartPulse, Hospital, MapPinned } from 'lucide-react';
import Container from '../ui/Container';
import CTAButton from '../ui/CTAButton';
import { services } from '../../data/services';

const icons = [Accessibility, Footprints, HeartPulse, Hospital, MapPinned];

export default function ServicesPreview() {
    return (
        <section className="bg-[#EFF6FF]/60 pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
            <Container size="wide">
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#F97316]">Services</p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#12355B] sm:text-4xl">Transportation options for medical and everyday mobility needs</h2>
                    </div>

                    <div className="lg:max-w-2xl">
                        <p className="text-base leading-8 text-[#6B7280] sm:text-lg">
                            Whether the ride is for a medical appointment, hospital discharge, recovery support, or daily mobility, our services are designed to feel clear, dependable, and easy to
                            arrange.
                        </p>

                        <div className="mt-6">
                            <CTAButton href="/services" variant="secondary">
                                View All Services
                            </CTAButton>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
                    {services.slice(0, 5).map((service, index) => {
                        const Icon = icons[index];

                        return (
                            <div key={service.title} className="group rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#2563EB]">
                                    <Icon size={26} strokeWidth={2.1} />
                                </div>

                                <h3 className="mt-5 text-xl font-semibold text-[#12355B]">{service.title}</h3>

                                <p className="mt-4 leading-7 text-[#6B7280]">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
