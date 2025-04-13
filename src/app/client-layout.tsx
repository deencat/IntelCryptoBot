"use client";

import { cn } from "@/lib/utils";
import ClientThemeProvider from "../components/client-theme-provider";
import { DeBankHeader } from "@/components/ui/debank-header";
import { DeBankSidebar } from "@/components/ui/debank-sidebar";

function RootLayoutInner({
  children,
}: {
  children: React.ReactNode
}) {
  // Using light theme to match debank.com style
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Fixed sidebar */}
      <DeBankSidebar />
      
      {/* Main content with margin to avoid sidebar overlap */}
      <div className="ml-16 md:ml-60">
        <DeBankHeader />
        <main className="py-6 px-4">
          {children}
        </main>
      </div>
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