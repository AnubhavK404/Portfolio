import type { Metadata } from "next";
import { Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { GSAPRegistration } from "@/components/GSAPRegistration";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Anubhav Brahmania | Full Stack Developer & SaaS Founder",
  description:
    "Portfolio of Anubhav Brahmania — full stack developer, independent SaaS developer, and creator of Clinnk. 4+ years in web design, WordPress, Shopify, and custom apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${firaCode.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background font-sans text-foreground">
        <GSAPRegistration />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
