"use client";

import React from 'react';
// Note: In a real implementation, we would use the actual wallet adapter
// For design mode, we'll just mock the functionality

export default function WalletConnectButton() {
  const [connected, setConnected] = React.useState(false);
  const [walletAddress, setWalletAddress] = React.useState('');
  
  const handleConnect = () => {
    // In a real implementation, this would trigger the wallet adapter
    // For our prototype, we'll just simulate a connection
    if (!connected) {
      setConnected(true);
      // Generate a random Solana-like address
      setWalletAddress('9X5zCd' + Math.random().toString(36).substring(2, 10) + 'SOLANA');
    } else {
      setConnected(false);
      setWalletAddress('');
    }
  };
  
  return (
    <div className="flex items-center">
      {connected ? (
        <div className="flex items-center space-x-2">
          <div className="px-3 py-1 bg-green-900/30 text-green-400 rounded-md text-xs">
            {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
          </div>
          <button 
            onClick={handleConnect}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button 
          onClick={handleConnect}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
} 