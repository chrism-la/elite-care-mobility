import CTAButton from './CTAButton';
import { business } from '../../data/business';

export default function ContactCard({ className = '' }) {
    return (
        <div className={`rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8 ${className}`}>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#F97316]">Contact</p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#12355B]">Speak with Elite Care Mobility</h3>

            <p className="mt-4 leading-7 text-[#6B7280]">Have questions or need to schedule transportation? Contact us to discuss pickup details, accessibility needs, and availability.</p>

            <div className="mt-6 space-y-4">
                <div>
                    <p className="text-sm font-semibold text-[#1F2937]">Phone</p>
                    <a href={business.phoneHref} className="mt-1 inline-block text-lg font-semibold text-[#2563EB] hover:text-[#12355B]">
                        {business.phoneDisplay}
                    </a>
                </div>

                <div>
                    <p className="text-sm font-semibold text-[#1F2937]">Email</p>
                    <a href={business.emailHref} className="mt-1 inline-block break-all text-[#2563EB] hover:text-[#12355B]">
                        {business.email}
                    </a>
                </div>
            </div>

            <div className="mt-8">
                <CTAButton href="/contact" className="w-full">
                    Request a Ride
                </CTAButton>
            </div>
        </div>
    );
}
