import type { Metadata, Viewport } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: 'Beyond Interior Design Studio',
    template: '%s | Beyond Interior Design Studio',
  },

  description:
    'A premium interior design and architecture studio showcasing bespoke luxury spaces, modern concepts, and high-end craftsmanship.',

  // ⚠️ Yahan pehle viewport tha, ab hata diya gaya hai

  keywords: [
    'interior design',
    'architecture',
    'luxury interiors',
    'modern interior design',
    'residential interiors',
    'commercial interior design',
    'home decor ideas',
    'premium interior studio',
    'interior designers',
    'turnkey interior solutions',
  ],

  metadataBase: new URL('https://yourwebsite.com'),

  openGraph: {
    title: 'Beyond Interior Design Studio',
    description:
      'Explore modern, timeless, and luxury interior design projects crafted with precision and creativity.',
    url: 'https://yourwebsite.com',
    siteName: 'Beyond Interior Design Studio',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beyond Interior Design Showcase',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Beyond Interior Design Studio',
    description:
      'Premium interior design & architecture studio crafting timeless luxury spaces.',
    images: ['/og-image.jpg'],
  },

  alternates: {
    canonical: 'https://yourwebsite.com',
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  robots: {
    index: true,
    follow: true,
  },
};

// ⭐ Next.js 15 style viewport (alag export)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N94ZQK7T');
          `}
        </Script>
        {/* End Google Tag Manager */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={cn('font-body antialiased')}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N94ZQK7T"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        <Toaster />
      </body>
    </html>
  );
}