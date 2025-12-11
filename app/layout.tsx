import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Portfolio - Next.js & Tailwind CSS',
  description: 'A modern portfolio showcasing my work as a full-stack developer',
  keywords: ['portfolio', 'web development', 'next.js', 'react', 'tailwind'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
