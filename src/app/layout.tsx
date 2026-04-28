import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fortify Plans | Insurance You Can Trust",
  description:
    "Fortify Plans is a trusted health and life insurance brokerage guiding consumers through short-term medical, supplemental, ACA, and life insurance options.",
  metadataBase: new URL("https://fortify-plans.com"),
  openGraph: {
    title: "Fortify Plans | Insurance You Can Trust",
    description:
      "Expert guidance for short-term medical, supplemental, ACA, and life insurance.",
    url: "https://fortify-plans.com",
    siteName: "Fortify Plans",
    images: [{ url: "/fortify-logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
