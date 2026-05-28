import Container from '../ui/Container';
import ContactCard from '../ui/ContactCard';

export default function ContactFormSection() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <Container>
                <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
                    <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-semibold tracking-tight text-[#12355B]">Request Transportation</h2>

                            <p className="mt-4 leading-8 text-[#6B7280]">Fill out the form below and a member of our team will contact you regarding scheduling and transportation details.</p>
                        </div>

                        <form className="mt-10 space-y-6">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#1F2937]">
                                        Full Name
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="min-h-14 w-full rounded-2xl border border-[#E5E7EB] px-4 text-base text-[#1F2937] outline-none transition focus:border-[#2563EB]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#1F2937]">
                                        Phone Number
                                    </label>

                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="min-h-14 w-full rounded-2xl border border-[#E5E7EB] px-4 text-base text-[#1F2937] outline-none transition focus:border-[#2563EB]"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#1F2937]">
                                        Email Address
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="min-h-14 w-full rounded-2xl border border-[#E5E7EB] px-4 text-base text-[#1F2937] outline-none transition focus:border-[#2563EB]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="mb-2 block text-sm font-semibold text-[#1F2937]">
                                        Transportation Need
                                    </label>

                                    <select id="service" className="min-h-14 w-full rounded-2xl border border-[#E5E7EB] px-4 text-base text-[#1F2937] outline-none transition focus:border-[#2563EB]">
                                        <option>Select a service</option>
                                        <option>Wheelchair Transportation</option>
                                        <option>Ambulatory Transportation</option>
                                        <option>Post-Surgery Transportation</option>
                                        <option>Hospital Discharge Transportation</option>
                                        <option>Non-Medical Transportation</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="location" className="mb-2 block text-sm font-semibold text-[#1F2937]">
                                    Pickup Area
                                </label>

                                <input
                                    id="location"
                                    type="text"
                                    placeholder="Enter pickup city or area"
                                    className="min-h-14 w-full rounded-2xl border border-[#E5E7EB] px-4 text-base text-[#1F2937] outline-none transition focus:border-[#2563EB]"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#1F2937]">
                                    Additional Information
                                </label>

                                <textarea
                                    id="message"
                                    rows="6"
                                    placeholder="Provide any additional transportation details..."
                                    className="w-full rounded-2xl border border-[#E5E7EB] px-4 py-4 text-base text-[#1F2937] outline-none transition focus:border-[#2563EB]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#2563EB] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#12355B]"
                            >
                                Submit Request
                            </button>
                        </form>
                    </div>

                    <div className="lg:sticky lg:top-28">
                        <ContactCard />
                    </div>
                </div>
            </Container>
        </section>
    );
}
