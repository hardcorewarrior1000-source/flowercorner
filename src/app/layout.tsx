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
    images: [
      {
        url: "https://flowercorner.zelve.xyz/images/12.jpg",
        width: 1200,
        height: 900,
        alt: "Flower Corner Phuket — Fresh flower arrangements",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌸</text></svg>",
  },
  other: {
    "google-site-verification": "google4e4221cd9cff4799.html",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://flowercorner.zelve.xyz/#business",
      name: "Flower Corner Phuket",
      description:
        "Family-run flower shop in Wichit, Phuket. Custom bouquets for all occasions — birthdays, weddings, sympathy. Fresh flowers, fair prices, delivery across Phuket.",
      url: "https://flowercorner.zelve.xyz",
      telephone: "+66950514071",
      image: "https://flowercorner.zelve.xyz/images/12.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Wichit, Mueang Phuket District",
        addressLocality: "Phuket",
        addressRegion: "Phuket",
        addressCountry: "TH",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 7.8891078,
        longitude: 98.3631893,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "20:00",
      },
      sameAs: [
        "https://www.instagram.com/flowercorner.hkt/",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 5,
        bestRating: 5,
        ratingCount: 3,
        reviewCount: 3,
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Alex Koe" },
          datePublished: "2025-01-15",
          reviewBody:
            "Best florist here on Phuket, quality designs, affordable. Can also order COD, waited me like 1 hr because I was late without any extra charges, the best place ever. 100% recommended.",
          reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
          itemReviewed: { "@type": "LocalBusiness", "@id": "https://flowercorner.zelve.xyz/#business" },
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Benyathip" },
          datePublished: "2025-03-22",
          reviewBody:
            "ประทับใจร้านนี้มากค่ะ เจ้าของร้านทั้งพี่ผู้ชายและพี่ผู้หญิงใจดี เป็นกันเอง และให้คำแนะนำดีมาก ดอกไม้สวย สด คุณภาพดี และจัดออกมาได้สวยเกินความคาดหวัง คุ้มค่ามาก",
          reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
          itemReviewed: { "@type": "LocalBusiness", "@id": "https://flowercorner.zelve.xyz/#business" },
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Мария" },
          datePublished: "2025-06-10",
          reviewBody:
            "The bouquet is superb, and the price is like a gift; for 700 baht they created a masterpiece.",
          reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
          itemReviewed: { "@type": "LocalBusiness", "@id": "https://flowercorner.zelve.xyz/#business" },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://flowercorner.zelve.xyz/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://flowercorner.zelve.xyz/" },
        { "@type": "ListItem", position: 2, name: "Gallery", item: "https://flowercorner.zelve.xyz/gallery" },
        { "@type": "ListItem", position: 3, name: "Custom Order", item: "https://flowercorner.zelve.xyz/order" },
        { "@type": "ListItem", position: 4, name: "About", item: "https://flowercorner.zelve.xyz/about" },
        { "@type": "ListItem", position: 5, name: "Contact", item: "https://flowercorner.zelve.xyz/contact" },
        { "@type": "ListItem", position: 6, name: "Delivery", item: "https://flowercorner.zelve.xyz/delivery" },
        { "@type": "ListItem", position: 7, name: "Blog", item: "https://flowercorner.zelve.xyz/blog" },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
