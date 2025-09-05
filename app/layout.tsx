import type { Metadata, Viewport } from "next";
import "./globals.css";
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
  title: "Publixy - La Red de Medios Premium más Inteligente de México",
  description: "Conectamos marcas con audiencias A/B/B+ en ubicaciones exclusivas. 28% más efectivo que medios tradicionales. Dashboard en tiempo real.",
  keywords: "publicidad exterior, medios premium, publicidad México, BBVA publicidad, aeropuerto publicidad, segmentación A/B/B+",
  openGraph: {
    title: "Publixy - Red de Medios Premium",
    description: "La Red de Medios Premium más Inteligente de México. Conecta tu marca con audiencias que importan.",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Publixy - Red de Medios Premium",
    description: "La Red de Medios Premium más Inteligente de México",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {/* Google Analytics - Reemplazar G-XXXXXXXXXX con tu ID real */}
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
        {children}
      </body>
    </html>
  );
}
