"use client";

import React from 'react';
import { kpiData } from '../lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface KpiData {
  [key: string]: {
    value: string;
    color: string;
  };
}

export default function KPIMetrics() {
  // Ensure we're properly handling the kpiData type
  const typedKpiData = kpiData as KpiData;
  
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(typedKpiData).map(([key, item]) => {
            // Convert the key to a readable format
            const formattedKey = key.replace(/([A-Z])/g, ' $1').trim();
            
            // Get the appropriate color class
            const colorClass = item.color === 'green' ? 'text-green-500' : 
                               item.color === 'red' ? 'text-red-500' :
                               item.color === 'yellow' ? 'text-yellow-500' :
                               item.color === 'blue' ? 'text-blue-500' : '';
            
            return (
              <div key={key} className="flex flex-col bg-card/60 p-3 rounded-md border border-border/50">
                <div className="text-sm text-muted-foreground mb-1">
                  {formattedKey}
                </div>
                <div className={`text-xl font-semibold ${colorClass}`}>
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
} 