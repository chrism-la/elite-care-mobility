import Link from 'next/link';
import Container from '../ui/Container';

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50 py-10">
            <Container>
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <p className="text-lg font-bold text-[#12355B]">Elite Care Mobility</p>
                        <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
                            Safe, reliable, and accessible transportation for seniors, wheelchair users, and clients who need extra assistance.
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-slate-900">Pages</p>
                        <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
                            <Link href="/">Home</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-slate-900">Contact</p>
                        <p className="mt-3 text-sm text-slate-600">Phone: Coming soon</p>
                        <p className="mt-1 text-sm text-slate-600">Email: Coming soon</p>
                    </div>
                </div>

                <p className="mt-10 text-sm text-slate-500">© {new Date().getFullYear()} Elite Care Mobility. All rights reserved.</p>
            </Container>
        </footer>
    );
}
