export default function SectionHeader({ eyebrow, title, description, align = 'left', className = '' }) {
    const alignment = align === 'center' ? 'mx-auto text-center' : '';

    return (
        <div className={`max-w-3xl ${alignment} ${className}`}>
            {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-(--orange)">{eyebrow}</p>}

            <h2 className="text-3xl font-semibold tracking-tight text-[#12355B] sm:text-4xl">{title}</h2>

            {description && <p className="mt-4 text-base leading-8 text-[#6B7280] sm:text-lg">{description}</p>}
        </div>
    );
}
