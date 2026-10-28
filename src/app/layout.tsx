import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const sans = Geist({ subsets: ["latin", "latin-ext"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin", "latin-ext"], variable: "--font-mono" });
const display = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chlipala.dev"),
  title: "Łukasz Chlipała · Software Engineer",
  description:
    "Software engineer in Gdańsk building serverless backends on AWS and full-stack TypeScript products. Software Engineer II at ADTRAN, building JoinBee.",
  authors: [{ name: "Łukasz Chlipała" }],
  openGraph: {
    title: "Łukasz Chlipała · Software Engineer",
    description: "Serverless backends on AWS and full-stack TypeScript products.",
    url: "https://chlipala.dev",
    type: "website",
    images: ["/avatar.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${display.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
