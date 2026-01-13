import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    default: 'Md Mahbub E Waduzzaman | Web & Software Developer',
    template: '%s | Md Mahbub E Waduzzaman',
  },
  description:
    'Md Mahbub E Waduzzaman is a Web & Software Developer based in Canada, specializing in Next.js, React, MERN Stack, WordPress, and scalable web applications.',
  keywords: [
    'Md Mahbub E Waduzzaman',
    'Mahbub Waduzzaman',
    'Web Developer',
    'Software Developer',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'MERN Stack Developer',
    'WordPress Developer',
    'JavaScript',
    'TypeScript',
    'Web Developer Canada',
    'Software Developer Toronto',
    'Developer Portfolio',
  ],
  authors: [{ name: 'Md Mahbub E Waduzzaman' }],
  creator: 'Md Mahbub E Waduzzaman',
  publisher: 'Md Mahbub E Waduzzaman',

  metadataBase: new URL('https://waduzzaman.com'), 
  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    title: 'Md Mahbub E Waduzzaman | Web & Software Developer',
    description:
      'Explore real-world web and software projects built with Next.js, React, MERN Stack, and WordPress.',
    url: 'https://waduzzaman.com',
    siteName: 'Mahbub Waduzzaman Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mahbub Waduzzaman Developer Portfolio',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Md Mahbub E Waduzzaman | Web & Software Developer',
    description:
      'Web & Software Developer specializing in modern, scalable applications.',
    images: ['/og-image.png'],
  },

  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
