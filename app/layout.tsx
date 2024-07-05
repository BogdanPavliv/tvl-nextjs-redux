import 'normalize.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";
import HeaderTop from './components/headerTop';
import Footer from './components/footer';
import StoreProvider from './components/provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TVL — Choose Your Favorite Tour To Explore",
  description: "TVL — Choose Your Favorite Tour To Explore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <HeaderTop />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
