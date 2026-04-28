import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance Products | Fortify Plans",
  description:
    "Explore short-term medical, supplemental, ACA/Marketplace, and life insurance options offered by Fortify Plans.",
};

const products = [
  {
    id: "stm",
    icon: "🏥",
    title: "Short-Term Medical",
    tagline: "Immediate, flexible coverage for life's in-between moments.",
    description:
      "Short-term medical insurance is designed for individuals who need temporary health coverage — between jobs, waiting for employer benefits to begin, or during other coverage gaps. Plans are typically less expensive than major medical and can be activated quickly.",
    benefits: [
      "Coverage can begin as soon as the next day",
      "Flexible terms from 30 days to 12 months",
      "Lower premiums than ACA plans",
      "Wide network of doctors and hospitals",
      "Optional add-ons: dental, vision, prescription",
    ],
    ideal: "Individuals in coverage gaps, early retirees, recent graduates",
    disclaimer:
      "Short-term plans are not ACA-compliant and do not cover pre-existing conditions. Not available in all states.",
  },
  {
    id: "supplemental",
    icon: "➕",
    title: "Supplemental Insurance",
    tagline: "Fill the gaps your primary plan leaves behind.",
    description:
      "Even with good health insurance, out-of-pocket costs can add up fast. Supplemental insurance pays cash benefits directly to you — helping cover deductibles, copays, lost income, or everyday expenses while you recover.",
    benefits: [
      "Critical illness coverage (cancer, heart attack, stroke)",
      "Accident insurance for unexpected injuries",
      "Hospital indemnity for daily confinement costs",
      "Disability income protection",
      "Benefits paid directly to you, not the provider",
    ],
    ideal: "Anyone with a high-deductible plan, self-employed individuals, families",
    disclaimer: null,
  },
  {
    id: "aca",
    icon: "📋",
    title: "ACA / Marketplace Plans",
    tagline: "Comprehensive, compliant coverage — often with significant subsidies.",
    description:
      "Affordable Care Act (ACA) plans offered through the Health Insurance Marketplace provide comprehensive, federally regulated coverage. Depending on your income, you may qualify for substantial premium tax credits that dramatically lower your monthly cost.",
    benefits: [
      "Covers pre-existing conditions",
      "No annual or lifetime benefit limits",
      "Essential health benefits required by law",
      "Premium tax credits available based on income",
      "Open enrollment and Special Enrollment Periods",
    ],
    ideal: "Individuals and families without employer coverage, self-employed, those qualifying for subsidies",
    disclaimer:
      "Subsidy eligibility is based on household income and size. Enrollment periods apply.",
  },
  {
    id: "life",
    icon: "🛡️",
    title: "Life Insurance",
    tagline: "Protect the people who depend on you most.",
    description:
      "Life insurance ensures your family is financially protected if the unexpected happens. Whether you need affordable term coverage, permanent whole life, or a final expense policy, we help you find the right fit at the right price.",
    benefits: [
      "Term life: affordable protection for 10–30 years",
      "Whole life: permanent coverage with cash value",
      "Final expense: simplified issue for seniors",
      "No medical exam options available",
      "Competitive rates from top-rated carriers",
    ],
    ideal: "Parents, homeowners, business owners, anyone with dependents or debt",
    disclaimer: null,
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0d1f42] to-[#1b3a6e] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Insurance Products</h1>
          <p className="text-[#c4cfdb] text-lg max-w-2xl mx-auto">
            Four coverage categories. One trusted brokerage. We find the plan that fits your
            life, budget, and goals.
          </p>
        </div>
      </section>

      {/* Product sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {products.map(({ id, icon, title, tagline, description, benefits, ideal, disclaimer }, i) => (
          <div
            key={id}
            id={id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Content */}
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="text-5xl mb-4">{icon}</div>
              <h2 className="text-3xl font-bold text-[#1b3a6e] mb-2">{title}</h2>
              <p className="text-[#2d5faa] font-medium mb-4">{tagline}</p>
              <p className="text-[#6b7f99] leading-relaxed mb-6">{description}</p>
              <p className="text-sm text-[#8c9db5] mb-6">
                <span className="font-semibold text-[#1b3a6e]">Ideal for:</span> {ideal}
              </p>
              {disclaimer && (
                <p className="text-xs text-[#8c9db5] italic bg-[#f4f6f9] rounded-lg p-3 border border-[#e8ecf1]">
                  {disclaimer}
                </p>
              )}
            </div>

            {/* Benefits */}
            <div className={`bg-[#eef4fb] rounded-2xl p-6 border border-[#dde8f7] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <h3 className="text-lg font-semibold text-[#1b3a6e] mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#1b3a6e] flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm text-[#1a1a2e]">{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-block w-full text-center px-5 py-3 rounded-md bg-[#1b3a6e] text-white font-semibold hover:bg-[#2d5faa] transition-colors"
              >
                Get a Quote for {title}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#1b3a6e] to-[#2d5faa] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Plan Is Right for You?</h2>
          <p className="text-[#c4cfdb] mb-8 max-w-xl mx-auto">
            Our licensed brokers will walk you through every option at no cost to you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-md bg-white text-[#1b3a6e] font-semibold text-lg hover:bg-[#dde8f7] transition-colors"
          >
            Talk to a Broker Today
          </Link>
        </div>
      </section>
    </>
  );
}
