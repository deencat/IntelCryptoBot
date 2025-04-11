// Mock Solana token data for the dashboard

export const solanaTokens = {
  SOL: {
    name: "Solana",
    symbol: "SOL",
    logo: "/solana-logo.png",
    price: 164.35,
    priceChange24h: 5.2,
    marketCap: 75842000000,
    volume24h: 3245000000,
  },
  BONK: {
    name: "Bonk",
    symbol: "BONK",
    logo: "/bonk-logo.png",
    price: 0.00002154,
    priceChange24h: -3.8,
    marketCap: 1245000000,
    volume24h: 98700000,
  },
  JTO: {
    name: "Jito",
    symbol: "JTO",
    logo: "/jito-logo.png",
    price: 3.85,
    priceChange24h: 1.2,
    marketCap: 435000000,
    volume24h: 45600000,
  },
  PYTH: {
    name: "Pyth Network",
    symbol: "PYTH",
    logo: "/pyth-logo.png",
    price: 0.45,
    priceChange24h: -0.8,
    marketCap: 520000000,
    volume24h: 32400000,
  },
};

// Mock token balances for the connected wallet
export const walletBalances = {
  SOL: 12.45,
  BONK: 1500000,
  JTO: 25.75,
  PYTH: 120.5,
  USDC: 1050.42,
};

// Mock transaction history for the wallet
export const transactionHistory = [
  {
    id: "tx1",
    type: "SWAP",
    from: { symbol: "SOL", amount: 2.5 },
    to: { symbol: "USDC", amount: 410.75 },
    timestamp: "2023-04-10T09:32:01Z",
    status: "CONFIRMED",
    fee: 0.000005
  },
  {
    id: "tx2",
    type: "BUY",
    from: { symbol: "USDC", amount: 100 },
    to: { symbol: "BONK", amount: 4500000 },
    timestamp: "2023-04-09T15:45:22Z",
    status: "CONFIRMED",
    fee: 0.000005
  },
  {
    id: "tx3",
    type: "TRANSFER",
    from: { symbol: "SOL", amount: 1.0 },
    to: { symbol: "SOL", amount: 1.0, recipient: "8JWB...XyZ2" },
    timestamp: "2023-04-08T12:11:15Z",
    status: "CONFIRMED",
    fee: 0.000005
  },
];

// Mock staking data
export const stakingData = {
  stakedAmount: 5.25,
  validator: "Jito MEV",
  apr: 6.8,
  pendingRewards: 0.0125,
  lockupPeriod: "None",
};

// Mock liquidity pools
export const liquidityPools = [
  {
    name: "SOL-USDC",
    protocol: "Raydium",
    position: {
      token1: { symbol: "SOL", amount: 1.5 },
      token2: { symbol: "USDC", amount: 246.52 },
    },
    totalValueLocked: 485.12,
    apr: 12.4,
    earningsToDate: 2.35
  },
  {
    name: "BONK-USDC",
    protocol: "Orca",
    position: {
      token1: { symbol: "BONK", amount: 750000 },
      token2: { symbol: "USDC", amount: 16.15 },
    },
    totalValueLocked: 32.30,
    apr: 24.8,
    earningsToDate: 0.85
  }
]; 