"use client";

import { 
  Search,
  Bell,
  Menu,
  BarChart2,
  Wallet,
  Users,
  Settings,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WalletConnect } from "./wallet-connect";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export function DeBankHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-zinc-800">
      <div className="container flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-md bg-primary p-1">
              <BarChart2 className="h-5 w-5 text-black" />
            </div>
            <span className="hidden text-lg font-semibold text-white sm:inline-block">
              IntelCryptoBot
            </span>
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="/" 
            className="text-sm font-medium text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:content-['']"
          >
            Dashboard
          </Link>
          <Link 
            href="/portfolio" 
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Portfolio
          </Link>
          <Link 
            href="/trading" 
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Trading
          </Link>
          <Link 
            href="/analytics" 
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Analytics
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-zinc-500" />
            <Input
              type="search"
              placeholder="Search assets..."
              className="w-56 rounded-full bg-zinc-900 border-zinc-800 pl-8 text-sm md:w-64 lg:w-72"
            />
          </div>

          <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-white hover:bg-zinc-900">
            <Bell className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1 text-zinc-400 hover:text-white hover:bg-zinc-900">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline-block">Network</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
              <DropdownMenuItem className="flex items-center gap-2 hover:bg-zinc-800">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                Solana
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-zinc-400 hover:bg-zinc-800">
                <div className="h-2 w-2 rounded-full bg-zinc-500" />
                Ethereum
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-zinc-400 hover:bg-zinc-800">
                <div className="h-2 w-2 rounded-full bg-zinc-500" />
                Arbitrum
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <WalletConnect />
          
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white hover:bg-zinc-900 md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
} 