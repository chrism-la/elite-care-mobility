import { Accessibility, Droplets, Footprints, HeartPulse, Hospital, MapPinned } from 'lucide-react';
import Container from '../ui/Container';
import { services } from '../../data/services';

const icons = [Accessibility, Droplets, Footprints, HeartPulse, Hospital, MapPinned];

export default function ServiceList() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <Container size="wide">
                <div className="space-y-6">
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
                                </div>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
