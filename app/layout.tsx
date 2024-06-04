import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "./providers/ReacrQueryProvider";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
