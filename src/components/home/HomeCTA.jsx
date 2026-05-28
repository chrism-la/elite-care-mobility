import Container from '../ui/Container';
import CTAButton from '../ui/CTAButton';

export default function HomeCTA() {
    return (
        <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
            <Container>
                <div className="rounded-3xl bg-[#12355B] p-8 sm:p-10 lg:p-12">
                    <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-[#F97316]">Request Transportation</p>

                            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Need safe and reliable transportation for yourself or a loved one?</h2>

                            <p className="mt-4 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
                                Contact Elite Care Mobility to discuss your transportation needs, accessibility requirements, pickup details, and availability.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                            <CTAButton href="/contact" variant="orange" className="w-full">
                                Request a Ride
                            </CTAButton>

                            <CTAButton href="/services" variant="secondary" className="w-full">
                                View Services
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
