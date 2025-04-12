"use client";

import { useState } from "react";
import {
  WalletIcon,
  LogOutIcon,
  ChevronDownIcon,
  CopyIcon,
  CheckIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { truncateAddress } from "@/lib/utils";

export function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Mock wallet address
  const walletAddress = "0x1234567890abcdef1234567890abcdef12345678";

  const toggleConnection = () => {
    setIsConnected(!isConnected);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (!isConnected) {
    return (
      <Button onClick={toggleConnection} className="gap-2">
        <WalletIcon className="h-4 w-4" />
        Connect Wallet
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <WalletIcon className="h-4 w-4" />
          {truncateAddress(walletAddress)}
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Wallet</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={copyAddress}
          className="flex cursor-pointer items-center gap-2"
        >
          {isCopied ? (
            <CheckIcon className="h-4 w-4 text-green-500" />
          ) : (
            <CopyIcon className="h-4 w-4" />
          )}
          {isCopied ? "Copied!" : "Copy Address"}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={toggleConnection}
          className="flex cursor-pointer items-center gap-2 text-destructive"
        >
          <LogOutIcon className="h-4 w-4" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 