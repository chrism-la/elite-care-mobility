import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export const metadata = {
    title: 'Elite Care Mobility | Accessible Transportation Services',
    description: 'Elite Care Mobility provides wheelchair, ambulatory, post-surgery, hospital discharge, and non-medical transportation services.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
