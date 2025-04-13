"use client";

import { 
  Search,
  Bell,
  Menu,
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
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white border-gray-100">
      <div className="flex h-14 items-center px-4">
        {/* Dashboard Title */}
        <h1 className="text-2xl text-gray-900">
          Dashboard
        </h1>
      </div>
    </header>
  );
} 