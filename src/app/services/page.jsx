import ServicesHero from '../../components/services/ServicesHero';
import ServiceList from '../../components/services/ServiceList';
import WhoWeHelp from '../../components/services/WhoWeHelp';
import HomeCTA from '../../components/home/HomeCTA';

export const metadata = {
    title: 'Services | Elite Care Mobility',
    description:
        'Explore wheelchair transportation, ambulatory transportation, post-surgery transportation, hospital discharge transportation, and non-medical transportation services from Elite Care Mobility.',
};

export default function ServicesPage() {
    return (
        <main>
            <ServicesHero />
            <ServiceList />
            <WhoWeHelp />
            <HomeCTA />
        </main>
    );
}
