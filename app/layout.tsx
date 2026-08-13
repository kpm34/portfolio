import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const siteUrl = "https://kashcreates.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kashyap Maheshwari",
    template: "%s · Kashyap Maheshwari",
  },
  description:
    "I build AI systems that operate real businesses — live products on the App Store, Google Play, and the web.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Kashyap Maheshwari",
    title: "Kashyap Maheshwari",
    description:
      "I build AI systems that operate real businesses — live products on the App Store, Google Play, and the web.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashyap Maheshwari",
    description:
      "I build AI systems that operate real businesses — live products on the App Store, Google Play, and the web.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} font-sans antialiased bg-paper text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
