import React from 'react';
import SystemStatus from './components/SystemStatus';
import KpiDisplays from './components/KpiDisplays';
import AlertsPanel from './components/AlertsPanel';
import Header from './components/Header';
import ActivePositions from './components/ActivePositions';
import PerformanceCharts from './components/PerformanceCharts';
import RiskMetrics from './components/RiskMetrics';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 p-4">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-white">IntelCryptoBot</h1>
            <p className="text-sm text-gray-400">Solana Trading Dashboard</p>
          </div>
          
          <nav className="space-y-2 mt-4">
            <Link href="/" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              <span>Dashboard</span>
            </Link>
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              <span>Positions</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              <span>Performance</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              <span>Logs</span>
            </a>
            <Link href="/settings" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              <span>Settings</span>
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1 overflow-auto p-6">
          {/* System Status Overview */}
          <SystemStatus />
          
          {/* KPI Displays */}
          <KpiDisplays />
          
          {/* Alerts Panel */}
          <AlertsPanel />
          
          {/* Active Positions */}
          <ActivePositions />
          
          {/* Performance Charts */}
          <PerformanceCharts />
          
          {/* Risk Metrics */}
          <RiskMetrics />
        </div>
      </div>
    </main>
  )
} 