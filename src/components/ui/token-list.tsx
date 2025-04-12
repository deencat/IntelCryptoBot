"use client";

import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  ArrowUpRight, 
  ArrowDownRight,
  ChevronRight 
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Token {
  id: string;
  name: string;
  symbol: string;
  iconUrl: string;
  balance: number;
  price: number;
  value: number;
  change24h: number;
}

const tokens: Token[] = [
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    iconUrl: "https://cryptologos.cc/logos/solana-sol-logo.png",
    balance: 95.45,
    price: 158.75,
    value: 15152.71,
    change24h: 5.73
  },
  {
    id: "bonk",
    name: "Bonk",
    symbol: "BONK",
    iconUrl: "https://cryptologos.cc/logos/bonk-bonk-logo.png",
    balance: 52500000,
    price: 0.00002010,
    value: 1055.25,
    change24h: -2.45
  },
  {
    id: "usdc",
    name: "USD Coin",
    symbol: "USDC",
    iconUrl: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
    balance: 48520.12,
    price: 1.00,
    value: 48520.12,
    change24h: 0.01
  },
  {
    id: "jupiter",
    name: "Jupiter",
    symbol: "JUP",
    iconUrl: "https://cryptologos.cc/logos/jupiter-jup-logo.png",
    balance: 2500,
    price: 8.24,
    value: 20600.00,
    change24h: 12.35
  },
  {
    id: "jito",
    name: "Jito",
    symbol: "JTO",
    iconUrl: "https://cryptologos.cc/logos/jito-jto-logo.png",
    balance: 1850,
    price: 6.38,
    value: 11803.00,
    change24h: 3.78
  }
];

export function TokenList() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Assets</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset</TableHead>
              <TableHead className="text-right">Balance</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Value</TableHead>
              <TableHead className="text-right">24h</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tokens.map((token) => (
              <TableRow key={token.id} className="asset-list-item">
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 overflow-hidden rounded-full">
                      <img
                        src={token.iconUrl}
                        alt={token.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{token.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {token.symbol}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="font-medium">
                    {token.balance < 1000 
                      ? token.balance.toLocaleString(undefined, { maximumFractionDigits: 2 })
                      : token.balance.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {token.symbol}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  {token.price < 0.01 
                    ? token.price.toFixed(8)
                    : formatCurrency(token.price)}
                </TableCell>
                <TableCell className="text-right font-medium">
                  {formatCurrency(token.value)}
                </TableCell>
                <TableCell className="text-right">
                  <div
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      token.change24h >= 0 
                        ? "bg-success/10 text-success" 
                        : "bg-destructive/10 text-destructive"
                    }`}
                  >
                    {token.change24h >= 0 ? (
                      <ArrowUpRight className="mr-1 h-3 w-3" />
                    ) : (
                      <ArrowDownRight className="mr-1 h-3 w-3" />
                    )}
                    {token.change24h >= 0 ? "+" : ""}
                    {token.change24h.toFixed(2)}%
                  </div>
                </TableCell>
                <TableCell>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
} 