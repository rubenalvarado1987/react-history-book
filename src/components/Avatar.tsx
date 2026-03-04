import './Avatar.css';

type Size = 'small' | 'medium' | 'large' | 'xlarge';

interface AvatarProps {
  size?: Size;
  backgroundColor?: string;
  initials?: string;
  icon?: string;
  image?: string;
}

export default function Avatar({ size = 'medium', backgroundColor = '#1f2937', initials, icon, image }: AvatarProps) {
  return (
    <div className={`avatar avatar-${size}`} style={{ backgroundColor }}>
      {image ? (
        <img src={image} alt="Avatar" />
      ) : initials ? (
        <span className="avatar-initials">{initials}</span>
      ) : icon ? (
        <span className="avatar-icon">👤</span>
      ) : null}
    </div>
  );
}
