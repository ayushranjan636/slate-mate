import type { Metadata } from "next";
import { Suspense } from "react";
import FeaturesPageContent from "./_components/FeaturesPageContent";

export const metadata: Metadata = {
  title: "Features | SlateMate",
  description: "Explore the powerful features of SlateMate's AI-powered learning platform.",
  keywords: [
    "SlateMate Features",
    "Parental Control App",
    "AI School Management",
    "Student Monitoring Tools",
    "Digital Safety for Schools"
  ],
  openGraph: {
    title: "Features | SlateMate",
    description: "Explore the powerful features of SlateMate's AI-powered learning platform.",
    url: "https://www.slatemate.in/features",
    type: "website",
    siteName: "SlateMate",
    images: [
      {
        url: "https://www.slatemate.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SlateMate Features Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SlateMate Features",
    description: "AI-powered school management and parental control in one platform.",
    images: ["https://www.slatemate.in/twitter-image.png"],
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FeaturesPageContent />
    </Suspense>
  );
}
