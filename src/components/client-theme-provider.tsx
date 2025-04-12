"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
      enableSystem={false}
      themes={["light"]}
      disableTransitionOnChange
      enableColorScheme={true}
      storageKey="intel-crypto-theme"
    >
      {children}
    </NextThemesProvider>
  );
} 