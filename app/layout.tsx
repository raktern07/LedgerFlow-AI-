import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LedgerFlow AI — WhatsApp to Tally accounting automation",
  description:
    "Send invoices, PDFs, or images on WhatsApp. LedgerFlow AI reads them and creates accurate accounting entries directly in Tally—then generates exportable PDFs and reports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

