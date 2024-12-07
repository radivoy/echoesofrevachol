import { baskerville } from '@/app/ui/fonts';
import Head from 'next/head'; // Import Head from Next.js
import './globals.css'; // Import your global styles
import GoogleAnalytics from "./GoogleAnalytics";

export const metadata = {
  title: 'Echoes of Revachol',
  description: 'A Disco Elysium Card Game',
  openGraph: {
    title: 'Echoes of Revachol',
    description: 'A Disco Elysium Card Game',
    url: 'https://radivoy.github.io/echoesofrevachol/',
    siteName: 'Echoes of Revachol',
    images: [
      {
        url: 'https://radivoy.github.io/echoesofrevachol/image.png',
        width: 1440,
        height: 820,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${baskerville.className} antialiased`}>
        <Head>
          <meta property="og:title" content={metadata.openGraph.title} />
          <meta property="og:description" content={metadata.openGraph.description} />
          <meta property="og:url" content={metadata.openGraph.url} />
          <meta property="og:site_name" content={metadata.openGraph.siteName} />
          <meta property="og:image" content={metadata.openGraph.images[0].url} />
          <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
          <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
          <meta property="og:locale" content={metadata.openGraph.locale} />
          <meta property="og:type" content={metadata.openGraph.type} />
        </Head>
        <GoogleAnalytics ga_id="G-06MP1T1PDS" />
        {children}
      </body>
    </html>
  );
}
