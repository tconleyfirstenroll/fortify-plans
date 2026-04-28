import Link from "next/link";
import Image from "next/image";

const products = [
  {
    icon: "🏥",
    title: "Short-Term Medical",
    description:
      "Flexible, affordable coverage for gaps between major medical plans. Get protected quickly without long-term commitments.",
  },
  {
    icon: "➕",
    title: "Supplemental Insurance",
    description:
      "Fill the gaps your primary insurance leaves behind. Coverage for critical illness, accident, hospital indemnity, and more.",
  },
  {
    icon: "📋",
    title: "ACA / Marketplace",
    description:
      "Comprehensive ACA-compliant plans with potential subsidies. We guide you through every option on the Health Insurance Marketplace.",
  },
  {
    icon: "🛡️",
    title: "Life Insurance",
    description:
      "Term, whole, and final expense policies tailored to protect your family's financial future — at every stage of life.",
  },
];

const pillars = [
  {
    title: "Trusted Guidance",
    description:
      "Our licensed agents put your needs first — no pressure, no jargon. Just honest answers and the right plan for you.",
  },
  {
    title: "Compliance-Driven",
    description:
      "We operate with rigorous adherence to state and federal regulations so you can trust every recommendation we make.",
  },
  {
    title: "Consumer-First",
    description:
      "From first conversation to enrollment, your experience and satisfaction are our primary measure of success.",
  },
  {
    title: "Agent Excellence",
    description:
      "We invest heavily in training and culture so every Fortify agent is equipped to serve you at the highest level.",
  },
];

const stats = [
  { value: "4", label: "Product Lines" },
  { value: "50", label: "Broad Availability" },
  { value: "100%", label: "Compliance Focus" },
  { value: "5★", label: "Client Satisfaction Goal" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d1f42] via-[#1b3a6e] to-[#2d5faa] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#2d5faa] text-[#dde8f7] mb-4 uppercase tracking-wide">
                Insurance You Can Trust
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Coverage That{" "}
                <span className="text-[#6a9fde]">Fortifies</span>{" "}
                Your Future
              </h1>
              <p className="text-lg text-[#c4cfdb] leading-relaxed mb-8 max-w-lg">
                We guide consumers through short-term medical, supplemental, ACA, and life
                insurance options — with expert brokers, transparent advice, and zero pressure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-md bg-white text-[#1b3a6e] font-semibold hover:bg-[#dde8f7] transition-colors"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/products"
                  className="px-6 py-3 rounded-md border border-[#6a9fde] text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Products
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/fortify-logo.png"
                alt="Fortify Plans"
                width={420}
                height={160}
                className="w-full max-w-sm brightness-110 drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#1b3a6e] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-bold text-[#6a9fde]">{value}</div>
                <div className="text-sm text-[#8c9db5] mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products overview */}
      <section className="py-20 bg-[#f4f6f9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1b3a6e] mb-4">
              Insurance Products We Offer
            </h2>
            <p className="text-[#6b7f99] max-w-2xl mx-auto">
              Whether you need short-term coverage, ACA-compliant plans, or life insurance,
              our licensed brokers will find the right fit for your budget and situation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 shadow-sm border border-[#e8ecf1] hover:shadow-md hover:border-[#2d5faa] transition-all group"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-lg font-semibold text-[#1b3a6e] mb-2 group-hover:text-[#2d5faa] transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-[#6b7f99] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-block px-6 py-3 rounded-md bg-[#1b3a6e] text-white font-semibold hover:bg-[#2d5faa] transition-colors"
            >
              Learn More About Our Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Why Fortify */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1b3a6e] mb-6">
                Why Choose Fortify Plans?
              </h2>
              <p className="text-[#6b7f99] leading-relaxed mb-8">
                We started Fortify Plans because we believed consumers deserved better — better
                guidance, better transparency, and better outcomes when navigating the complex
                world of insurance. Our mission is to be the broker you can trust at every step.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-3 rounded-md bg-[#1b3a6e] text-white font-semibold hover:bg-[#2d5faa] transition-colors"
              >
                Our Story &amp; Mission
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map(({ title, description }) => (
                <div key={title} className="bg-[#eef4fb] rounded-xl p-5 border border-[#dde8f7]">
                  <div className="w-8 h-8 rounded-full bg-[#1b3a6e] flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-[#1b3a6e] mb-1">{title}</h3>
                  <p className="text-sm text-[#6b7f99] leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-gradient-to-r from-[#1b3a6e] to-[#2d5faa] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Find Your Plan?
          </h2>
          <p className="text-[#c4cfdb] mb-8 max-w-xl mx-auto">
            Speak with a licensed Fortify Plans broker today — no obligation, no pressure.
            Just expert guidance to help you make the right decision.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-md bg-white text-[#1b3a6e] font-semibold text-lg hover:bg-[#dde8f7] transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
