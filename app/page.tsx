import SystemStatus from './components/SystemStatus';
import KpiDisplays from './components/KpiDisplays';
import AlertsPanel from './components/AlertsPanel';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 p-4">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-white">IntelCryptoBot</h1>
            <p className="text-sm text-gray-400">Solana Trading Dashboard</p>
          </div>
          
          <nav className="space-y-2">
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              <span>Positions</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              <span>Performance</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              <span>Logs</span>
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              <span>Settings</span>
            </a>
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
          
          {/* Placeholder for Performance Charts Widget */}
          <div className="mb-6 bg-gray-800 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-white mb-4">Performance Charts</h2>
            <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Chart Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 