import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Integration Services - Machine Learning & Automation | Traceflowtech",
  description: "Smart AI integration and automation solutions. Custom machine learning models, process automation, and AI-powered features to enhance business operations.",
  keywords: "AI integration, machine learning, artificial intelligence, automation, AI development, smart automation, ML models, AI solutions, business automation"
};

export default function AIIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}