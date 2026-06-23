import { CheckCircle2, UsersRound } from 'lucide-react';
import Container from '../ui/Container';

const groups = [
    'Individual needing non emergency mobility support',
    'Wheelchair user and mobility impaired individuals',
    'Patients recovering from procedures or surgery',
    'Patients leaving hospitals rehabilitation centers or care facilities',
    'Families and caregivers coordinating transportation',
    'Seniors seeking safe and dependable transportation',
];

export default function WhoWeHelp() {
    return (
        <section className="bg-[#EFF6FF]/60 py-16 sm:py-20 lg:py-24">
            <Container size="wide">
                <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
                    <div className="rounded-4xl bg-[#12355B] p-8 text-white sm:p-10 lg:p-12">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-(--orange)">
                            <UsersRound size={28} />
                        </div>

                        <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl text-[#fadfcc]">WHO WE SERVE</h2>

                        <p className="mt-5 leading-8 text-blue-100">
                            Our services are designed for individuals who need safe and dependable transportation delivered with professionalism patience and care.
                        </p>
                    </div>

                    <div className="max-w-xl justify-self-end space-y-5">
                        {groups.map((group) => (
                            <div key={group} className="flex gap-4">
                                <CheckCircle2 className="mt-1 shrink-0 text-(--orange)" size={23} />

                                <p className="text-lg font-semibold leading-7 text-[#12355B]">{group}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
