import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import Container from '../ui/Container';

const points = [
    'Safe and accessible transportation for medical appointments and every day mobility needs',
    'Clear communication with clients , families and healthcare providers',
    'Professional service focused on comfort, punctuality and respectful assistance',
];

export default function AboutSection() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <Container size="wide">
                <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
                    <div className="relative min-h-105 overflow-hidden rounded-4xl">
                        <Image src="/wheelchair-van.jpg" alt="Passenger using wheelchair-accessible transportation" fill className="object-cover" />

                        <div className="absolute inset-0 bg-linear-to-t from-[#12355B]/20 to-transparent" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight text-[#12355B] sm:text-4xl">Transportation Designed Around Safety, Comfort, and Independence</h2>

                        <p className="mt-5 leading-8 text-[#6B7280]">
                            Whether traveling to a medical appointment, returning home after a hospital stay or attending ongoing treatments, elite care mobility provides safe, dependable and
                            compassionate transportation tailored to each clients needs.
                        </p>

                        <p className="mt-5 leading-8 text-[#6B7280]">Our goal is to make every journey comfortable, accessible and stress free.</p>

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
