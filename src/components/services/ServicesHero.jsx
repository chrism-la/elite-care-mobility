import { Accessibility, CarFront, HeartPulse } from 'lucide-react';
import Container from '../ui/Container';
import CTAButton from '../ui/CTAButton';

export default function ServicesHero() {
    return (
        <section className="bg-linear-to-br from-[#DBEAFE] via-white to-[#FFEDD5] py-16 sm:py-20 lg:py-24">
            <Container size="wide">
                <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                    <div className="max-w-4xl">
                        <p className="mb-5 inline-flex rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#12355B] shadow-sm">Accessible Transportation Services</p>

                        <h1 className="text-4xl font-semibold tracking-tight text-[#12355B] sm:text-5xl lg:text-6xl">Transportation support for medical visits, recovery, and everyday mobility</h1>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6B7280]">
                            Elite Care Mobility provides dependable non-emergency transportation for clients who need a safer, more supportive option than a standard ride.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                        {[
                            { icon: Accessibility, title: 'Accessible' },
                            { icon: HeartPulse, title: 'Care-Focused' },
                            { icon: CarFront, title: 'Reliable' },
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
