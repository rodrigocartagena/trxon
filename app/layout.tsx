import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-inter" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-plex-mono" });

export const metadata: Metadata = {
  title: "TrX - Autonomous Navigation",
  description: "Autonomous navigation for the world the road doesn't reach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable} scroll-smooth`}>
      <body className="bg-bg-deep text-text-body font-inter antialiased min-h-screen flex flex-col selection:bg-accent selection:text-bg-deep">
        <Nav />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
