import { useAlerts } from '../services/alertService';
import AlertBanner from './AlertBanner';
import './AlertCenter.css';

export default function AlertCenter() {
  const { alerts, show, dismiss } = useAlerts();

  const showAlert = (sev: 'info' | 'success' | 'warning' | 'danger') => {
    const map = {
      info: { title: 'Info', message: 'Mensaje informativo', severity: 'info' as const, timeout: 4000 },
      success: { title: 'Success', message: 'Operación completada', severity: 'success' as const, timeout: 4000 },
      warning: { title: 'Warning', message: 'Atención requerida', severity: 'warning' as const, timeout: 6000 },
      danger: { title: 'Error', message: 'Ocurrió un error', severity: 'danger' as const, timeout: 8000 },
    };
    show(map[sev]);
  };

  return (
    <div className="alert-center">
      <div className="alert-controls">
        <button className="btn-outline-info" onClick={() => showAlert('info')}>Show Info</button>
        <button className="btn-outline-success" onClick={() => showAlert('success')}>Show Success</button>
        <button className="btn-outline-warning" onClick={() => showAlert('warning')}>Show Warning</button>
        <button className="btn-outline-danger" onClick={() => showAlert('danger')}>Show Error</button>
      </div>
      <div className="alerts-list">
        {alerts.map(a => (
          <AlertBanner
            key={a.id}
            title={a.title}
            message={a.message}
            severity={a.severity}
            onClose={() => dismiss(a.id)}
          />
        ))}
      </div>
    </div>
  );
}
