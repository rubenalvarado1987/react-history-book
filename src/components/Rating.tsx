import './Rating.css';

interface RatingProps {
  rating?: number;
  reviewCount?: number;
}

export default function Rating({ rating = 0, reviewCount }: RatingProps) {
  return (
    <div className="rating-wrapper">
      <div className="stars">
        {[1, 2, 3, 4, 5].map(star => (
          <span key={star} className={`star ${star <= rating ? 'filled' : 'empty'}`}>
            ★
          </span>
        ))}
      </div>
      <span className="rating-text">{rating} / 5</span>
      {reviewCount !== undefined && (
        <span className="rating-count">({reviewCount} reviews)</span>
      )}
    </div>
  );
}
