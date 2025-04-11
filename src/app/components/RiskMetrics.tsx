import React from 'react';

// Mock risk metrics data
const riskData = {
  maxRiskPerTrade: 1.0, // 1% of account
  currentExposure: 35.0, // 35% of account is deployed
  maxExposure: 50.0, // Maximum allowed exposure
  portfolioVar: 2.3, // Value at Risk over 1 day, 95% confidence
  correlationScore: 0.65, // Correlation between open positions
  drawdownLimit: 15.0, // Maximum allowed drawdown
  currentDrawdown: 3.2, // Current drawdown
  riskRewardRatio: 2.5, // Average risk/reward ratio
  leverageUsed: 0, // No leverage used in this strategy
};

// Progress bar component
function ProgressBar({ value, max, color }: { value: number, max: number, color: string }) {
  const percentage = Math.min((value / max) * 100, 100);
  
  return (
    <div className="h-2 w-full bg-gray-600 rounded-full overflow-hidden">
      <div 
        className={`h-full ${color}`} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}

export default function RiskMetrics() {
  return (
    <div className="mb-6 bg-gray-800 rounded-lg p-4">
      <h2 className="text-lg font-semibold text-white mb-4">Risk Metrics</h2>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Left column */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <p className="text-sm text-gray-400">Current Exposure</p>
              <p className="text-sm text-white">
                {riskData.currentExposure}% <span className="text-gray-500">/ {riskData.maxExposure}%</span>
              </p>
            </div>
            <ProgressBar 
              value={riskData.currentExposure} 
              max={riskData.maxExposure} 
              color={riskData.currentExposure > riskData.maxExposure * 0.9 ? "bg-amber-500" : "bg-blue-500"}
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <p className="text-sm text-gray-400">Current Drawdown</p>
              <p className="text-sm text-white">
                {riskData.currentDrawdown}% <span className="text-gray-500">/ {riskData.drawdownLimit}%</span>
              </p>
            </div>
            <ProgressBar 
              value={riskData.currentDrawdown} 
              max={riskData.drawdownLimit} 
              color={riskData.currentDrawdown > riskData.drawdownLimit * 0.7 ? "bg-red-500" : "bg-green-500"}
            />
          </div>
          
          <div className="bg-gray-700 p-3 rounded-lg">
            <div className="flex justify-between">
              <p className="text-sm text-gray-400">Value at Risk (1d, 95%)</p>
              <p className="text-sm text-white">${(riskData.portfolioVar).toLocaleString()}</p>
            </div>
          </div>
          
          <div className="bg-gray-700 p-3 rounded-lg">
            <div className="flex justify-between">
              <p className="text-sm text-gray-400">Max Risk Per Trade</p>
              <p className="text-sm text-white">{riskData.maxRiskPerTrade}%</p>
            </div>
          </div>
        </div>
        
        {/* Right column */}
        <div className="space-y-4">
          <div className="bg-gray-700 p-3 rounded-lg">
            <div className="flex justify-between">
              <p className="text-sm text-gray-400">Position Correlation</p>
              <p className="text-sm text-white">{riskData.correlationScore}</p>
            </div>
          </div>
          
          <div className="bg-gray-700 p-3 rounded-lg">
            <div className="flex justify-between">
              <p className="text-sm text-gray-400">Risk/Reward Ratio</p>
              <p className="text-sm text-white">{riskData.riskRewardRatio}</p>
            </div>
          </div>
          
          <div className="bg-gray-700 p-3 rounded-lg">
            <div className="flex justify-between">
              <p className="text-sm text-gray-400">Leverage Used</p>
              <p className="text-sm text-white">{riskData.leverageUsed}x</p>
            </div>
          </div>
          
          <div className="bg-gray-700 p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">Risk Status</p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <p className="text-sm text-white">Low</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 border-t border-gray-700 pt-4">
        <h3 className="text-sm font-medium text-gray-300 mb-3">Risk Limits</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-700 p-3 rounded-lg">
            <p className="text-xs text-gray-400">Max Drawdown</p>
            <p className="text-sm text-white">15%</p>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg">
            <p className="text-xs text-gray-400">Max Exposure</p>
            <p className="text-sm text-white">50%</p>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg">
            <p className="text-xs text-gray-400">Auto Deleveraging</p>
            <p className="text-sm text-white">Enabled at 10%</p>
          </div>
        </div>
      </div>
    </div>
  );
} 