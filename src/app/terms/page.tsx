import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Fortify Plans",
  description: "Fortify Plans Terms of Use — the terms and conditions governing use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0d1f42] to-[#1b3a6e] text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-3">Terms of Use</h1>
          <p className="text-[#c4cfdb]">Last updated: April 28, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-[#1a1a2e]">

            <div>
              <h2 className="text-2xl font-bold text-[#1b3a6e] mb-3">1. Acceptance of Terms</h2>
              <p className="text-[#6b7f99] leading-relaxed">
                By accessing or using the Fortify Plans website at fortify-plans.com
                (&ldquo;Site&rdquo;), you agree to be bound by these Terms of Use and our Privacy
                Policy. If you do not agree to these terms, please do not use this Site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1b3a6e] mb-3">2. About Fortify Plans</h2>
              <p className="text-[#6b7f99] leading-relaxed">
                Fortify Plans is a licensed insurance brokerage that connects consumers with health
                and life insurance products. We are not an insurance carrier. Products, pricing, and
                availability vary by state and are subject to carrier underwriting guidelines and
                applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1b3a6e] mb-3">3. Not Insurance Advice</h2>
              <p className="text-[#6b7f99] leading-relaxed">
                The content on this Site is provided for general informational purposes only and does
                not constitute insurance, legal, financial, or tax advice. Coverage descriptions are
                summaries and do not replace the terms of any actual insurance policy. You should
                review all policy documents carefully before purchasing any insurance product.
                Fortify Plans assumes no liability for decisions made based on information found
                on this Site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1b3a6e] mb-3">4. Use of the Site</h2>
              <p className="text-[#6b7f99] leading-relaxed mb-3">You agree to use this Site only for lawful purposes. You may not:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#6b7f99]">
                <li>Use the Site in any way that violates applicable federal, state, or local laws or regulations</li>
                <li>Submit false, misleading, or fraudulent information through any form or inquiry</li>
                <li>Attempt to gain unauthorized access to any portion of the Site or its related systems</li>
                <li>Use automated tools, bots, or scrapers to access or collect data from the Site</li>
                <li>Transmit any harmful, offensive, or disruptive content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1b3a6e] mb-3">5. Intellectual Property</h2>
              <p className="text-[#6b7f99] leading-relaxed">
                All content on this Site — including text, graphics, logos, and images — is the
                property of Fortify Plans or its licensors and is protected by applicable copyright
                and trademark laws. You may not reproduce, distribute, or create derivative works
                from any Site content without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1b3a6e] mb-3">6. Third-Party Links</h2>
              <p className="text-[#6b7f99] leading-relaxed">
                This Site may contain links to third-party websites for your convenience. Fortify
                Plans does not control, endorse, or assume responsibility for the content or
                practices of any third-party sites. We encourage you to review the privacy policies
                and terms of any site you visit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1b3a6e] mb-3">7. Disclaimer of Warranties</h2>
              <p className="text-[#6b7f99] leading-relaxed">
                This Site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties
                of any kind, express or implied. Fortify Plans does not warrant that the Site will
                be uninterrupted, error-free, or free of viruses or other harmful components. We
                reserve the right to modify or discontinue the Site at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1b3a6e] mb-3">8. Limitation of Liability</h2>
              <p className="text-[#6b7f99] leading-relaxed">
                To the fullest extent permitted by law, Fortify Plans and its officers, agents, and
                employees shall not be liable for any indirect, incidental, special, or consequential
                damages arising out of or in connection with your use of this Site or the information
                contained herein, even if advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1b3a6e] mb-3">9. Governing Law</h2>
              <p className="text-[#6b7f99] leading-relaxed">
                These Terms of Use shall be governed by and construed in accordance with the laws
                of the United States and the state in which Fortify Plans is domiciled, without
                regard to conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1b3a6e] mb-3">10. Changes to These Terms</h2>
              <p className="text-[#6b7f99] leading-relaxed">
                We reserve the right to update these Terms of Use at any time. The date at the top
                of this page reflects the most recent revision. Your continued use of the Site after
                changes are posted constitutes your acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1b3a6e] mb-3">11. Contact Us</h2>
              <p className="text-[#6b7f99] leading-relaxed">
                Questions about these Terms of Use may be directed to:
              </p>
              <div className="mt-3 text-[#6b7f99]">
                <p className="font-medium text-[#1a1a2e]">Fortify Plans</p>
                <p>
                  <a href="mailto:info@fortify-plans.com" className="text-[#2d5faa] hover:underline">
                    info@fortify-plans.com
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
