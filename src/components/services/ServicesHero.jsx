import Container from '../ui/Container';
import CTAButton from '../ui/CTAButton';

export default function ServicesHero() {
    return (
        <section className="bg-[#EFF6FF] py-16 sm:py-20 lg:py-24">
            <Container>
                <div className="max-w-4xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#F97316]">Services</p>

                    <h1 className="text-4xl font-semibold tracking-tight text-[#12355B] sm:text-5xl lg:text-6xl">Accessible transportation services built around safety and care</h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6B7280]">
                        Elite Care Mobility supports seniors, wheelchair users, post-surgery clients, and individuals who need dependable non-emergency transportation.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <CTAButton href="/contact">Request a Ride</CTAButton>
                        <CTAButton href="/" variant="secondary">
                            Back to Home
                        </CTAButton>
                    </div>
                </div>
            </Container>
        </section>
    );
}
