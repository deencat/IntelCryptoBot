import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/ui/sidebar";
import type { Metadata } from 'next';
import ClientThemeProvider from "../components/client-theme-provider";

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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ClientThemeProvider>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 overflow-auto p-6">{children}</div>
          </div>
        </ClientThemeProvider>
      </body>
    </html>
  )
} 