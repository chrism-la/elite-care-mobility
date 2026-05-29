import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import StickyCallButton from '../components/layout/StickyCallButton';
import { Montserrat, Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    weight: ['600', '700', '800'],
});

export const metadata = {
    title: 'Elite Care Mobility | Accessible Transportation Services',
    description: 'Elite Care Mobility provides wheelchair, ambulatory, post-surgery, hospital discharge, and non-medical transportation services.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-scroll-behavior="smooth">
            <body className={`${inter.variable} ${montserrat.variable} pb-20 md:pb-0`}>
                <Navbar />
                {children}
                <Footer />
                <StickyCallButton />
            </body>
        </html>
    );
}
