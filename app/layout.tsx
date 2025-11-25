import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "./utils/lenis"; // We'll create this utility wrapper

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mountain Mixology | Premium Craft Cocktail Catering",
  description: "Elevated cocktails and memorable events in the heart of the Canadian Rockies. Serving Banff, Canmore, Calgary, and Kananaskis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable} antialiased scroll-smooth`}>
      <body className="bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent-gold)] selection:text-black relative">
        <div className="fixed inset-0 z-[-1]">
          <img 
            src="/main-bg.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-[#050A14]/80 mix-blend-multiply" />
        </div>
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
