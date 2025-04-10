import { systemStatus } from '../lib/mockData';

interface StatusItemProps {
  name: string;
  status: string;
  color: string;
}

const StatusItem = ({ name, status, color }: StatusItemProps) => {
  return (
    <div className="bg-gray-700 p-3 rounded-lg">
      <div className="flex items-center">
        <div className={`w-3 h-3 bg-${color}-500 rounded-full mr-2`}></div>
        <span className="text-white">{name}: {status}</span>
      </div>
    </div>
  );
};

export default function SystemStatus() {
  return (
    <div className="mb-6 bg-gray-800 rounded-lg p-4">
      <h2 className="text-lg font-semibold text-white mb-4">System Status</h2>
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(systemStatus).map(([key, value]) => (
          <StatusItem 
            key={key}
            name={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
            status={value.status}
            color={value.color}
          />
        ))}
      </div>
    </div>
  );
} 