"use client";

import React, { useState } from 'react';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { performanceData } from '../lib/mockData';

// We'll add tabs to switch between different chart types
const tabs = [
  { id: 'equity', label: 'Equity Curve' },
  { id: 'pnl', label: 'Daily P&L' },
  { id: 'drawdown', label: 'Drawdown' },
];

export default function PerformanceCharts() {
  const [activeTab, setActiveTab] = useState('equity');
  
  // Format date strings for display
  const formattedEquityCurve = performanceData.equityCurve.map(item => ({
    ...item,
    date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }));

  const formattedDailyPnL = performanceData.dailyPnL.map(item => ({
    ...item,
    date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }));

  const formattedDrawdownChart = performanceData.drawdownChart.map(item => ({
    ...item,
    date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }));
  
  return (
    <div className="mb-6 bg-gray-800 rounded-lg p-4">
      <h2 className="text-lg font-semibold text-white mb-4">Performance Charts</h2>
      
      {/* Chart tabs */}
      <div className="flex space-x-1 mb-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === tab.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Chart container with dynamic height */}
      <div className="bg-gray-700 rounded-lg p-4" style={{ height: 350 }}>
        {activeTab === 'equity' && (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={formattedEquityCurve}>
              <defs>
                <linearGradient id="colorEquity" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#666" />
              <XAxis dataKey="date" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff' }}
                labelStyle={{ color: '#fff' }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                name="Account Equity" 
                stroke="#3b82f6" 
                fillOpacity={1} 
                fill="url(#colorEquity)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
        
        {activeTab === 'pnl' && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={formattedDailyPnL}>
              <CartesianGrid strokeDasharray="3 3" stroke="#666" />
              <XAxis dataKey="date" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff' }}
                labelStyle={{ color: '#fff' }}
              />
              <Bar 
                dataKey="value" 
                name="Daily P&L" 
                fill="#10b981"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
        
        {activeTab === 'drawdown' && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={formattedDrawdownChart}>
              <CartesianGrid strokeDasharray="3 3" stroke="#666" />
              <XAxis dataKey="date" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff' }}
                labelStyle={{ color: '#fff' }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                name="Drawdown %" 
                stroke="#ef4444"
                strokeWidth={2} 
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
      
      {/* Chart insights */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="bg-gray-700 p-3 rounded-lg">
          <p className="text-xs text-gray-400">Max Drawdown</p>
          <p className="text-lg text-red-400">-4.5%</p>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg">
          <p className="text-xs text-gray-400">Win Rate</p>
          <p className="text-lg text-gray-100">68%</p>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg">
          <p className="text-xs text-gray-400">Sharpe Ratio</p>
          <p className="text-lg text-green-400">2.3</p>
        </div>
      </div>
    </div>
  );
} 