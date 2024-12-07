import { baskerville } from '@/app/ui/fonts';
import "./globals.css";
 
export const metadata = {
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
        {children}
      </body>
    </html>
  );
}
