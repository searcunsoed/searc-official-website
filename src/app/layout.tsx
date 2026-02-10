import type { Metadata } from "next";
import { Sora, Figtree } from "next/font/google";
import './globals.css';
import Navbar from "./components/Navbar";
import { cookies } from "next/headers";

const sora = Sora({
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = cookieStore.get('lang')?.value || 'id';

  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${figtree.variable} antialiased`}
      >
        <Navbar lang={lang} />
        {children}
      </body>
    </html>
  );
}
