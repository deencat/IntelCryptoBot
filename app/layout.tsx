import React from 'react';
import './globals.css'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic';

// Use dynamic import with SSR disabled for wallet adapter components
// This is needed because the wallet adapter uses browser APIs
const SolanaWalletProviderWithNoSSR = dynamic(
  () => import('./components/SolanaWalletProvider'),
  { ssr: false }
);

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
    <html lang="en">
      <body className="min-h-screen bg-background">
        <SolanaWalletProviderWithNoSSR>
          {children}
        </SolanaWalletProviderWithNoSSR>
      </body>
    </html>
  )
} 