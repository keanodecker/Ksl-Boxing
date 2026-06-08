import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { Toaster } from '@/components/ui/toaster';

const SITE_URL = 'https://ksl-boxing.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'KSL Boxing Lahr – Boxverein in Lahr & Offenburg',
    template: '%s | KSL Boxing Lahr',
  },
  description:
    'KSL Boxing Lahr – Boxverein für die Region Lahr und Offenburg. Boxtraining für Anfänger, Fortgeschrittene und Wettkämpfer: Fitnessboxen, Frauenboxen, Kinder- und Jugendtraining im Ortenaukreis.',
  keywords: [
    'Boxen Lahr',
    'Boxverein Lahr',
    'Boxclub Lahr',
    'Boxen Offenburg',
    'Boxtraining Lahr',
    'Boxtraining Offenburg',
    'Fitnessboxen Lahr',
    'Frauenboxen Lahr',
    'Kinderboxen Lahr',
    'Boxen Ortenaukreis',
    'KSL Boxing',
    'Boxverein Ortenau',
  ],
  applicationName: 'KSL Boxing Lahr',
  authors: [{ name: 'KSL Boxing Lahr e.V.' }],
  creator: 'KSL Boxing Lahr e.V.',
  publisher: 'KSL Boxing Lahr e.V.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_URL,
    siteName: 'KSL Boxing Lahr',
    title: 'KSL Boxing Lahr – Boxverein in Lahr & Offenburg',
    description:
      'Boxtraining für alle Altersgruppen in Lahr und Offenburg. Fitnessboxen, Frauenboxen, Kinder- und Wettkampftraining im Ortenaukreis.',
    images: [
      {
        url: '/logo-hires.webp',
        width: 512,
        height: 512,
        alt: 'KSL Boxing Lahr',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KSL Boxing Lahr – Boxverein in Lahr & Offenburg',
    description:
      'Boxtraining für alle Altersgruppen in Lahr und Offenburg. Fitnessboxen, Frauenboxen, Kinder- und Wettkampftraining.',
    images: ['/logo-hires.webp'],
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
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsClub',
  '@id': `${SITE_URL}/#organization`,
  name: 'KSL Boxing Lahr e.V.',
  alternateName: 'KSL Boxing',
  description:
    'Boxverein in Lahr für die Region Lahr und Offenburg. Boxtraining für Anfänger, Fortgeschrittene und Wettkämpfer.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-hires.webp`,
  image: `${SITE_URL}/logo-hires.webp`,
  email: 'info@ksl-boxing.com',
  telephone: '+49 7821 5020962',
  sport: 'Boxing',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dinglingerhauptstr. 87',
    postalCode: '77933',
    addressLocality: 'Lahr/Schwarzwald',
    addressRegion: 'Baden-Württemberg',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.3216,
    longitude: 7.8736,
  },
  areaServed: [
    { '@type': 'City', name: 'Lahr/Schwarzwald' },
    { '@type': 'City', name: 'Offenburg' },
    { '@type': 'AdministrativeArea', name: 'Ortenaukreis' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="min-h-screen bg-background">
          <Header />
          {children}
          <Footer />
        </div>
        <Toaster />
        <CookieBanner />
      </body>
    </html>
  );
}
