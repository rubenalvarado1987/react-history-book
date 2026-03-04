import './StatBadge.css';

type Variant = 'primary' | 'success' | 'warning' | 'danger';

interface StatBadgeProps {
  label?: string;
  number?: string;
  subtitle?: string;
  icon?: string;
  variant?: Variant;
}

const iconMap: Record<string, string> = {
  trending_up: '📈',
  people: '👥',
  warning: '⚠️',
};

export default function StatBadge({ label = 'Stat', number = '0', subtitle, icon = 'trending_up', variant = 'primary' }: StatBadgeProps) {
  return (
    <div className={`stat-badge stat-${variant}`}>
      <div className="stat-icon">
        <span>{iconMap[icon] ?? icon}</span>
      </div>
      <div className="stat-content">
        <div className="stat-label">{label}</div>
        <div className="stat-number">{number}</div>
        {subtitle && <div className="stat-subtitle">{subtitle}</div>}
      </div>
    </div>
  );
}
