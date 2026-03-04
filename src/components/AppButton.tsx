import './AppButton.css';

type Variant = 'primary' | 'secondary' | 'success' | 'danger' | 'outline' | 'ghost';
type Size = 'small' | 'medium' | 'large';

interface ButtonProps {
  label?: string;
  variant?: Variant;
  size?: Size;
  icon?: string;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  onClick?: () => void;
}

const iconMap: Record<string, string> = {
  save: '💾',
  delete: '🗑️',
  edit: '✏️',
  download: '⬇️',
};

export default function AppButton({
  label = 'Button',
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  disabled = false,
  onClick,
}: ButtonProps) {
  const iconEl = icon ? <span className="btn-icon">{iconMap[icon] ?? icon}</span> : null;

  return (
    <button
      className={`app-btn btn-${variant} btn-${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && iconEl}
      {label}
      {icon && iconPosition === 'right' && iconEl}
    </button>
  );
}
