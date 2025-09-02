import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Traceflowtech - Web Development, Mobile Apps & Cloud Solutions Company",
  description: "Leading IT company providing custom web development, mobile app development, cloud solutions, digital marketing, and AI integration services. Transform your business with cutting-edge technology solutions.",
  keywords: "web development, mobile app development, cloud solutions, digital marketing, AI integration, IT company, software development, Next.js, React, technology solutions",
  authors: [{ name: "Traceflowtech" }],
  openGraph: {
    title: "Traceflowtech - Digital Solutions for Modern Business",
    description: "Leading IT company providing custom web development, mobile apps, cloud solutions, and digital marketing services.",
    url: "https://traceflowtech.com",
    siteName: "Traceflowtech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Traceflowtech - Digital Solutions for Modern Business",
    description: "Leading IT company providing custom web development, mobile apps, cloud solutions, and digital marketing services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://traceflowtech.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Traceflowtech",
              "description": "Leading IT company providing custom web development, mobile app development, cloud solutions, digital marketing, and AI integration services.",
              "url": "https://traceflowtech.com",
              "logo": "https://traceflowtech.com/logo.png",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@traceflowtech.com"
              },
              "sameAs": [],
              "services": [
                "Web Development",
                "Mobile App Development", 
                "Cloud Solutions",
                "Digital Marketing",
                "AI Integration"
              ]
            })
          }}
        />
      </head>
      <body className={`${poppins.className} bg-black text-white`}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
