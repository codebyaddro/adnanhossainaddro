import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL('https://adnanhaddro.me'),

  title: 'Adnan Hossain Addro | Software Engineer & AI Developer',

  description:
    'Portfolio of Adnan Hossain Addro — software engineer specializing in Next.js, AI agents, SaaS development, automation, and scalable web applications.',

  keywords: [
    'Adnan Hossain Addro',
    'Software Engineer',
    'Next.js Developer',
    'AI Developer',
    'FDE',
    'SaaS Developer',
    'Portfolio',
    'Bangladesh Developer',
    'Adnan Addro',
    'adnan addro',
    'addro'
  ],

  authors: [{ name: 'Adnan Hossain Addro' }],
  creator: 'Adnan Hossain Addro',

  alternates: {
    canonical: 'https://adnanhaddro.me',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    url: 'https://adnanhaddro.me',
    title: 'Adnan Hossain Addro | Software Engineer & AI Developer',
    description:
      'Next.js, AI agents, SaaS products, automation, and scalable software engineering.',
    siteName: 'Adnan Hossain Addro Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Adnan Hossain Addro Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Adnan Hossain Addro | Software Engineer & AI Developer',
    description:
      'Next.js, AI agents, SaaS products, automation, and scalable software engineering.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
