import './Badge.css';

type Variant = 'primary' | 'success' | 'warning' | 'danger' | 'secondary';
type Size = 'small' | 'medium' | 'large';

interface BadgeProps {
  label?: string;
  variant?: Variant;
  size?: Size;
  icon?: string;
}

const iconMap: Record<string, string> = {
  check_circle: '✅',
  schedule: '🕐',
  block: '🚫',
  new_releases: '🆕',
  star: '⭐',
};

export default function Badge({ label = 'Badge', variant = 'primary', size = 'medium', icon }: BadgeProps) {
  return (
    <span className={`badge badge-${variant} badge-${size}`}>
      {icon && <span className="badge-icon">{iconMap[icon] ?? icon}</span>}
      {label}
    </span>
  );
}
