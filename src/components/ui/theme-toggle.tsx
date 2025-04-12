"use client";

import * as React from "react";
import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  // Simplified ThemeToggle just showing the light mode icon
  // with no functionality to change themes since we're forcing light mode to match debank.com
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="text-amber-500 hover:text-amber-600 hover:bg-gray-100"
      aria-label="Light mode"
      disabled={true} // Disable the button since we can't change the theme
    >
      <Sun className="h-5 w-5" />
      <span className="sr-only">Light mode</span>
    </Button>
  );
} 