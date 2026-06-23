import Container from '../ui/Container';
import CTAButton from '../ui/CTAButton';
import { business } from '../../data/business';

export default function HomeCTA() {
    return (
        <section className="bg-[#EFF6FF]/60 pb-16 pt-4 sm:pb-20 lg:pb-24">
            <Container size="wide">
                <div className="rounded-4xl bg-[#12355B] p-8 sm:p-10 lg:p-14">
                    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
                        <div className="max-w-4xl">
                            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"> Ready to schedule safe and reliable transportation ? </h2>

                            <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
                                Whether its a medical appointment, hospital discharge, therapy visit or community outing, elite care mobility is here to help.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                            <CTAButton href="/contact" variant="orange" className="w-full">
                                Request a Ride
                            </CTAButton>

                            <a
                                href={business.phoneHref}
                                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                            >
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
