"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface PortfolioSummaryProps {
  totalValue: number;
  dailyChangePercentage: number;
  depositLink?: string;
}

export function PortfolioSummary({
  totalValue = 43326,
  dailyChangePercentage = 1.46,
  depositLink = "#",
}: PortfolioSummaryProps) {
  const isPositive = dailyChangePercentage >= 0;
  
  // Mock chart data - in a real app, this would be dynamic
  const chartData = [10, 11, 12, 12.5, 11.8, 12.2, 13, 12.5, 13.2, 14, 14.8, 14.2, 14.5, 14.8];
  
  // Calculate the max value for scaling the chart
  const maxValue = Math.max(...chartData);
  const minValue = Math.min(...chartData);
  const range = maxValue - minValue;
  
  return (
    <div className="relative">
      {/* Background chart */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg
          width="100%"
          height="120"
          viewBox={`0 0 ${chartData.length - 1} ${range}`}
          preserveAspectRatio="none"
        >
          <path
            d={`M0,${maxValue - chartData[0]} ${chartData
              .map((d, i) => `L${i},${maxValue - d}`)
              .join(" ")}`}
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />
        </svg>
      </div>
      
      {/* Portfolio Value Display */}
      <div className="text-right p-4">
        <div className="flex items-center justify-end">
          <span className="text-2xl font-bold text-gray-900 mr-2">
            {formatCurrency(totalValue)}
          </span>
          <div
            className={`flex items-center text-sm font-medium ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {isPositive ? "+" : ""}{dailyChangePercentage.toFixed(2)}%
            {isPositive ? (
              <ArrowUpRight className="ml-0.5 h-4 w-4" />
            ) : (
              <ArrowDownRight className="ml-0.5 h-4 w-4" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 