import { CheckCircle2 } from 'lucide-react';
import Container from '../ui/Container';

const points = [
    'Supportive transportation for seniors and clients with mobility needs',
    'Clear communication for families coordinating appointments or discharge',
    'Service focused on comfort, punctuality, and respectful assistance',
];

export default function AboutSection() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <Container>
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div className="rounded-4xl bg-[#12355B] p-8 text-white sm:p-10">
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#F97316]">Built Around Care</p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Transportation that gives families more confidence</h2>

                        <p className="mt-5 leading-8 text-blue-100">
                            We understand that getting to an appointment, returning home from a procedure, or arranging transportation for a loved one can feel stressful. Elite Care Mobility is built
                            to make that process easier, safer, and more dependable.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold tracking-tight text-[#12355B] sm:text-3xl">More than a ride from point A to point B.</h3>

                        <p className="mt-5 leading-8 text-[#6B7280]">
                            Our service is designed for clients who need transportation with patience, accessibility awareness, and a higher level of attention than a standard rideshare or taxi
                            service.
                        </p>

                        <div className="mt-8 space-y-5">
                            {points.map((point) => (
                                <div key={point} className="flex gap-4">
                                    <CheckCircle2 className="mt-1 shrink-0 text-[#F97316]" size={24} strokeWidth={2.3} />

                                    <p className="leading-7 text-[#1F2937]">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
