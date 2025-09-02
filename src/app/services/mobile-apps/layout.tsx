import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Services - iOS & Android Apps | Traceflowtech",
  description: "Expert mobile app development for iOS and Android. Cross-platform and native mobile applications with exceptional user experience and performance.",
  keywords: "mobile app development, iOS app development, Android app development, React Native, Flutter, cross-platform apps, native mobile apps"
};

export default function MobileAppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}