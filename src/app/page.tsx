import React from 'react';
import SystemStatus from './components/SystemStatus';
import KpiDisplays from './components/KpiDisplays';
import AlertsPanel from './components/AlertsPanel';
import Header from './components/Header';
import ActivePositions from './components/ActivePositions';
import PerformanceCharts from './components/PerformanceCharts';
import RiskMetrics from './components/RiskMetrics';
import MainLayout from './components/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <div className="grid gap-6">
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
    </MainLayout>
  )
} 