import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Fortify Plans",
  description:
    "Learn about Fortify Plans — our mission, values, and commitment to delivering trusted, compliant, consumer-focused insurance solutions.",
};

const values = [
  {
    icon: "🤝",
    title: "Trust First",
    description:
      "Every recommendation we make is driven by what's best for the client, never by commission pressure. We earn trust through honesty and transparency.",
  },
  {
    icon: "⚖️",
    title: "Compliance Always",
    description:
      "We hold ourselves to the highest regulatory standards — state licensure, ethical sales practices, and ongoing compliance training for every agent.",
  },
  {
    icon: "🎯",
    title: "Consumer Focused",
    description:
      "Insurance can be confusing. We simplify it. Our process is built around the consumer's experience — from first call to enrollment and beyond.",
  },
  {
    icon: "📚",
    title: "Continuous Learning",
    description:
      "Products evolve. Regulations change. We invest in ongoing agent education so our team always has the knowledge to serve you well.",
  },
  {
    icon: "🌱",
    title: "Culture of Excellence",
    description:
      "We believe great outcomes start with great people. We build a culture where agents are supported, developed, and proud of the work they do.",
  },
  {
    icon: "🔒",
    title: "Your Privacy Matters",
    description:
      "Your personal information is handled with care. We follow strict data privacy practices and never sell your data to third parties.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0d1f42] to-[#1b3a6e] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Fortify Plans</h1>
          <p className="text-[#c4cfdb] text-lg max-w-2xl mx-auto">
            A brokerage built on trust, compliance, and genuine care for the people we serve.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-[#2d5faa]">
                Our Mission
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#1b3a6e] mb-6">
                Insurance You Can Trust, From People Who Care
              </h2>
              <p className="text-[#6b7f99] leading-relaxed mb-4">
                Fortify Plans was founded with a simple but powerful belief: consumers deserve an
                insurance brokerage that puts their needs above everything else. Too often, people
                end up in the wrong plan — not because they made a bad choice, but because they
                weren&apos;t guided well.
              </p>
              <p className="text-[#6b7f99] leading-relaxed mb-4">
                We set out to change that. Our mission is to deliver trusted, compliant, and
                consumer‑focused health and life insurance solutions by expertly guiding individuals
                and families through short-term medical, supplemental, ACA, and life insurance options.
              </p>
              <p className="text-[#6b7f99] leading-relaxed">
                That mission isn&apos;t just words on a wall — it shapes every hire we make, every
                training we deliver, and every conversation our agents have with clients.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#eef4fb] to-[#dde8f7] rounded-2xl p-8 border border-[#dde8f7]">
              <blockquote className="text-xl font-semibold text-[#1b3a6e] leading-relaxed italic">
                &ldquo;Our goal is simple: be the broker you wish you had — knowledgeable, honest,
                and genuinely invested in your long-term wellbeing.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-[#6b7f99]">— Fortify Plans Leadership Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f4f6f9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1b3a6e] mb-4">Our Core Values</h2>
            <p className="text-[#6b7f99] max-w-2xl mx-auto">
              These values are the foundation of how we hire, train, and operate every single day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 border border-[#e8ecf1] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-lg font-semibold text-[#1b3a6e] mb-2">{title}</h3>
                <p className="text-sm text-[#6b7f99] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent development */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0d1f42] to-[#1b3a6e] rounded-2xl p-10 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Investing in Our Agents</h2>
                <p className="text-[#c4cfdb] leading-relaxed mb-4">
                  The quality of your experience with Fortify Plans depends directly on the quality
                  of our agents. That&apos;s why we invest more in training, development, and culture
                  than any other cost in our business.
                </p>
                <p className="text-[#c4cfdb] leading-relaxed">
                  Every Fortify agent completes rigorous product training, compliance certification,
                  and ongoing education. We don&apos;t just hire licensed agents — we build
                  insurance professionals who are proud of the guidance they provide.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "Rigorous", label: "Product Training" },
                  { value: "Ongoing", label: "Compliance Cert." },
                  { value: "Ethical", label: "Sales Standards" },
                  { value: "Supported", label: "Agent Culture" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-xl font-bold text-[#6a9fde]">{value}</div>
                    <div className="text-xs text-[#8c9db5] mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f4f6f9] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1b3a6e] mb-4">
            Ready to Experience the Fortify Difference?
          </h2>
          <p className="text-[#6b7f99] mb-8 max-w-xl mx-auto">
            Connect with a licensed broker today and see what consumer-first insurance guidance
            really looks like.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-md bg-[#1b3a6e] text-white font-semibold text-lg hover:bg-[#2d5faa] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
