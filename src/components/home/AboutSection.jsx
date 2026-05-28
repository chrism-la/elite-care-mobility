import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

export default function AboutSection() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <Container>
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <SectionHeader
                            eyebrow="About Us"
                            title="Transportation focused on safety, comfort, and reliability"
                            description="Elite Care Mobility provides dependable non-emergency transportation for seniors, wheelchair users, post-surgery patients, and individuals who need additional travel assistance."
                        />

                        <div className="mt-8 space-y-5 text-[#6B7280]">
                            <p className="leading-8">
                                We understand that transportation is more than simply getting from one place to another. Clients and families depend on safe, respectful, and timely service they can
                                trust.
                            </p>

                            <p className="leading-8">
                                Our goal is to provide comfortable transportation experiences while helping clients maintain independence, attend important appointments, and travel with confidence.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        {[
                            {
                                title: 'Dependable Scheduling',
                                text: 'Reliable pickup and transportation services focused on punctuality and communication.',
                            },
                            {
                                title: 'Accessible Assistance',
                                text: 'Transportation options designed to support wheelchair and mobility-related needs.',
                            },
                            {
                                title: 'Professional Service',
                                text: 'Friendly, respectful interactions that prioritize client comfort and care.',
                            },
                            {
                                title: 'Local Transportation',
                                text: 'Serving local communities with safe non-emergency transportation solutions.',
                            },
                        ].map((item) => (
                            <div key={item.title} className="rounded-3xl border border-[#E5E7EB] bg-[#EFF6FF]/40 p-6">
                                <h3 className="text-lg font-semibold text-[#12355B]">{item.title}</h3>

                                <p className="mt-3 leading-7 text-[#6B7280]">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
