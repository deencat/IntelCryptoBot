import React from 'react';
import WalletConnectButton from './WalletConnectButton';

export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-white">IntelCryptoBot</h1>
          <span className="px-2 py-1 text-xs bg-blue-900/30 text-blue-400 rounded">
            Solana
          </span>
          <span className="px-2 py-1 text-xs bg-yellow-900/30 text-yellow-400 rounded">
            Design Mode
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-4 text-gray-400">
            <span>Network: Solana Devnet</span>
            <span>|</span>
            <span>SOL: $164.35</span>
          </div>
          <WalletConnectButton />
        </div>
      </div>
    </header>
  );
} 