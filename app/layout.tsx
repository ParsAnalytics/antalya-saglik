// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'AntalyaSağlık — Antalya Sağlık, Evde Bakım ve Tıp Haberleri',
    template: '%s | AntalyaSağlık',
  },
  description:
    'Antalya\'nın en kapsamlı sağlık haber portalı. Evde bakım, hastane haberleri, Akdeniz Üniversitesi tıbbi gelişmeler ve yerel sağlık haberlerini takip edin.',
  keywords: [
    'Antalya sağlık haberleri',
    'evde bakım Antalya',
    'Akdeniz Üniversitesi Hastanesi',
    'Antalya Eğitim Araştırma Hastanesi',
    'tıp haberleri Antalya',
    'sağlık portalı',
  ],
  authors: [{ name: 'AntalyaSağlık' }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'AntalyaSağlık',
    title: 'AntalyaSağlık — Antalya Sağlık Haber Portalı',
    description: 'Antalya\'nın sağlık, evde bakım ve tıp haberleri için güvenilir kaynak.',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#070c18" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: 'var(--navbar-height)' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
