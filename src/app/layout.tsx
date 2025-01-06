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
    <html lang="en">
    <head>
      <title>Łukasz Chlipała - Portfolio</title>
      <meta name="description" content="My amazing Next.js application"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" href="/favicon.ico"/>
    </head>
    <body className="bg-white text-gray-900 dark:text-gray-100">
    <Toaster
      position="bottom-right"
    />
    <Navbar/>
    <AOSProvider>
      {children}
    </AOSProvider>
    <Footer/>
    </body>
    </html>
  );
}
