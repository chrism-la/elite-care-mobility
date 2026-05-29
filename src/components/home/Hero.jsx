import { ShieldCheck, Clock, HeartHandshake } from 'lucide-react';
import Container from '../ui/Container';
import CTAButton from '../ui/CTAButton';
import ContactCard from '../ui/ContactCard';

const trustItems = [
    {
        icon: ShieldCheck,
        title: 'Safe Assistance',
        text: 'Careful support for clients who need extra help.',
    },
    {
        icon: Clock,
        title: 'Dependable Timing',
        text: 'Transportation planned around appointments and care needs.',
    },
    {
        icon: HeartHandshake,
        title: 'Respectful Care',
        text: 'Patient, professional service for clients and families.',
    },
];

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#DBEAFE] blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#FFEDD5] blur-3xl" />

            <Container size="wide">
                <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div className="max-w-3xl">
                        <div className="mb-6 inline-flex rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#12355B] shadow-sm">
                            Non-emergency medical and mobility transportation
                        </div>

                        <h1 className="text-4xl font-semibold tracking-tight text-[#12355B] sm:text-5xl lg:text-6xl">
                            Mobility You Can <span className="font-extrabold text-[#F97316]">Trust</span>
                            <br />
                            <span className="font-extrabold text-[#F97316]">Care</span> You Deserve
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6B7280]">
                            Elite Care Mobility provides safe, professional transportation for seniors, wheelchair users, post-surgery clients, and individuals who need assistance getting where they
                            need to go.
                        </p>

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            {trustItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div key={item.title} className="flex gap-3">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#2563EB] shadow-sm">
                                            <Icon size={22} strokeWidth={2.2} />
                                        </div>

                                        <div>
                                            <p className="font-semibold text-[#12355B]">{item.title}</p>
                                            <p className="mt-1 text-sm leading-6 text-[#6B7280]">{item.text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <ContactCard />
                </div>
            </Container>
        </section>
    );
}
