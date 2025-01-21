"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from "@/components/AOSProvider";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
    <head>
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content="Portfolio Łukasza Chlipały – Fullstack Developera specjalizującego się w chmurze oraz nowoczesnych technologiach webowych, takich jak React, Next.js i AWS."
      />
      <meta
        name="keywords"
        content="Łukasz Chlipała, fullstack developer, portfolio, cloud, AWS, React, Next.js, TypeScript, web development, programista chmura"
      />
      <meta name="author" content="Łukasz Chlipała" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      <link rel="icon" href="/favicon.ico" />

      <title>Łukasz Chlipała - Portfolio Fullstack Developera</title>
    </head>
    <body className="bg-white text-gray-900">
    <Toaster position="bottom-right" />
    <Navbar />
    <AOSProvider>{children}</AOSProvider>
    <Footer />
    </body>
    </html>
  );
}
