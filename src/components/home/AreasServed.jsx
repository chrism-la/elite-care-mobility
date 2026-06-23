import { MapPin } from 'lucide-react';
import Container from '../ui/Container';

const areaGroups = [
    {
        title: 'San Fernando Valley',
        areas: ['Burbank', 'North Hollywood', 'Studio City', 'Van Nuys', 'Encino', 'Woodland Hills'],
    },
    {
        title: 'Greater Los Angeles',
        areas: ['Los Angeles', 'Glendale', 'Pasadena', 'Beverly Hills', 'Santa Monica', 'Culver City'],
    },
];

export default function AreasServed() {
    return (
        <section className="bg-[#EFF6FF]/50 py-16 sm:py-20 lg:py-24">
            <Container size="wide">
                <div className="overflow-hidden rounded-4xl border border-[#E5E7EB] bg-white shadow-sm">
                    <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                        <div className="flex flex-col justify-center bg-[#12355B] p-8 text-white sm:p-10 lg:p-12 xl:p-14">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#F97316]">
                                <MapPin size={28} />
                            </div>

                            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Serving Los Angeles County and surrounding communities.</h2>

                            <p className="mt-5 max-w-2xl leading-8 text-blue-100">
                                Elite Care Mobility provides safe, accessible transportation throughout Los Angeles County and neighboring communities.
                            </p>
                        </div>

                        <div className="bg-white p-8 sm:p-10 lg:p-12 xl:p-14">
                            <div className="grid gap-6 md:grid-cols-2">
                                {areaGroups.map((group) => (
                                    <div key={group.title} className="rounded-3xl border border-[#E5E7EB] bg-[#EFF6FF]/50 p-6">
                                        <h3 className="text-xl font-semibold text-[#12355B]">{group.title}</h3>

                                        <div className="mt-5 grid gap-3">
                                            {group.areas.map((area) => (
                                                <div key={area} className="rounded-2xl border border-blue-100 bg-white px-5 py-4 text-base font-semibold text-[#12355B]">
                                                    {area}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-10 text-base leading-7 text-[#6B7280]">Need transportation outside these areas ? Contact us to discuss your transportation needs.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
