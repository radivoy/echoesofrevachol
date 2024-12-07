import { baskerville } from '@/app/ui/fonts';
import Head from 'next/head'; // Import Head component for meta tags
import './globals.css';

export const metadata = {
  title: "Echoes of Revachol",
  description: "A Disco Elysium Card Game",
  url: "https://radivoy.github.io/echoesofrevachol", 
  image: "https://radivoy.github.io/echoesofrevachol/image.png", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>
      <body className={`${baskerville.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
