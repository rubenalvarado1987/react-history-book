import './FeatureCard.css';

type Layout = 'vertical' | 'horizontal';

interface MetaItem {
  icon: string;
  label: string;
}

interface FeatureCardProps {
  icon?: string;
  iconColor?: string;
  title?: string;
  description?: string;
  layout?: Layout;
  showAction?: boolean;
  meta?: MetaItem[];
}

const iconMap: Record<string, string> = {
  lightning_bolt: '⚡',
  shield: '🛡️',
  palette: '🎨',
  speed: '🚀',
  storage: '💾',
  verified: '✅',
  vpn_lock: '🔒',
  design_services: '🎨',
  code: '💻',
  arrow_forward: '→',
};

export default function FeatureCard({
  icon = 'star',
  iconColor = '#667eea',
  title = 'Feature Title',
  description = 'Feature description goes here',
  layout = 'vertical',
  showAction = true,
  meta,
}: FeatureCardProps) {
  return (
    <div className={`feature-card feature-${layout}`}>
      {layout === 'vertical' && (
        <div className="feature-header">
          <span className="feature-icon-large" style={{ color: iconColor }}>
            {iconMap[icon] ?? icon}
          </span>
        </div>
      )}

      <div className="feature-content">
        {layout === 'horizontal' && (
          <div className="feature-icon-h" style={{ backgroundColor: iconColor }}>
            <span>{iconMap[icon] ?? icon}</span>
          </div>
        )}

        <div className="feature-text">
          <h3>{title}</h3>
          <p>{description}</p>

          {meta && (
            <div className="feature-meta">
              {meta.map((item, i) => (
                <span key={i} className="meta-item">
                  <span>{iconMap[item.icon] ?? item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {showAction && (
        <div className="feature-actions">
          <button className="feature-action-btn">→</button>
        </div>
      )}
    </div>
  );
}
