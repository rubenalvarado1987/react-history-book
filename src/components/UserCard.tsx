import './UserCard.css';

interface UserCardProps {
  name?: string;
  role?: string;
  bio?: string;
  followers?: number;
  following?: number;
  posts?: number;
  avatarColor?: string;
  isFollowing?: boolean;
}

export default function UserCard({
  name = 'John Doe',
  role = 'Product Designer',
  bio = 'Passionate about creating beautiful and functional digital experiences.',
  followers = 1200,
  following = 456,
  posts = 89,
  avatarColor = '#667eea',
}: UserCardProps) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="user-card">
      <div className="user-header">
        <div className="user-avatar" style={{ backgroundColor: avatarColor }}>
          {initials}
        </div>
        <div className="user-info">
          <h3>{name}</h3>
          <p className="role">{role}</p>
        </div>
      </div>

      <div className="user-stats">
        <div className="stat">
          <div className="stat-value">{followers.toLocaleString()}</div>
          <div className="stat-label">Followers</div>
        </div>
        <div className="stat">
          <div className="stat-value">{following.toLocaleString()}</div>
          <div className="stat-label">Following</div>
        </div>
        <div className="stat">
          <div className="stat-value">{posts}</div>
          <div className="stat-label">Posts</div>
        </div>
      </div>

      <p className="bio">{bio}</p>

      <div className="user-actions">
        <button className="btn-message">Message</button>
        <button className="btn-connect">Connect</button>
      </div>
    </div>
  );
}
