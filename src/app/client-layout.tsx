"use client";

import { cn } from "@/lib/utils";
import ClientThemeProvider from "../components/client-theme-provider";
import { DeBankHeader } from "@/components/ui/debank-header";

function RootLayoutInner({
  children,
}: {
  children: React.ReactNode
}) {
  // Using light theme to match debank.com style
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <DeBankHeader />
      <main className="flex-1 container py-6">
        {children}
      </main>
    </div>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientThemeProvider>
      <div className="flex min-h-screen flex-col">
        <RootLayoutInner>
          {children}
        </RootLayoutInner>
      </div>
    </ClientThemeProvider>
  );
} 