import { baskerville } from '@/app/ui/fonts';
import "./globals.css";
import { Metadata } from "next";

export async function generateMetadata() {
  const title = "Echoes of Revachol";

  const description = "A Disco Elysium Card Game";

  return {
    metadataBase: new URL(baseUrl),
    title: title,
    description: description,
    themeColor: "black",
    openGraph: {
      title: title,
      description: description,
      url: "https://radivoy.github.io/echoesofrevachol/",
      images: [
        {
          url: "https://radivoy.github.io/echoesofrevachol/image.png",
          secureUrl: "https://radivoy.github.io/echoesofrevachol/image.png",
          width: 1440,
          height: 820,
          alt: "Echoes of Revachol, a Disco Elysium card game",
        },
      ],
      type: "website",
      siteName: "Echoes of Revachol, a Disco Elysium card game",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${baskerville.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
