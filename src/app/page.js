import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import ServicesPreview from '../components/home/ServicesPreview';
import AreasServed from '../components/home/AreasServed';
import HomeCTA from '../components/home/HomeCTA';

export default function HomePage() {
    return (
        <main>
            <Hero />
            <AboutSection />
            <AreasServed />
            <ServicesPreview />
            <HomeCTA />
        </main>
    );
}
