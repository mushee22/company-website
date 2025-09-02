import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services - SEO, PPC, Social Media Marketing | Traceflowtech",
  description: "Data-driven digital marketing strategies to boost online presence and drive conversions. SEO, PPC advertising, social media management, and analytics services.",
  keywords: "digital marketing, SEO services, PPC advertising, social media marketing, online marketing, search engine optimization, digital advertising, marketing analytics"
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}