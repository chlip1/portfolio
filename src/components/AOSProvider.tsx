"use client";
import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSProviderProps {
  children: ReactNode;
}

export default function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({ duration: 1000, once: true });
    }
  }, []);


  return <>{children}</>;
}