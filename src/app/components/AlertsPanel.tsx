"use client";

import { alertData } from '../lib/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { 
  CheckCircle, 
  AlertTriangle, 
  AlertCircle 
} from 'lucide-react';

interface AlertItemProps {
  type: string;
  message: string;
  timestamp: string;
}

const AlertItem = ({ type, message, timestamp }: AlertItemProps) => {
  // Map alert types to styling and icons
  const alertStyles: Record<string, { variant: string, icon: React.ReactNode }> = {
    error: { 
      variant: "destructive", 
      icon: <AlertCircle className="h-4 w-4" /> 
    },
    warning: { 
      variant: "default", 
      icon: <AlertTriangle className="h-4 w-4 text-yellow-500" /> 
    },
    success: { 
      variant: "default", 
      icon: <CheckCircle className="h-4 w-4 text-green-500" /> 
    }
  };

  const { variant, icon } = alertStyles[type] || alertStyles.warning;

  return (
    <Alert variant={variant as "default" | "destructive"} className="mb-2">
      <div className="flex items-start gap-2">
        {icon}
        <div>
          <AlertTitle>{message}</AlertTitle>
          <AlertDescription className="text-xs text-muted-foreground">{timestamp}</AlertDescription>
        </div>
      </div>
    </Alert>
  );
};

export default function AlertsPanel() {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
} 