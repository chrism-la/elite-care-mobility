import Container from '../ui/Container';

export default function ContactHero() {
    return (
        <section className="bg-[#EFF6FF] py-16 sm:py-20 lg:py-24">
            <Container size="medium">
                <div className="text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#F97316]">Contact Us</p>

                    <h1 className="text-4xl font-semibold tracking-tight text-[#12355B] sm:text-5xl lg:text-6xl">Request transportation or ask a question</h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6B7280]">
                        Contact Elite Care Mobility to discuss transportation needs, scheduling, accessibility requirements, and service availability.
                    </p>
                </div>
            </Container>
        </section>
    );
}
