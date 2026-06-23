import { Accessibility, CarFront, HeartPulse } from 'lucide-react';
import Container from '../ui/Container';

export default function ServicesHero() {
    return (
        <section className="bg-linear-to-br from-[#DBEAFE] via-white to-[#FFEDD5] py-16 sm:py-20 lg:py-24">
            <Container size="wide">
                <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl font-semibold tracking-tight text-[#12355B] sm:text-5xl lg:text-6xl">
                            {' '}
                            Transportation Solutions for medical appointments, recovery and daily mobility.
                        </h1>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6B7280]">
                            Elite care mobility provides professional non emergency medical transportation for individuals requiring safe, accessible and dependable travel to medical appointments,
                            rehabilitation visits, hospital discharges and every day destinations.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                        {[
                            { icon: Accessibility, title: 'Accessible Transportation' },
                            { icon: HeartPulse, title: 'Compassionate Care' },
                            { icon: CarFront, title: 'Reliable Service' },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <div key={item.title} className="flex items-center gap-4 rounded-3xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#2563EB]">
                                        <Icon size={26} />
                                    </div>

                                    <p className="font-semibold text-[#12355B]">{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
