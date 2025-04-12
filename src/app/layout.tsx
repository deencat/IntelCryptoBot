import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from 'next';
import ClientThemeProvider from "../components/client-theme-provider";
import { DeBankHeader } from "@/components/ui/debank-header";

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
      <body
        className={cn(
          "min-h-screen bg-black text-white font-sans antialiased",
          fontSans.variable
        )}
      >
        <ClientThemeProvider>
          <div className="flex min-h-screen flex-col">
            <DeBankHeader />
            <main className="flex-1 container py-6">
              {children}
            </main>
          </div>
        </ClientThemeProvider>
      </body>
    </html>
  )
} 