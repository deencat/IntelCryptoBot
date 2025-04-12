"use client";

import React from 'react';
import { positionData } from '../lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

export default function ActivePositions() {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Active Positions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="rounded-tl-lg">Symbol</TableHead>
                <TableHead>Direction</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Entry Price</TableHead>
                <TableHead>Current Price</TableHead>
                <TableHead>PnL</TableHead>
                <TableHead>PnL %</TableHead>
                <TableHead>Stop Loss</TableHead>
                <TableHead className="rounded-tr-lg">Take Profit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {positionData.map((position, index) => (
                <TableRow key={index} className="border-b border-border/50 hover:bg-muted/20">
                  <TableCell className="font-medium text-foreground">
                    {position.symbol}
                  </TableCell>
                  <TableCell className={`${position.direction === 'LONG' ? 'text-green-500' : 'text-red-500'}`}>
                    {position.direction}
                  </TableCell>
                  <TableCell>
                    {position.size.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {position.symbol.includes('BONK') ? position.entryPrice.toFixed(8) : position.entryPrice.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    {position.symbol.includes('BONK') ? position.currentPrice.toFixed(8) : position.currentPrice.toFixed(2)}
                  </TableCell>
                  <TableCell className={`${position.pnl.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {position.pnl}
                  </TableCell>
                  <TableCell className={`${position.pnlPercent.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {position.pnlPercent}
                  </TableCell>
                  <TableCell className="text-red-500">
                    {position.symbol.includes('BONK') ? position.stopLoss.toFixed(8) : position.stopLoss.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-green-500">
                    {position.symbol.includes('BONK') ? position.takeProfit.toFixed(8) : position.takeProfit.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-4 flex justify-end">
          <Button variant="default">
            New Position
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 