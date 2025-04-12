"use client";

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ActivePositions from "./components/ActivePositions";
import TradingHistory from "./components/TradingHistory";
import OrderBook from "./components/OrderBook";
import AlertsPanel from "./components/AlertsPanel";
import SystemStatus from './components/SystemStatus';
import { PortfolioSummary } from '@/components/ui/portfolio-summary';
import { TokenList } from '@/components/ui/token-list';

export default function Dashboard() {
  return (
    <div className="space-y-4">
      {/* Header with Portfolio Value */}
      <div className="flex justify-between items-start pb-2 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="w-full max-w-xs">
          <PortfolioSummary 
            totalValue={43326}
            dailyChangePercentage={1.46}
          />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6">
        <section>
          <Tabs defaultValue="assets" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="assets">Assets</TabsTrigger>
              <TabsTrigger value="positions">Positions</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            <TabsContent value="assets">
              <TokenList />
            </TabsContent>
            <TabsContent value="positions">
              <ActivePositions />
            </TabsContent>
            <TabsContent value="history">
              <TradingHistory />
            </TabsContent>
          </Tabs>
        </section>

        {/* Trading Section */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <OrderBook />
          <AlertsPanel />
        </section>
        
        {/* System Status */}
        <section>
          <SystemStatus />
        </section>
      </div>
    </div>
  );
} 