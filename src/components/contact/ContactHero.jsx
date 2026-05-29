import Container from '../ui/Container';

export default function ContactHero() {
    return (
        <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
            <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-[#FED7AA] blur-3xl" />
            <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#BFDBFE] blur-3xl" />
            <Container size="wide">
                <div className="relative pb-4 sm:pb-6 lg:pb-8">
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
                    <div className="mt-10 h-px w-full bg-linear-to-r from-[#2563EB]/20 via-[#E5E7EB] to-[#F97316]/20" />
                </div>
            </Container>
        </section>
    );
}
