import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// !TODO: IMPLEMENTS
export const metadata = {
  title: "Crypto Feed dApp",
  description: "Created with ❤️ by Erlon",
  keywords: ["blockchain", "dApp", "social networks 200", "crypto", "web3", "decentralized application", "Ethereum", "smart contract"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
      </body>
    </html>
  );
}
