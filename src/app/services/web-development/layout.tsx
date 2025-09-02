import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services - Custom Website Development | Traceflowtech",
  description: "Professional web development services using Next.js, React, and modern frameworks. Build responsive, fast, and secure websites that drive business growth.",
  keywords: "web development, Next.js development, React development, custom websites, responsive web design, frontend development, backend development"
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}