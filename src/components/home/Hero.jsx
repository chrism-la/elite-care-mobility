import Container from '../ui/Container';
import CTAButton from '../ui/CTAButton';
import ContactCard from '../ui/ContactCard';

export default function Hero() {
    return (
        <section className="bg-[#EFF6FF] py-16 sm:py-20 lg:py-24">
            <Container size="wide">
                <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#F97316]">Accessible Transportation Services</p>

                        <h1 className="text-4xl font-semibold tracking-tight text-[#12355B] sm:text-5xl lg:text-6xl">Reliable Transportation for Clients Who Need Extra Care</h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6B7280]">
                            Elite Care Mobility provides safe, professional, and dependable transportation for seniors, wheelchair users, post-surgery clients, and individuals who need assistance
                            getting where they need to go.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <CTAButton href="/contact">Request a Ride</CTAButton>
                            <CTAButton href="/services" variant="secondary">
                                View Services
                            </CTAButton>
                        </div>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            {['Wheelchair Accessible', 'Senior-Friendly', 'Non-Emergency'].map((item) => (
                                <div key={item} className="rounded-2xl border border-[#E5E7EB] bg-white px-4 py-4 text-sm font-semibold text-[#12355B] shadow-sm">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <ContactCard />
                </div>
            </Container>
        </section>
    );
}
