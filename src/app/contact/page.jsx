import ContactHero from '../../components/contact/ContactHero';
import ContactFormSection from '../../components/contact/ContactFormSection';

export const metadata = {
    title: 'Contact | Elite Care Mobility',
    description: 'Contact Elite Care Mobility to request wheelchair transportation, ambulatory transportation, post-surgery transportation, and non-emergency mobility services.',
};

export default function ContactPage() {
    return (
        <main>
            <ContactHero />
            <ContactFormSection />
        </main>
    );
}
