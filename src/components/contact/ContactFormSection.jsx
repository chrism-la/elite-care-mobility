'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock3, ShieldCheck } from 'lucide-react';
import Container from '../ui/Container';
import { business } from '../../data/business';

const fieldClass = 'min-h-14 w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 text-base text-[#1F2937] outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]';

const labelClass = 'mb-2 block text-sm font-semibold text-[#1F2937]';

export default function ContactFormSection() {
    const [status, setStatus] = useState({
        type: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        const form = event.currentTarget;

        setLoading(true);
        setStatus({ type: '', message: '' });

        const formData = new FormData(form);

        const payload = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            service: formData.get('service'),
            location: formData.get('location'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok || result.error) {
                setStatus({
                    type: 'error',
                    message: result.error || 'Something went wrong. Please try again.',
                });
                return;
            }

            setStatus({
                type: 'success',
                message: 'Thank you. Your request has been submitted. We will contact you soon.',
            });

            form.reset();
        } catch {
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again or call us directly.',
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <Container size="wide">
                <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                    <div>
                        <div className="mb-8 max-w-3xl">
                            <h2 className="text-3xl font-semibold tracking-tight text-[#12355B] sm:text-4xl">Tell us what kind of transportation you need</h2>

                            <p className="mt-4 leading-8 text-[#6B7280]">The form below is designed to be simple. Required fields are marked with an asterisk.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className={labelClass}>
                                        Full Name *
                                    </label>
                                    <input id="name" name="name" type="text" required placeholder="Enter your name" className={fieldClass} />
                                </div>

                                <div>
                                    <label htmlFor="phone" className={labelClass}>
                                        Phone Number *
                                    </label>
                                    <input id="phone" name="phone" type="tel" required placeholder="Enter your phone number" className={fieldClass} />
                                </div>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="email" className={labelClass}>
                                        Email Address *
                                    </label>
                                    <input id="email" name="email" type="email" required placeholder="Enter your email" className={fieldClass} />
                                </div>

                                <div>
                                    <label htmlFor="service" className={labelClass}>
                                        Transportation Need *
                                    </label>
                                    <select id="service" name="service" required defaultValue="" className={fieldClass}>
                                        <option value="" disabled>
                                            Select a service
                                        </option>
                                        <option>Wheelchair Transportation</option>
                                        <option>Ambulatory Transportation</option>
                                        <option>Post-Surgery Transportation</option>
                                        <option>Hospital Discharge Transportation</option>
                                        <option>Non-Medical Transportation</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="location" className={labelClass}>
                                    Pickup Area
                                </label>
                                <input id="location" name="location" type="text" placeholder="Enter pickup city or area" className={fieldClass} />
                            </div>

                            <div>
                                <label htmlFor="message" className={labelClass}>
                                    Additional Information
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    placeholder="Provide any additional transportation details..."
                                    className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-4 text-base text-[#1F2937] outline-none transition focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE]"
                                />
                            </div>

                            {status.message && (
                                <p className={`rounded-2xl p-4 text-sm font-semibold ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`} role="status">
                                    {status.message}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#2563EB] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#12355B] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-56"
                            >
                                {loading ? 'Submitting...' : 'Submit Request'}
                            </button>
                        </form>
                    </div>

                    <aside className="lg:sticky lg:top-32">
                        <div className="border-l-4 border-[#F97316] bg-[#EFF6FF]/70 p-6 sm:p-8">
                            <h3 className="text-2xl font-semibold tracking-tight text-[#12355B]">What happens next?</h3>

                            <div className="mt-6 space-y-6">
                                {[
                                    {
                                        icon: Phone,
                                        title: 'We review your request',
                                        text: 'A team member reviews the ride details and contact information.',
                                    },
                                    {
                                        icon: Clock3,
                                        title: 'We confirm availability',
                                        text: 'We follow up to discuss timing, pickup location, and transportation needs.',
                                    },
                                    {
                                        icon: ShieldCheck,
                                        title: 'You receive next steps',
                                        text: 'We help confirm the ride details so transportation feels clear and dependable.',
                                    },
                                ].map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div key={item.title} className="flex gap-4">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#2563EB] shadow-sm">
                                                <Icon size={22} />
                                            </div>

                                            <div>
                                                <p className="font-semibold text-[#12355B]">{item.title}</p>
                                                <p className="mt-1 text-sm leading-6 text-[#6B7280]">{item.text}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="mt-8 space-y-5">
                            <a href={business.phoneHref} className="flex items-start gap-4 border-b border-[#E5E7EB] pb-5">
                                <Phone className="mt-1 shrink-0 text-[#F97316]" size={22} />
                                <div>
                                    <p className="font-semibold text-[#12355B]">Phone</p>
                                    <p className="mt-1 text-[#6B7280]">{business.phoneDisplay}</p>
                                </div>
                            </a>

                            <a href={business.emailHref} className="flex items-start gap-4 border-b border-[#E5E7EB] pb-5">
                                <Mail className="mt-1 shrink-0 text-[#F97316]" size={22} />
                                <div>
                                    <p className="font-semibold text-[#12355B]">Email</p>
                                    <p className="mt-1 break-all text-[#6B7280]">{business.email}</p>
                                </div>
                            </a>

                            <div className="flex items-start gap-4">
                                <MapPin className="mt-1 shrink-0 text-[#F97316]" size={22} />
                                <div>
                                    <p className="font-semibold text-[#12355B]">Service Area</p>
                                    <p className="mt-1 text-[#6B7280]">Local accessible transportation. Contact us to confirm your pickup and destination.</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </Container>
        </section>
    );
}
