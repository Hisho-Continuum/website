import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "hisho. | Good businesses. Bigger possibilities.",
  description:
    "We help businesses close the gap between what they are today and what they're capable of becoming, with the technology, brand, systems, and expertise to make the next stage possible.",
  keywords: [
    "hisho.",
    "growth consulting",
    "business systems",
    "technology",
    "brand strategy",
    "scale",
  ],
  authors: [{ name: "hisho." }],
  openGraph: {
    title: "hisho. | Good businesses. Bigger possibilities.",
    description:
      "We help businesses close the gap between what they are today and what they're capable of becoming.",
    siteName: "HISHO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable} scroll-smooth antialiased dark`}>
      <body className="min-h-screen bg-[#060607] text-[#FAFAFA] font-sans selection:bg-[#FF5100] selection:text-[#060607]">
        {children}
      </body>
    </html>
  );
}
