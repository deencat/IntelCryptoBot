"use client";

import React from 'react';
import { tradingHistory } from '../lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export default function TradingHistory() {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Recent Trading Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Pair</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tradingHistory.map((trade) => (
              <TableRow key={trade.id}>
                <TableCell className="text-xs text-muted-foreground">{trade.time}</TableCell>
                <TableCell>{trade.pair}</TableCell>
                <TableCell>
                  <Badge variant={trade.type === 'BUY' ? 'success' : 'destructive'} className="font-normal">
                    {trade.type}
                  </Badge>
                </TableCell>
                <TableCell>${trade.price.toLocaleString()}</TableCell>
                <TableCell className="text-right">{trade.amount.toFixed(6)}</TableCell>
                <TableCell className="text-right">
                  <Badge variant={
                    trade.status === 'Completed' ? 'success' :
                    trade.status === 'Failed' ? 'destructive' : 'outline'
                  } className="font-normal">
                    {trade.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
} 