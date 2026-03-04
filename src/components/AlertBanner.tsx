import './AlertBanner.css';

type Severity = 'success' | 'warning' | 'danger' | 'info';

interface AlertBannerProps {
  title?: string;
  message?: string;
  severity?: Severity;
  onClose?: () => void;
}

const iconMap: Record<Severity, string> = {
  success: '✅',
  warning: '⚠️',
  danger: '❌',
  info: 'ℹ️',
};

export default function AlertBanner({
  title = 'Info',
  message = 'This is an informational message.',
  severity = 'info',
  onClose,
}: AlertBannerProps) {
  return (
    <div className={`alert-banner alert-${severity}`}>
      <span className="alert-icon">{iconMap[severity]}</span>
      <div className="alert-content">
        <strong>{title}</strong>
        <p>{message}</p>
      </div>
      {onClose && (
        <button className="alert-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
      )}
    </div>
  );
}
