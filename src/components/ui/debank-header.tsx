"use client";

import { 
  Search,
  Bell,
  Menu,
  BarChart2,
  Users,
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
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

export function DeBankHeader() {
  // Using light theme to match debank.com style
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white border-gray-200">
      <div className="container flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-md p-1 bg-primary">
              <BarChart2 className="h-5 w-5 text-white" />
            </div>
            <span className="hidden text-lg font-semibold sm:inline-block text-gray-900">
              IntelCryptoBot
            </span>
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="/" 
            className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:content-[''] text-gray-900 after:bg-primary"
          >
            Dashboard
          </Link>
          <Link 
            href="/portfolio" 
            className="text-sm font-medium transition-colors text-gray-600 hover:text-gray-900"
          >
            Portfolio
          </Link>
          <Link 
            href="/trading" 
            className="text-sm font-medium transition-colors text-gray-600 hover:text-gray-900"
          >
            Trading
          </Link>
          <Link 
            href="/analytics" 
            className="text-sm font-medium transition-colors text-gray-600 hover:text-gray-900"
          >
            Analytics
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search assets..."
              className="w-56 rounded-full pl-8 text-sm md:w-64 lg:w-72 bg-gray-100 border-gray-200"
            />
          </div>

          <Button size="icon" variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            <Bell className="h-5 w-5" />
          </Button>

          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline-block">Network</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white border-gray-200">
              <DropdownMenuItem className="flex items-center gap-2 hover:bg-gray-100">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                Solana
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-gray-600 hover:bg-gray-100">
                <div className="h-2 w-2 rounded-full bg-gray-400" />
                Ethereum
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 text-gray-600 hover:bg-gray-100">
                <div className="h-2 w-2 rounded-full bg-gray-400" />
                Arbitrum
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <WalletConnect />
          
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
} 