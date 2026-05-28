import { business } from '../../data/business';

export default function StickyCallButton() {
    return (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#E5E7EB] bg-white p-3 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] md:hidden">
            <a href={business.phoneHref} className="flex min-h-14 items-center justify-center rounded-full bg-[#F97316] px-6 py-3 text-base font-semibold text-white">
                Call Now: {business.phoneDisplay}
            </a>
        </div>
    );
}
