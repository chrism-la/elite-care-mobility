import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import StickyCallButton from '../components/layout/StickyCallButton';

export const metadata = {
    title: 'Elite Care Mobility | Accessible Transportation Services',
    description: 'Elite Care Mobility provides wheelchair, ambulatory, post-surgery, hospital discharge, and non-medical transportation services.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="pb-20 md:pb-0">
                <Navbar />
                {children}
                <Footer />
                <StickyCallButton />
            </body>
        </html>
    );
}
