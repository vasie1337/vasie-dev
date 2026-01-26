import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum Vitae of Vasco Smith - Software Developer specializing in systems programming, kernel development, and full-stack web applications.",
  openGraph: {
    title: "CV | Vasco Smith",
    description: "Curriculum Vitae of Vasco Smith - Software Developer specializing in systems programming, kernel development, and full-stack web applications.",
    url: "https://vasie.dev/cv",
  },
  alternates: {
    canonical: "https://vasie.dev/cv",
  },
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
