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
    <div className="space-y-8">
      {/* Hero Section with Portfolio Summary */}
      <section>
        <PortfolioSummary />
      </section>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 gap-8">
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