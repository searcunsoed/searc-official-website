import type { Metadata } from "next";
import { Funnel_Display, Figtree } from "next/font/google";
import './globals.css';
import Navbar from "./components/Navbar";

const funnelDisplay = Funnel_Display({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SEARC UNSOED",
  description: "Pusat Riset Kebijakan Strategis Kawasan Asia Tenggara Universitas Jenderal Soedirman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelDisplay.variable} ${figtree.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
