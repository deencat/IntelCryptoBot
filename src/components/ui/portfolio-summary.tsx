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
    <Card className="border border-gray-100 shadow-sm bg-white rounded-xl">
      <CardContent className="p-4">
        <div className="relative min-h-16">
          {/* Sparkline Chart Background */}
          <div className="absolute inset-0 opacity-20 h-full">
            <svg
              width="100%"
              height="60"
              viewBox={`0 0 ${chartData.length - 1} ${range}`}
              preserveAspectRatio="none"
              className="overflow-visible"
            >
              <path
                d={`M0,${maxValue - chartData[0]} ${chartData
                  .map((d, i) => `L${i},${maxValue - d}`)
                  .join(" ")}`}
                fill="none"
                stroke={isPositive ? "#22c55e" : "#ef4444"}
                strokeWidth="2"
              />
            </svg>
          </div>
          
          {/* Portfolio Value */}
          <div className="flex justify-between items-center relative z-10 h-full">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">
                {formatCurrency(totalValue)}
              </span>
              <div
                className={`flex items-center text-sm font-medium ${
                  isPositive ? "text-green-500" : "text-red-500"
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
            
            <a 
              href={depositLink} 
              className="text-sm font-medium text-blue-500 hover:underline flex items-center"
            >
              DeBank L2 Deposit &rarr;
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 