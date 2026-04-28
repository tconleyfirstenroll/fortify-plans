"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e8ecf1] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/fortify-logo.png"
              alt="Fortify Plans"
              width={180}
              height={52}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  pathname === href
                    ? "text-[#1b3a6e]"
                    : "text-[#6b7f99] hover:text-[#1b3a6e]"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 rounded-md bg-[#1b3a6e] text-white text-sm font-semibold hover:bg-[#2d5faa] transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-[#6b7f99] hover:text-[#1b3a6e]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#e8ecf1] bg-white">
          <nav className="px-4 pt-2 pb-4 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === href
                    ? "bg-[#eef4fb] text-[#1b3a6e]"
                    : "text-[#6b7f99] hover:bg-[#f4f6f9] hover:text-[#1b3a6e]"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2 rounded-md bg-[#1b3a6e] text-white text-sm font-semibold text-center hover:bg-[#2d5faa] transition-colors"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
