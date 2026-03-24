import type { Metadata } from "next";
import { Source_Serif_4, DM_Sans } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fire Point Consulting | Fire Code Compliance & Consulting",
  description:
    "Independent fire protection consulting for developers, architects, and fire departments. Code consulting, third-party design review, and NFPA 241 plans — 12+ years of expertise.",
  openGraph: {
    title: "Fire Point Consulting | Fire Code Compliance & Consulting",
    description:
      "Independent fire protection consulting for developers, architects, and fire departments. Code consulting, third-party design review, and NFPA 241 plans.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${dmSans.variable}`}
    >
      <body className="font-body text-navy bg-sand antialiased">
        {children}
      </body>
    </html>
  );
}
