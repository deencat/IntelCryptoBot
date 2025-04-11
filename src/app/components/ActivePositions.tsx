import React from 'react';
import { positionData } from '../lib/mockData';

export default function ActivePositions() {
  return (
    <div className="mb-6 bg-gray-800 rounded-lg p-4">
      <h2 className="text-lg font-semibold text-white mb-4">Active Positions</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">Symbol</th>
              <th className="px-4 py-3">Direction</th>
              <th className="px-4 py-3">Size</th>
              <th className="px-4 py-3">Entry Price</th>
              <th className="px-4 py-3">Current Price</th>
              <th className="px-4 py-3">PnL</th>
              <th className="px-4 py-3">PnL %</th>
              <th className="px-4 py-3">Stop Loss</th>
              <th className="px-4 py-3 rounded-tr-lg">Take Profit</th>
            </tr>
          </thead>
          <tbody>
            {positionData.map((position, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-700 hover:bg-gray-700"
              >
                <td className="px-4 py-3 font-medium text-white">
                  {position.symbol}
                </td>
                <td className={`px-4 py-3 ${position.direction === 'LONG' ? 'text-green-400' : 'text-red-400'}`}>
                  {position.direction}
                </td>
                <td className="px-4 py-3">
                  {position.size.toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  {position.symbol.includes('BONK') ? position.entryPrice.toFixed(8) : position.entryPrice.toFixed(2)}
                </td>
                <td className="px-4 py-3">
                  {position.symbol.includes('BONK') ? position.currentPrice.toFixed(8) : position.currentPrice.toFixed(2)}
                </td>
                <td className={`px-4 py-3 ${position.pnl.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {position.pnl}
                </td>
                <td className={`px-4 py-3 ${position.pnlPercent.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {position.pnlPercent}
                </td>
                <td className="px-4 py-3 text-red-400">
                  {position.symbol.includes('BONK') ? position.stopLoss.toFixed(8) : position.stopLoss.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-green-400">
                  {position.symbol.includes('BONK') ? position.takeProfit.toFixed(8) : position.takeProfit.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm">
          New Position
        </button>
      </div>
    </div>
  );
} 