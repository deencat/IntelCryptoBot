import { kpiData } from '../lib/mockData';

interface KpiItemProps {
  name: string;
  value: string;
  color: string;
}

const KpiItem = ({ name, value, color }: KpiItemProps) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <p className="text-gray-400 text-sm">{name}</p>
      <p className={`text-${color}-500 text-2xl font-bold`}>{value}</p>
    </div>
  );
};

export default function KpiDisplays() {
  return (
    <div className="mb-6 grid grid-cols-4 gap-4">
      {Object.entries(kpiData).map(([key, value]) => (
        <KpiItem 
          key={key}
          name={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
          value={value.value}
          color={value.color}
        />
      ))}
    </div>
  );
} 