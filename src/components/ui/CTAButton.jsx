import Link from 'next/link';

export default function CTAButton({ href, children, variant = 'primary', className = '' }) {
    const variants = {
        primary: 'bg-[#2563EB] text-white hover:bg-[#12355B] focus-visible:ring-[#2563EB]',
        secondary: 'border border-[#E5E7EB] bg-white text-[#12355B] hover:border-[#2563EB] hover:text-[#2563EB] focus-visible:ring-[#2563EB]',
        orange: 'bg-(--orange) text-white hover:bg-orange-600 focus-visible:ring-(--orange)',
    };

    return (
        <Link
            href={href}
            className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${variants[variant]} ${className}`}
        >
            {children}
        </Link>
    );
}
