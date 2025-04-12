"use client";

import React from 'react';
import { kpiData } from '../lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function KPIMetrics() {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(kpiData).map(([key, value]) => (
            <div key={key} className="flex flex-col bg-card/60 p-3 rounded-md border border-border/50">
              <div className="text-sm text-muted-foreground mb-1">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div className="text-xl font-semibold">
                {typeof value === 'number' ? 
                  (key.toLowerCase().includes('percent') ? 
                    `${value.toFixed(2)}%` : 
                    `$${value.toLocaleString()}`) : 
                  value}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 