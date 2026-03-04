import './Progress.css';

type Variant = 'primary' | 'success' | 'warning' | 'danger' | 'info';

interface ProgressProps {
  percentage?: number;
  label?: string;
  variant?: Variant;
}

export default function Progress({ percentage = 0, label, variant = 'primary' }: ProgressProps) {
  return (
    <div className="progress-wrapper">
      <div className="progress-header">
        {label && <label className="progress-label">{label}</label>}
        <span className="progress-value">{percentage}%</span>
      </div>
      <div className={`progress-bar progress-${variant}`}>
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
