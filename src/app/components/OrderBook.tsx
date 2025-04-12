"use client";

import React from 'react';
import { orderBookBids, orderBookAsks } from '../lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function OrderBook() {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Order Book</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="both" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="bids">Bids</TabsTrigger>
            <TabsTrigger value="both">Both</TabsTrigger>
            <TabsTrigger value="asks">Asks</TabsTrigger>
          </TabsList>
          
          <TabsContent value="bids">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Price (USD)</TableHead>
                  <TableHead className="text-right">Amount (BTC)</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderBookBids.map((bid, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-green-500">${bid.price.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{bid.amount.toFixed(6)}</TableCell>
                    <TableCell className="text-right">${(bid.price * bid.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          
          <TabsContent value="both">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium mb-2 text-green-500">Bids</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Price</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orderBookBids.slice(0, 6).map((bid, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-green-500">${bid.price.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{bid.amount.toFixed(6)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2 text-red-500">Asks</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Price</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orderBookAsks.slice(0, 6).map((ask, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-red-500">${ask.price.toLocaleString()}</TableCell>
                        <TableCell className="text-right">{ask.amount.toFixed(6)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="asks">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Price (USD)</TableHead>
                  <TableHead className="text-right">Amount (BTC)</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderBookAsks.map((ask, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-red-500">${ask.price.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{ask.amount.toFixed(6)}</TableCell>
                    <TableCell className="text-right">${(ask.price * ask.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
} 