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
  title: "Premium Developer Portfolio",
  description: "A minimal, visually stunning, high-performance portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-background text-foreground selection:bg-accent selection:text-white">
        <GSAPRegistration />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
