import Link from 'next/link';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import CTAButton from '../ui/CTAButton';
import { services } from '../../data/services';

export default function ServicesPreview() {
    return (
        <section className="bg-[#EFF6FF]/50 py-16 sm:py-20 lg:py-24">
            <Container>
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <SectionHeader
                        eyebrow="Our Services"
                        title="Accessible transportation for everyday and medical-related needs"
                        description="From wheelchair transportation to hospital discharge support, Elite Care Mobility helps clients travel safely and comfortably."
                    />

                    <CTAButton href="/services" variant="secondary" className="md:shrink-0">
                        View All Services
                    </CTAButton>
                </div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {services.slice(0, 5).map((service) => (
                        <div key={service.title} className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
                            <h3 className="text-xl font-semibold text-[#12355B]">{service.title}</h3>

                            <p className="mt-4 leading-7 text-[#6B7280]">{service.description}</p>

                            <Link href="/services" className="mt-6 inline-flex min-h-11 items-center font-semibold text-[#2563EB] hover:text-[#12355B]">
                                Learn more
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
