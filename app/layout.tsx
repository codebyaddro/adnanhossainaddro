import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adnanhaddro.me"),

  title: "Adnan Hossain Addro | Software Engineer & AI Developer",

  description:
    "Portfolio of Adnan Hossain Addro — software engineer specializing in Next.js, AI agents, SaaS development, automation, and scalable web applications.",

  keywords: [
    "Adnan Hossain Addro",
    "Software Engineer",
    "Next.js Developer",
    "AI Developer",
    "FDE",
    "SaaS Developer",
    "Portfolio",
    "Bangladesh Developer",
    "Adnan Addro",
    "adnan addro",
    "addro",
  ],

  authors: [
    {
      name: "Adnan Hossain Addro",
      url: "https://adnanhaddro.me",
    },
  ],

  creator: "Adnan Hossain Addro",

  alternates: {
    canonical: "https://adnanhaddro.me",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://adnanhaddro.me",
    title: "Adnan Hossain Addro | Software Engineer & AI Developer",
    description:
      "Next.js, AI agents, SaaS products, automation, and scalable software engineering.",
    siteName: "Adnan Hossain Addro Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adnan Hossain Addro Portfolio",
      },
      {
        url: "/addro.png",
        width: 1200,
        height: 630,
        alt: "Adnan Hossain Addro",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Adnan Hossain Addro | Software Engineer & AI Developer",
    description:
      "Next.js, AI agents, SaaS products, automation, and scalable software engineering.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://adnanhaddro.me/#person",
  name: "Adnan Hossain Addro",
  alternateName: "Addro",
  url: "https://adnanhaddro.me/",
  image: "https://adnanhaddro.me/og-image.png",
  jobTitle: "Software Engineer",
  description:
    "Software engineer, entrepreneur and founder specializing in Next.js, AI agents, SaaS development, automation, and scalable web applications.",
  sameAs: [
    "https://www.linkedin.com/in/adnan-hossain-addro/",
    "https://www.facebook.com/addro23",
    "https://www.instagram.com/adnanh.addro",
    "https://x.com/addro23",
    "https://github.com/codebyaddro",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        {children}

        <Footer />
      </body>
    </html>
  );
}