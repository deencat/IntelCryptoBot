import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from 'next';
import ClientLayout from "./client-layout";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: 'IntelCryptoBot - Solana Trading Dashboard',
  description: 'An intelligent crypto trading bot with Solana integration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="ethereum-fix" strategy="beforeInteractive">
          {`
            // Create a backup if ethereum is already defined
            if (typeof window.ethereum !== 'undefined') {
              window._ethereumBackup = window.ethereum;
            }
          `}
        </Script>
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
} 