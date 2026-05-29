import { Accessibility, Footprints, HeartPulse, Hospital, MapPinned } from 'lucide-react';
import Container from '../ui/Container';
import CTAButton from '../ui/CTAButton';
import { services } from '../../data/services';

const icons = [Accessibility, Footprints, HeartPulse, Hospital, MapPinned];

export default function ServiceList() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <Container size="wide">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-[#12355B] sm:text-4xl">Services designed for comfort, access, and peace of mind</h2>

                    <p className="mt-5 text-lg leading-8 text-[#6B7280]">Each service is built around safe transport, clear communication, and respectful assistance for clients and families.</p>
                </div>

                <div className="mt-14 space-y-6">
                    {services.map((service, index) => {
                        const Icon = icons[index];
                        const reverse = index % 2 !== 0;

                        return (
                            <article
                                key={service.title}
                                className={`grid gap-6 rounded-4xl border border-[#E5E7EB] bg-white p-6 shadow-sm lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:p-8 ${
                                    reverse ? 'lg:grid-cols-[1.25fr_0.75fr]' : ''
                                }`}
                            >
                                <div className={`${reverse ? 'lg:order-2' : ''}`}>
                                    <div className="flex min-h-52 items-center justify-center rounded-3xl bg-[#EFF6FF] p-8">
                                        <div className="flex h-24 w-24 items-center justify-center rounded-4xl bg-white text-[#2563EB] shadow-sm">
                                            <Icon size={44} strokeWidth={2} />
                                        </div>
                                    </div>
                                </div>

                                <div className={`${reverse ? 'lg:order-1' : ''}`}>
                                    <p className="text-sm font-semibold uppercase tracking-wide text-[#F97316]">Service {index + 1}</p>

                                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#12355B] sm:text-3xl">{service.title}</h3>

                                    <p className="mt-4 max-w-3xl leading-8 text-[#6B7280]">{service.description}</p>

                                    <div className="mt-6">
                                        <CTAButton href="/contact" variant="secondary">
                                            Ask About This Service
                                        </CTAButton>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
