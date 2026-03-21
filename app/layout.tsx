import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteConfig = {
  name: "Vasco Smith",
  displayName: "Vasco Smith",
  title: "Vasco Smith | Software Developer",
  description: "Software developer specializing in systems programming, kernel development, and full-stack web applications. Expertise in Rust, C++, Go, and TypeScript with a focus on performance optimization and security research.",
  url: "https://vasie.dev",
  ogImage: "https://vasie.dev/avatar.jpg",
  keywords: [
    "Vasco Smith",
    "vasie",
    "vasie1337",
    "software developer",
    "systems programming",
    "kernel development",
    "Rust developer",
    "C++ developer",
    "Go developer",
    "TypeScript",
    "full-stack developer",
    "Windows kernel",
    "driver development",
    "security research",
    "binary obfuscation",
    "Netherlands",
    "Zutphen",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.displayName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
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
  icons: {
    icon: "/avatar.jpg",
    shortcut: "/avatar.jpg",
    apple: "/avatar.jpg",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.displayName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 400,
        height: 400,
        alt: `${siteConfig.name} - Software Developer`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@vasie1337",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  image: siteConfig.ogImage,
  jobTitle: "Software Developer",
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zutphen",
    addressCountry: "Netherlands",
  },
  sameAs: [
    "https://github.com/vasie1337",
    "https://www.linkedin.com/in/vasco-smith-463503332/",
  ],
  knowsAbout: [
    "Systems Programming",
    "Kernel Development",
    "Rust",
    "C++",
    "Go",
    "TypeScript",
    "React",
    "Next.js",
    "Windows Kernel",
    "Driver Development",
    "Security Research",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
