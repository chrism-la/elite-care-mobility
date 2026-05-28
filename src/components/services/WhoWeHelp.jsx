import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

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
        <section className="bg-[#EFF6FF]/50 py-16 sm:py-20 lg:py-24">
            <Container>
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <SectionHeader
                        eyebrow="Who We Help"
                        title="Supportive transportation for clients and families"
                        description="Our services are designed for people who need transportation that is more careful, patient, and dependable than a standard ride."
                    />

                    <div className="grid gap-3 sm:grid-cols-2">
                        {groups.map((group) => (
                            <div key={group} className="rounded-2xl border border-[#E5E7EB] bg-white px-5 py-4 font-semibold text-[#12355B] shadow-sm">
                                {group}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
