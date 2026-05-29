import Image from 'next/image';
import { CheckCircle2, UsersRound } from 'lucide-react';
import Container from '../ui/Container';

const groups = [
    'Seniors needing reliable transportation',
    'Wheelchair users',
    'Clients recovering from procedures',
    'Families coordinating care',
    'Patients leaving hospitals or care facilities',
    'Individuals needing non-emergency mobility support',
];

export default function WhoWeHelp() {
    return (
        <section className="bg-[#EFF6FF]/60 py-16 sm:py-20 lg:py-24">
            <Container size="wide">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                    <div className="rounded-4xl bg-[#12355B] p-8 text-white sm:p-10 lg:p-12">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#F97316]">
                            <UsersRound size={28} />
                        </div>

                        <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">Supportive transportation for clients and families</h2>

                        <p className="mt-5 leading-8 text-blue-100">Our services are designed for people who need transportation that is more careful, patient, and dependable than a standard ride.</p>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                        <div className="space-y-5">
                            {groups.map((group) => (
                                <div key={group} className="flex gap-4">
                                    <CheckCircle2 className="mt-1 shrink-0 text-[#F97316]" size={23} />

                                    <p className="text-lg font-semibold leading-7 text-[#12355B]">{group}</p>
                                </div>
                            ))}
                        </div>

                        <div className="relative min-h-[340px] overflow-hidden rounded-4xl">
                            <Image src="/images/wheelchair-van.jpg" alt="Wheelchair-accessible transportation service" fill className="object-cover" />

                            <div className="absolute inset-0 bg-linear-to-t from-[#12355B]/25 to-transparent" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
