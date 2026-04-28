import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Get a Quote | Fortify Plans",
  description:
    "Speak with a licensed Fortify Plans broker. Get a free, no-obligation quote for short-term medical, supplemental, ACA, or life insurance.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0d1f42] to-[#1b3a6e] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get a Free Quote</h1>
          <p className="text-[#c4cfdb] text-lg max-w-2xl mx-auto">
            Tell us a little about yourself and a licensed Fortify Plans broker will reach out
            with personalized options — no obligation, no pressure.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-16 bg-[#f4f6f9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-[#e8ecf1] shadow-sm">
                <h3 className="font-semibold text-[#1b3a6e] mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-[#6b7f99]">
                  {[
                    "Submit your information using the form.",
                    "A licensed broker will contact you within 1 business day.",
                    "We'll walk you through your best options — free of charge.",
                    "You choose the plan that fits. No pressure, ever.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1b3a6e] text-white text-xs flex items-center justify-center font-semibold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-white rounded-xl p-6 border border-[#e8ecf1] shadow-sm">
                <h3 className="font-semibold text-[#1b3a6e] mb-3">Contact Us Directly</h3>
                <div className="space-y-2 text-sm text-[#6b7f99]">
                  <p>
                    <span className="font-medium text-[#1b3a6e]">Email: </span>
                    <a href="mailto:info@fortify-plans.com" className="hover:text-[#2d5faa] transition-colors">
                      info@fortify-plans.com
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-[#1b3a6e]">Phone: </span>
                    <a href="tel:+18005551234" className="hover:text-[#2d5faa] transition-colors">
                      (800) 555-1234
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-[#eef4fb] rounded-xl p-5 border border-[#dde8f7]">
                <p className="text-xs text-[#8c9db5] leading-relaxed">
                  Fortify Plans is a licensed insurance brokerage. By submitting this form, you
                  consent to be contacted by a licensed representative. We never sell your
                  information to third parties.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
