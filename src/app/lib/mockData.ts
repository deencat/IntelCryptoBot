// System Status Data
export const systemStatus = {
  API: { status: "Connected", color: "green" },
  DataFeed: { status: "Partial", color: "yellow" },
  Database: { status: "Connected", color: "green" },
  Notifications: { status: "Connected", color: "green" },
  TradingEngine: { status: "Connected", color: "green" },
  MarketData: { status: "Connected", color: "green" },
  OrderExecution: { status: "Connected", color: "green" },
  RiskManagement: { status: "Connected", color: "green" }
};

// KPI Data
export const kpiData = {
  dailyVolume: { value: "$1.25M", color: "blue" },
  activeTrades: { value: "8", color: "green" },
  winRate: { value: "72%", color: "green" },
  avgReturn: { value: "3.2%", color: "green" },
  riskRatio: { value: "3.5", color: "blue" },
  portfolioBalance: { value: "$105,320", color: "blue" },
  openPositions: { value: "6", color: "yellow" },
  drawdown: { value: "-3.2%", color: "red" }
};

// Alert Data
export const alertData = [
  {
    type: "error",
    message: "API connection failed, retrying...",
    timestamp: "10:32:15 AM"
  },
  {
    type: "warning",
    message: "Unusual market volatility detected",
    timestamp: "09:47:22 AM"
  },
  {
    type: "success",
    message: "Trade executed: BTC/USDT at $43,150",
    timestamp: "09:32:01 AM"
  }
];

// Performance Data for Charts
export const performanceData = [
  { date: "Jan", profit: 4000, loss: -2400 },
  { date: "Feb", profit: 3000, loss: -1398 },
  { date: "Mar", profit: 9800, loss: -2000 },
  { date: "Apr", profit: 3908, loss: -2780 },
  { date: "May", profit: 4800, loss: -1908 },
  { date: "Jun", profit: 3800, loss: -2800 },
  { date: "Jul", profit: 4300, loss: -2400 }
];

// Position Data
export const positionData = [
  {
    id: 1,
    symbol: "SOL/USDC",
    direction: "LONG",
    size: 5,
    entryPrice: 153.24,
    currentPrice: 158.75,
    pnl: "+$27.55",
    pnlPercent: "+3.6%",
    stopLoss: 148.50,
    takeProfit: 170.00
  },
  {
    id: 2,
    symbol: "BONK/USDC",
    direction: "SHORT",
    size: 500000,
    entryPrice: 0.00002145,
    currentPrice: 0.00002010,
    pnl: "+$6.75",
    pnlPercent: "+6.3%",
    stopLoss: 0.00002300,
    takeProfit: 0.00001800
  }
];

// Trading History
export const tradingHistory = [
  {
    id: 1,
    time: "09:32:01 AM",
    pair: "BTC/USDC",
    type: "BUY",
    price: 43150,
    amount: 0.125,
    status: "Completed"
  },
  {
    id: 2,
    time: "08:15:42 AM",
    pair: "SOL/USDC",
    type: "SELL",
    price: 149.85,
    amount: 3.5,
    status: "Completed"
  },
  {
    id: 3,
    time: "Yesterday",
    pair: "ETH/USDC",
    type: "BUY",
    price: 2254.75,
    amount: 0.75,
    status: "Completed"
  },
  {
    id: 4,
    time: "Yesterday",
    pair: "BONK/USDC",
    type: "SELL",
    price: 0.0000235,
    amount: 250000,
    status: "Failed"
  }
];

// Order Book
export const orderBookBids = [
  { price: 42950.00, amount: 1.2546 },
  { price: 42925.50, amount: 0.7823 },
  { price: 42900.25, amount: 2.1254 },
  { price: 42875.75, amount: 1.0145 },
  { price: 42850.00, amount: 3.5478 },
  { price: 42825.25, amount: 0.9871 },
  { price: 42800.50, amount: 2.3254 },
  { price: 42775.25, amount: 1.7856 }
];

export const orderBookAsks = [
  { price: 43000.00, amount: 0.9823 },
  { price: 43025.50, amount: 1.2546 },
  { price: 43050.25, amount: 0.5478 },
  { price: 43075.75, amount: 1.9871 },
  { price: 43100.00, amount: 0.7845 },
  { price: 43125.25, amount: 2.1458 },
  { price: 43150.50, amount: 0.6987 },
  { price: 43175.25, amount: 1.3254 }
]; 