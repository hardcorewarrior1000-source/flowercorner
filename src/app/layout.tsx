import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LayoutClient } from "./layout-client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flower Corner Phuket — Handcrafted Bouquets & Flower Delivery",
  description:
    "Family-run flower shop in Wichit, Phuket. Custom bouquets for all occasions — birthdays, weddings, sympathy. Fresh flowers, fair prices, delivery across Phuket.",
  keywords: [
    "flower shop Phuket",
    "flower delivery Phuket",
    "bouquet Phuket",
    "flower corner Phuket",
    "custom bouquet Phuket",
    "fresh flowers Phuket",
    "Phuket florist",
    "ร้านดอกไม้ภูเก็ต",
    "จัดดอกไม้ภูเก็ต",
    "ดอกไม้ภูเก็ต",
  ],
  openGraph: {
    title: "Flower Corner Phuket",
    description: "Handcrafted floral arrangements — made with love in Phuket.",
    type: "website",
    locale: "en_TH",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
