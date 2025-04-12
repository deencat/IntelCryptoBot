"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";

interface KPICard {
  title: string;
  value: number | string;
  isPercentage?: boolean;
  isCurrency?: boolean;
  isPositive?: boolean;
}

export default function KPIMetrics() {
  const { theme } = useTheme();
  
  const metrics: KPICard[] = [
    {
      title: "Total Value",
      value: 23567.89,
      isCurrency: true,
    },
    {
      title: "Daily Change",
      value: 5.67,
      isPercentage: true,
      isPositive: true,
    },
    {
      title: "Weekly Change",
      value: -2.34,
      isPercentage: true,
      isPositive: false,
    },
    {
      title: "Active Positions",
      value: 12,
    },
  ];

  // Function to determine card accent styling based on theme and KPI type
  const getCardStyles = (index: number, isPositive?: boolean) => {
    // Base styles that apply to all cards
    let baseStyle = "border rounded-lg overflow-hidden";
    
    // Theme-specific accent colors
    const themeAccents: Record<string, string[]> = {
      blue: ["border-blue-200 bg-blue-50", "border-blue-300 bg-blue-100", "border-blue-400 bg-blue-200", "border-blue-500 bg-blue-300"],
      green: ["border-green-200 bg-green-50", "border-green-300 bg-green-100", "border-green-400 bg-green-200", "border-green-500 bg-green-300"],
      purple: ["border-purple-200 bg-purple-50", "border-purple-300 bg-purple-100", "border-purple-400 bg-purple-200", "border-purple-500 bg-purple-300"],
      dark: ["border-gray-700 bg-gray-800", "border-gray-600 bg-gray-800", "border-gray-500 bg-gray-800", "border-gray-400 bg-gray-800"],
      light: ["border-gray-200 bg-gray-50", "border-gray-300 bg-gray-100", "border-gray-400 bg-gray-200", "border-gray-500 bg-gray-300"],
    };
    
    // Get accent color based on theme, defaulting to light theme if theme not found
    const accentColor = themeAccents[theme as keyof typeof themeAccents] || themeAccents.light;
    
    // Return the complete style
    return `${baseStyle} ${accentColor[index % accentColor.length]}`;
  };

  // Function to format values appropriately
  const formatValue = (value: number | string, isPercentage?: boolean, isCurrency?: boolean, isPositive?: boolean) => {
    if (typeof value === 'number') {
      // Format currency
      if (isCurrency) {
        return `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      }
      
      // Format percentage
      if (isPercentage) {
        const formattedValue = `${Math.abs(value).toFixed(2)}%`;
        const textColorClass = isPositive 
          ? 'text-green-600 dark:text-green-400' 
          : 'text-red-600 dark:text-red-400';
        
        return (
          <span className={textColorClass}>
            {isPositive ? '↑ ' : '↓ '}
            {formattedValue}
          </span>
        );
      }
      
      // Format regular number
      return value.toLocaleString();
    }
    
    // Return as is if not a number
    return value;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={metric.title} className={getCardStyles(index, metric.isPositive)}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatValue(metric.value, metric.isPercentage, metric.isCurrency, metric.isPositive)}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 