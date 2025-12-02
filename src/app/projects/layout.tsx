import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Beyond Interior Design Studio",
  description:
    "Explore a wide range of interior design projects including residential, corporate, commercial, and hospitality spaces.",
  keywords: [
    "interior design projects",
    "design portfolio",
    "architecture projects",
    "residential interiors",
    "commercial interiors",
    "luxury interior design"
  ],
  openGraph: {
    title: "Projects | Beyond Interior Design Studio",
    description:
      "Browse our curated portfolio of modern, luxury, and functional interior design projects.",
    url: "https://yourwebsite.com/projects",
    type: "website",
    images: [
      {
        url: "/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Design Projects Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Beyond Interior Design Studio",
    description:
      "Explore our collection of luxury and modern interior design works.",
    images: ["/og-projects.jpg"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="py-16 md:py-24">{children}</div>;
}
