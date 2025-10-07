import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import CookieConsent from "./components/CookieConsent";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Njere - School Management Software",
  description:
    "Our school management software provides end-to-end monitoring capabilities, granting parents, administrators, and teachers a comprehensive view of students’ academic and social activities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/njere_logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${montserrat.variable} antialiased text-black font-sans`}
      >
        <Navbar />
        {children}

        <CookieConsent />
      </body>
    </html>
  );
}
