"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home,
  Search,
  UserCircle,
  Wallet,
  Bell,
  Bookmark,
  MessageSquare,
  BarChart2,
  Activity,
  MoreHorizontal,
  Plus,
  HistoryIcon
} from "lucide-react";

type NavItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    icon: <Wallet className="h-5 w-5" />,
  },
  {
    title: "Trading",
    href: "/trading",
    icon: <BarChart2 className="h-5 w-5" />,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: "Alerts",
    href: "/alerts",
    icon: <Bell className="h-5 w-5" />,
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: <HistoryIcon className="h-5 w-5" />,
  },
  {
    title: "Bookmarks",
    href: "/bookmarks",
    icon: <Bookmark className="h-5 w-5" />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <MoreHorizontal className="h-5 w-5" />,
  },
];

export function DeBankSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-16 md:w-60 border-r border-gray-100 bg-white h-screen fixed left-0 top-0 flex flex-col z-40">
      {/* Logo */}
      <div className="h-14 flex items-center px-4 border-b border-gray-100">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-md bg-orange-500 p-1">
            <BarChart2 className="h-5 w-5 text-white" />
          </div>
          <span className="hidden md:inline-block text-xl font-bold text-gray-900">
            IntelCryptoBot
          </span>
        </Link>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto py-4 px-2">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <div className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-lg",
                  isActive ? "text-gray-900" : "text-gray-600"
                )}>
                  {item.icon}
                </div>
                <span className="hidden md:inline-block">{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* New Trade Button */}
      <div className="p-4 border-t border-gray-100">
        <Link
          href="/new-trade"
          className="flex items-center justify-center md:justify-start gap-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span className="hidden md:inline-block font-medium">New Trade</span>
        </Link>
      </div>
    </div>
  );
} 