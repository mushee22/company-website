import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Solutions & DevOps Services - AWS, Azure, Google Cloud | Traceflowtech",
  description: "Enterprise cloud infrastructure and DevOps solutions. Scalable cloud migration, deployment automation, and 24/7 monitoring on AWS, Azure, and Google Cloud.",
  keywords: "cloud solutions, DevOps, AWS, Azure, Google Cloud, cloud migration, infrastructure management, scalable cloud, enterprise cloud services"
};

export default function CloudSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}