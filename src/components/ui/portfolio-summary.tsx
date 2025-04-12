"use client";

import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowUpRight, 
  ArrowDownRight,
  Clock,
  TrendingUp,
  DollarSign,
  BarChart 
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface PortfolioSummaryProps {
  totalValue: number;
  dailyChange: number;
  dailyChangePercentage: number;
}

export function PortfolioSummary({
  totalValue = 105320.18,
  dailyChange = 4325.75,
  dailyChangePercentage = 4.28,
}: PortfolioSummaryProps) {
  const isPositive = dailyChange >= 0;
  
  // Mock chart data - in a real app, this would be dynamic
  const chartData = [4, 6, 8, 7, 6, 8, 9, 8, 7, 8, 9, 10, 9, 11, 12, 10, 9, 11, 13, 14];
  
  // Calculate the max value for scaling the chart
  const maxValue = Math.max(...chartData);
  
  return (
    <Card className="border-none shadow-none">
      <CardContent className="p-0">
        <div className="flex flex-col gap-4">
          {/* Portfolio Value */}
          <div className="space-y-1">
            <h2 className="text-sm font-medium text-muted-foreground">
              Total Portfolio Value
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">
                {formatCurrency(totalValue)}
              </span>
              <div
                className={`flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                  isPositive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
                }`}
              >
                {isPositive ? (
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                ) : (
                  <ArrowDownRight className="mr-1 h-3 w-3" />
                )}
                {isPositive ? "+" : ""}{dailyChangePercentage.toFixed(2)}%
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>24h: {isPositive ? "+" : ""}{formatCurrency(dailyChange)}</span>
            </div>
          </div>
          
          {/* Portfolio Chart */}
          <div className="portfolio-chart">
            <svg
              width="100%"
              height="100%"
              viewBox={`0 0 ${chartData.length} ${maxValue}`}
              preserveAspectRatio="none"
              className="overflow-visible"
            >
              <defs>
                <linearGradient
                  id="chart-gradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0.2"
                  />
                  <stop
                    offset="100%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              <path
                d={`M0,${maxValue} ${chartData
                  .map((d, i) => `L${i},${maxValue - d}`)
                  .join(" ")} L${chartData.length - 1},${maxValue} Z`}
                fill="url(#chart-gradient)"
                className="translate-y-3"
              />
              <path
                d={`M0,${maxValue - chartData[0]} ${chartData
                  .map((d, i) => `L${i},${maxValue - d}`)
                  .join(" ")}`}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                className="translate-y-3"
              />
            </svg>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="space-y-1">
              <h3 className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                <TrendingUp className="h-3 w-3" />
                <span>Win Rate</span>
              </h3>
              <p className="text-base font-bold">72%</p>
            </div>
            
            <div className="space-y-1">
              <h3 className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                <DollarSign className="h-3 w-3" />
                <span>Daily PnL</span>
              </h3>
              <p className="text-base font-bold text-success">+$4,325.75</p>
            </div>
            
            <div className="space-y-1">
              <h3 className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                <BarChart className="h-3 w-3" />
                <span>Exposure</span>
              </h3>
              <p className="text-base font-bold">35%</p>
            </div>
            
            <div className="space-y-1">
              <h3 className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                <TrendingUp className="h-3 w-3" />
                <span>Max Drawdown</span>
              </h3>
              <p className="text-base font-bold text-destructive">-3.2%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 