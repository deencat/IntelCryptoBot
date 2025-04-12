"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  LineChart, 
  History, 
  Settings, 
  Key, 
  AlertCircle, 
  Database
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type NavItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: <LineChart className="h-5 w-5" />,
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: <History className="h-5 w-5" />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    title: "API Keys",
    href: "/api-keys",
    icon: <Key className="h-5 w-5" />,
  },
  {
    title: "Logs",
    href: "/logs",
    icon: <AlertCircle className="h-5 w-5" />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-card/70 lg:block lg:w-64">
      <div className="flex h-14 items-center border-b px-4">
        <Link 
          href="/" 
          className="flex items-center gap-2 font-semibold"
        >
          <Database className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">IntelCryptoBot</span>
        </Link>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                pathname === item.href && "bg-accent"
              )}
              asChild
            >
              <Link href={item.href}>
                {item.icon}
                {item.title}
              </Link>
            </Button>
          ))}
        </div>
        <Separator className="my-2" />
        <div className="rounded-lg bg-muted/50 p-4">
          <div className="text-sm font-medium">System Status</div>
          <div className="mt-2 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">API</span>
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Data Feed</span>
              <span className="flex h-2 w-2 rounded-full bg-yellow-500"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 