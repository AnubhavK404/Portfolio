import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { GSAPRegistration } from "@/components/GSAPRegistration";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Anubhav Kumar",
  description: "Portfolio embedded with gsap and framermotion & minimalism.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="bg-background text-foreground selection:bg-accent selection:text-white">
        <GSAPRegistration />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
