import { createContext, useContext, useState, useCallback } from 'react';

export type AlertSeverity = 'success' | 'warning' | 'danger' | 'info';

export interface AlertItem {
  id: string;
  title: string;
  message: string;
  severity: AlertSeverity;
  timeout?: number;
}

export interface AlertContextValue {
  alerts: AlertItem[];
  show: (alert: Omit<AlertItem, 'id'>) => string;
  dismiss: (id: string) => void;
  clear: () => void;
}

export const AlertContext = createContext<AlertContextValue>({
  alerts: [],
  show: () => '',
  dismiss: () => {},
  clear: () => {},
});

export function useAlertService(): AlertContextValue {
  const [alerts, setAlerts] = useState<AlertItem[]>([]);

  const show = useCallback((alert: Omit<AlertItem, 'id'>): string => {
    const id = Math.random().toString(36).slice(2, 9);
    const item: AlertItem = { id, ...alert };
    setAlerts(prev => [item, ...prev]);

    if (alert.timeout && alert.timeout > 0) {
      setTimeout(() => {
        setAlerts(prev => prev.filter(a => a.id !== id));
      }, alert.timeout);
    }

    return id;
  }, []);

  const dismiss = useCallback((id: string) => {
    setAlerts(prev => prev.filter(a => a.id !== id));
  }, []);

  const clear = useCallback(() => {
    setAlerts([]);
  }, []);

  return { alerts, show, dismiss, clear };
}

export function useAlerts(): AlertContextValue {
  return useContext(AlertContext);
}
