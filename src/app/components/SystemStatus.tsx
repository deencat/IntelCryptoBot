"use client";

import React from 'react';
import { systemStatus } from '../lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Define status colors mapping for badge variants
const statusVariantMap: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  green: "default",
  yellow: "secondary",
  red: "destructive"
};

export default function SystemStatus() {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">System Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(systemStatus).map(([key, value]) => (
            <div key={key} className="flex flex-col bg-card/60 p-3 rounded-md border border-border/50">
              <div className="text-sm text-muted-foreground mb-1">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div className="flex items-center justify-between">
                <Badge 
                  variant={statusVariantMap[value.color]}
                >
                  {value.status}
                </Badge>
                {value.status === "Connected" && (
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                )}
                {value.status === "Partial" && (
                  <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 