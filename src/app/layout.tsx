import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CODE SPRINT 2.0",
  description: "Built by GDSC NMIT",
  icons: {
    icon: '/logo.webp', // /public path
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
