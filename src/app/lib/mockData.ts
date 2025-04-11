// System Status
export const systemStatus = {
  botStatus: { status: "Running", color: "green" },
  solanaNetwork: { status: "Connected", color: "green" },
  deepseekAPI: { status: "Connected", color: "green" },
  dataFeed: { status: "Partial", color: "yellow" }
};

// KPI Data
export const kpiData = {
  totalPnL: { value: "+$12,450.32", color: "green" },
  accountEquity: { value: "$105,320.18", color: "white" },
  currentExposure: { value: "35%", color: "white" },
  drawdown: { value: "-3.2%", color: "red" }
};

// Alert Data
export const alertData = [
  {
    type: "error",
    message: "API Error: Rate limit exceeded on DeepSeek API",
    timestamp: "10:32:15 AM"
  },
  {
    type: "warning",
    message: "Warning: SOL/USDC liquidity below threshold",
    timestamp: "09:47:22 AM"
  },
  {
    type: "success",
    message: "Trade Executed: Bought 5 SOL at $153.24",
    timestamp: "09:32:01 AM"
  }
];

// Position Data
export const positionData = [
  {
    symbol: "SOL/USDC",
    direction: "LONG",
    entryPrice: 153.24,
    currentPrice: 158.75,
    size: 5,
    pnl: "+$27.55",
    pnlPercent: "+3.6%",
    stopLoss: 148.50,
    takeProfit: 170.00
  },
  {
    symbol: "BONK/USDC",
    direction: "SHORT",
    entryPrice: 0.00002145,
    currentPrice: 0.00002010,
    size: 500000,
    pnl: "+$6.75",
    pnlPercent: "+6.3%",
    stopLoss: 0.00002300,
    takeProfit: 0.00001800
  }
];

// Performance Data (for charts)
export const performanceData = {
  equityCurve: [
    { date: "2023-04-05", value: 100000 },
    { date: "2023-04-06", value: 100250 },
    { date: "2023-04-07", value: 99800 },
    { date: "2023-04-08", value: 101200 },
    { date: "2023-04-09", value: 102400 },
    { date: "2023-04-10", value: 105320 }
  ],
  dailyPnL: [
    { date: "2023-04-05", value: 250 },
    { date: "2023-04-06", value: -450 },
    { date: "2023-04-07", value: 1400 },
    { date: "2023-04-08", value: 1200 },
    { date: "2023-04-09", value: 2920 }
  ],
  drawdownChart: [
    { date: "2023-04-05", value: 0 },
    { date: "2023-04-06", value: -0.25 },
    { date: "2023-04-07", value: -0.45 },
    { date: "2023-04-08", value: -0.05 },
    { date: "2023-04-09", value: 0 },
    { date: "2023-04-10", value: -3.2 }
  ]
};

// System Log Data
export const logData = [
  {
    timestamp: "10:32:15 AM",
    type: "ERROR",
    message: "API Error: Rate limit exceeded on DeepSeek API"
  },
  {
    timestamp: "10:15:05 AM",
    type: "INFO",
    message: "Solana RPC endpoint latency: 250ms"
  },
  {
    timestamp: "09:47:22 AM",
    type: "WARNING",
    message: "SOL/USDC liquidity below threshold"
  },
  {
    timestamp: "09:32:01 AM",
    type: "TRADE",
    message: "Executed: BUY 5 SOL at $153.24, SL: $148.50, TP: $170.00"
  },
  {
    timestamp: "09:30:45 AM",
    type: "SIGNAL",
    message: "RL Strategy signaled BUY on SOL/USDC with 75% confidence"
  },
  {
    timestamp: "09:15:30 AM",
    type: "INFO",
    message: "DeepSeek analysis complete: Bullish on SOL (sentiment: 0.78)"
  }
]; 