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
    <div className="space-y-6">
      {/* Portfolio Value */}
      <div className="flex justify-end">
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
          {/* DeBank-style tabs */}
          <Tabs defaultValue="assets">
            <div className="border-b border-gray-100">
              <TabsList className="bg-transparent p-0 h-auto">
                <TabsTrigger 
                  value="assets" 
                  className="rounded-none border-0 text-gray-700 h-10 px-4 data-[state=active]:border-b-2 data-[state=active]:border-gray-900 data-[state=active]:bg-transparent data-[state=active]:text-gray-900 font-medium"
                >
                  Assets
                </TabsTrigger>
                <TabsTrigger 
                  value="positions"
                  className="rounded-none border-0 text-gray-700 h-10 px-4 data-[state=active]:border-b-2 data-[state=active]:border-gray-900 data-[state=active]:bg-transparent data-[state=active]:text-gray-900 font-medium"
                >
                  Positions
                </TabsTrigger>
                <TabsTrigger 
                  value="history"
                  className="rounded-none border-0 text-gray-700 h-10 px-4 data-[state=active]:border-b-2 data-[state=active]:border-gray-900 data-[state=active]:bg-transparent data-[state=active]:text-gray-900 font-medium"
                >
                  History
                </TabsTrigger>
              </TabsList>
            </div>
            
            <div className="mt-4">
              <TabsContent value="assets" className="m-0 p-0">
                <h2 className="text-xl font-semibold mb-4">Assets</h2>
                <TokenList />
              </TabsContent>
              <TabsContent value="positions" className="m-0 p-0">
                <h2 className="text-xl font-semibold mb-4">Positions</h2>
                <ActivePositions />
              </TabsContent>
              <TabsContent value="history" className="m-0 p-0">
                <h2 className="text-xl font-semibold mb-4">History</h2>
                <TradingHistory />
              </TabsContent>
            </div>
          </Tabs>
        </section>

        {/* Order Book Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Order Book</h2>
          <OrderBook />
        </section>
        
        {/* System Status (hidden on mobile) */}
        <section className="hidden md:block">
          <h2 className="text-xl font-semibold mb-4">System Status</h2>
          <SystemStatus />
        </section>
      </div>
    </div>
  );
} 