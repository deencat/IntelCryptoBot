"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Use dynamic import with SSR disabled for wallet adapter components
// This is needed because the wallet adapter uses browser APIs
const SolanaWalletProviderWithNoSSR = dynamic(
  () => import('./SolanaWalletProvider'),
  { ssr: false }
);

export default function ClientWalletWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SolanaWalletProviderWithNoSSR>
      {children}
    </SolanaWalletProviderWithNoSSR>
  );
} 