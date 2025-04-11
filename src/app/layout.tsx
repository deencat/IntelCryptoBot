import React from 'react';
import './globals.css'
import type { Metadata } from 'next'
import ClientWalletWrapper from './components/ClientWalletWrapper';

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
        <ClientWalletWrapper>
          {children}
        </ClientWalletWrapper>
      </body>
    </html>
  )
} 