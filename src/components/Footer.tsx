import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0d1f42] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/fortify-logo.png"
              alt="Fortify Plans"
              width={160}
              height={46}
              className="h-10 w-auto brightness-200"
            />
            <p className="mt-4 text-sm text-[#8c9db5] leading-relaxed">
              Insurance You Can Trust. Guiding consumers to the right health and
              life coverage with expertise and integrity.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-[#c4cfdb] uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              {[
                "Short-Term Medical",
                "Supplemental Insurance",
                "ACA / Marketplace",
                "Life Insurance",
              ].map((p) => (
                <li key={p}>
                  <Link
                    href="/products"
                    className="text-sm text-[#8c9db5] hover:text-white transition-colors"
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[#c4cfdb] uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/contact", label: "Get a Quote" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-[#8c9db5] hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#c4cfdb] uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-[#8c9db5]">
              <li>
                <a href="mailto:info@fortify-plans.com" className="hover:text-white transition-colors">
                  info@fortify-plans.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[#1e4080] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6b7f99]">
            © {new Date().getFullYear()} Fortify Plans. All rights reserved.
          </p>
          <p className="text-xs text-[#6b7f99] text-center">
            Fortify Plans is a licensed insurance brokerage. Products and availability vary by state.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-[#6b7f99] hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-[#6b7f99] hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
