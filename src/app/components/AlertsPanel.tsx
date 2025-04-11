import { alertData } from '../lib/mockData';

interface AlertItemProps {
  type: string;
  message: string;
  timestamp: string;
}

const AlertItem = ({ type, message, timestamp }: AlertItemProps) => {
  return (
    <div className={`bg-${type}-900/20 border border-${type}-700 text-${type}-400 p-3 rounded-lg`}>
      <p className="font-medium">{message}</p>
      <p className="text-xs text-gray-400">{timestamp}</p>
    </div>
  );
};

export default function AlertsPanel() {
  return (
    <div className="mb-6 bg-gray-800 rounded-lg p-4">
      <h2 className="text-lg font-semibold text-white mb-4">Recent Alerts</h2>
      <div className="space-y-2">
        {alertData.map((alert, index) => (
          <AlertItem 
            key={index}
            type={alert.type}
            message={alert.message}
            timestamp={alert.timestamp}
          />
        ))}
      </div>
    </div>
  );
} 