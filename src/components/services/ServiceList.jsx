import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import CTAButton from '../ui/CTAButton';
import { services } from '../../data/services';

export default function ServiceList() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <Container>
                <SectionHeader
                    eyebrow="What We Provide"
                    title="Transportation options for medical and everyday mobility needs"
                    description="Each service is designed to provide safe, respectful, and reliable transportation for clients and families."
                />

                <div className="mt-12 grid gap-6">
                    {services.map((service, index) => (
                        <div key={service.title} className="grid gap-6 rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm md:grid-cols-[0.2fr_1fr] md:p-8">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF] text-xl font-bold text-[#2563EB]">{index + 1}</div>

                            <div>
                                <h2 className="text-2xl font-semibold tracking-tight text-[#12355B]">{service.title}</h2>

                                <p className="mt-4 max-w-3xl leading-8 text-[#6B7280]">{service.description}</p>

                                <div className="mt-6">
                                    <CTAButton href="/contact" variant="secondary">
                                        Ask About This Service
                                    </CTAButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
