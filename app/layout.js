import { baskerville } from '@/app/ui/fonts';
import "./globals.css";

export const metadata = {
  title: "Echoes of Revachol",
  description: "A Disco Elysium Card Game",
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
