import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import { areas } from '../../data/areas';

export default function AreasServed() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <Container>
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <SectionHeader
                        eyebrow="Areas Served"
                        title="Local transportation support across nearby communities"
                        description="Elite Care Mobility provides accessible transportation throughout local service areas. Contact us to confirm availability for your pickup and destination."
                    />

                    <div className="grid gap-3 sm:grid-cols-2">
                        {areas.map((area) => (
                            <div key={area} className="rounded-2xl border border-[#E5E7EB] bg-[#EFF6FF]/50 px-5 py-4 text-base font-semibold text-[#12355B]">
                                {area}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
