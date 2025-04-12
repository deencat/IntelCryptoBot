"use client";

import { kpiData } from '../lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface KpiItemProps {
  name: string;
  value: string;
  color: string;
}

const KpiItem = ({ name, value, color }: KpiItemProps) => {
  // Map color names to text color classes
  const colorMap: Record<string, string> = {
    green: "text-green-500",
    red: "text-red-500",
    yellow: "text-yellow-500",
    blue: "text-blue-500",
    purple: "text-purple-500",
    gray: "text-gray-500"
  };

  const textColor = colorMap[color] || "text-primary";

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`${textColor} text-2xl font-bold`}>{value}</p>
      </CardContent>
    </Card>
  );
};

interface KpiData {
  [key: string]: {
    value: string;
    color: string;
  };
}

export default function KpiDisplays() {
  // Ensure we're properly handling the kpiData type
  const typedKpiData = kpiData as KpiData;
  
  return (
    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Object.entries(typedKpiData).map(([key, item]) => (
        <KpiItem 
          key={key}
          name={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
          value={item.value}
          color={item.color}
        />
      ))}
    </div>
  );
} 