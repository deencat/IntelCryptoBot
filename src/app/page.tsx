"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import KPIMetrics from "./components/KPIMetrics";
import ActivePositions from "./components/ActivePositions";
import TradingHistory from "./components/TradingHistory";
import OrderBook from "./components/OrderBook";
import AlertsPanel from "./components/AlertsPanel";
import { formatCurrency } from '@/lib/utils';
import KpiDisplays from './components/KpiDisplays';
import SystemStatus from './components/SystemStatus';
import { WalletConnect } from '@/components/ui/wallet-connect';

export default function Dashboard() {
  // Mock portfolio summary data
  const portfolioSummary = {
    totalValue: 105320.18,
    pnl: 12450.32,
    exposure: 35,
    drawdown: -3.2
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <WalletConnect />
      </div>

      {/* Portfolio Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Account Equity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(portfolioSummary.totalValue)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total P&L
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">
              +{formatCurrency(portfolioSummary.pnl)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Current Exposure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {portfolioSummary.exposure}%
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Max Drawdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">
              {portfolioSummary.drawdown}%
            </div>
          </CardContent>
        </Card>
      </div>

      {/* KPI Metrics */}
      <KPIMetrics />

      {/* Two-column layout for desktop */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Active Positions */}
        <ActivePositions />

        {/* Right column */}
        <div className="space-y-6">
          <KpiDisplays />
          <SystemStatus />
          <AlertsPanel />
        </div>
      </div>

      {/* Order Book and Trading History */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <OrderBook />
        <TradingHistory />
      </div>
    </div>
  );
} 