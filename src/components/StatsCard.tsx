import './StatsCard.css';

type Variant = 'primary' | 'success' | 'warning' | 'danger';

interface StatsCardProps {
  title?: string;
  value?: string;
  changePercent?: number;
  isPositive?: boolean;
  icon?: string;
  variant?: Variant;
}

const iconMap: Record<string, string> = {
  shopping_cart: '🛒',
  people: '👥',
  trending_down: '📉',
  trending_up: '📈',
  error: '⚠️',
  attach_money: '💰',
  warning: '⚠️',
};

export default function StatsCard({
  title = 'Metric',
  value = '1,234',
  changePercent = 15,
  isPositive = true,
  icon = 'trending_up',
  variant = 'primary',
}: StatsCardProps) {
  return (
    <div className={`stats-card stats-${variant}`}>
      <div className="stats-header">
        <span className={`stats-icon icon-${variant}`}>{iconMap[icon] ?? icon}</span>
        <h3>{title}</h3>
      </div>
      <div className="stats-value">{value}</div>
      <div className={`stats-change ${isPositive ? 'positive' : 'negative'}`}>
        <span>{isPositive ? '📈' : '📉'}</span>
        <span>{Math.abs(changePercent)}% vs mes pasado</span>
      </div>
    </div>
  );
}
