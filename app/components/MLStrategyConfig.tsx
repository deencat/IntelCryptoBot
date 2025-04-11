'use client';

import React, { useState } from 'react';

interface StrategyParams {
  rewardType: 'raw' | 'sharpe' | 'sortino';
  maxDrawdownLimit: number;
  riskAversion: number;
  transactionCostWeight: number;
  positionSizingMethod: 'fixed' | 'kelly' | 'confidence';
  timeframeMinutes: number;
  modelConfidenceThreshold: number;
}

export default function MLStrategyConfig() {
  const [params, setParams] = useState<StrategyParams>({
    rewardType: 'sharpe',
    maxDrawdownLimit: 15,
    riskAversion: 0.5,
    transactionCostWeight: 0.2,
    positionSizingMethod: 'confidence',
    timeframeMinutes: 60,
    modelConfidenceThreshold: 0.7
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setParams(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Strategy parameters updated:', params);
    // In a real implementation, this would save to backend or localStorage
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-white">ML Strategy Configuration</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Reward Function Type
          </label>
          <select 
            name="rewardType"
            value={params.rewardType}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
          >
            <option value="raw">Raw Returns</option>
            <option value="sharpe">Sharpe Ratio</option>
            <option value="sortino">Sortino Ratio</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Maximum Drawdown Limit (%)
          </label>
          <input 
            type="range"
            name="maxDrawdownLimit"
            min="5"
            max="30"
            step="1"
            value={params.maxDrawdownLimit}
            onChange={handleChange}
            className="w-full"
          />
          <div className="text-sm text-gray-400 text-right">{params.maxDrawdownLimit}%</div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Risk Aversion Factor
          </label>
          <input 
            type="range"
            name="riskAversion"
            min="0.1"
            max="1"
            step="0.1"
            value={params.riskAversion}
            onChange={handleChange}
            className="w-full"
          />
          <div className="text-sm text-gray-400 text-right">{params.riskAversion}</div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Transaction Cost Weight
          </label>
          <input 
            type="range"
            name="transactionCostWeight"
            min="0"
            max="1"
            step="0.1"
            value={params.transactionCostWeight}
            onChange={handleChange}
            className="w-full"
          />
          <div className="text-sm text-gray-400 text-right">{params.transactionCostWeight}</div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Position Sizing Method
          </label>
          <select 
            name="positionSizingMethod"
            value={params.positionSizingMethod}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
          >
            <option value="fixed">Fixed Size</option>
            <option value="kelly">Kelly Criterion</option>
            <option value="confidence">Model Confidence</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Analysis Timeframe (minutes)
          </label>
          <select 
            name="timeframeMinutes"
            value={params.timeframeMinutes}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
          >
            <option value="1">1 min</option>
            <option value="5">5 min</option>
            <option value="15">15 min</option>
            <option value="30">30 min</option>
            <option value="60">1 hour</option>
            <option value="240">4 hours</option>
            <option value="1440">1 day</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Model Confidence Threshold
          </label>
          <input 
            type="range"
            name="modelConfidenceThreshold"
            min="0.5"
            max="0.95"
            step="0.05"
            value={params.modelConfidenceThreshold}
            onChange={handleChange}
            className="w-full"
          />
          <div className="text-sm text-gray-400 text-right">{params.modelConfidenceThreshold}</div>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
          >
            Save Configuration
          </button>
        </div>
      </form>
    </div>
  );
} 