import Container from '../ui/Container';

export default function ContactHero() {
    return (
        <section className="bg-white py-14 sm:py-16 lg:py-20">
            <Container size="wide">
                <div className="border-b border-[#E5E7EB] pb-10 sm:pb-12 lg:pb-14">
                    <div className="max-w-5xl">
                        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#12355B] sm:text-5xl lg:text-6xl">Let’s get the ride details clear.</h1>

                        <p className="mt-6 max-w-3xl text-xl leading-9 text-[#6B7280]">
                            Send a transportation request and we’ll follow up to confirm the pickup area, timing, accessibility needs, and availability.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 text-sm font-semibold text-[#12355B] sm:grid-cols-3">
                        <div className="border-l-4 border-[#F97316] pl-4">Wheelchair Transportation</div>
                        <div className="border-l-4 border-[#F97316] pl-4">Hospital Discharge</div>
                        <div className="border-l-4 border-[#F97316] pl-4">Post-Surgery Support</div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
