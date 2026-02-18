import { googleReviews, googleRatingSummary } from '../data/testimonials';
import { FaStar, FaStarHalfAlt, FaGoogle } from 'react-icons/fa';

const TestimonialSlider = () => {
    // Duplicate reviews for seamless infinite scroll
    const duplicatedReviews = [...googleReviews, ...googleReviews];

    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase();
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} className="review-star review-star-filled" />);
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" className="review-star review-star-filled" />);
        }
        const remaining = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < remaining; i++) {
            stars.push(<FaStar key={`empty-${i}`} className="review-star review-star-empty" />);
        }
        return stars;
    };

    return (
        <section className="section section-alt testimonial-section">
            <div className="container text-center" style={{ marginBottom: '2rem' }}>
                <h2>Amazing Success Stories</h2>
                <p>Real reviews from our valued patients on Google</p>

                {/* Google Rating Summary Badge */}
                <div className="google-rating-badge">
                    <FaGoogle className="google-icon" />
                    <div className="google-rating-info">
                        <div className="google-rating-stars">
                            <span className="google-rating-number">{googleRatingSummary.averageRating}</span>
                            <div className="stars-row">
                                {renderStars(googleRatingSummary.averageRating)}
                            </div>
                        </div>
                        <span className="google-rating-count">
                            Based on {googleRatingSummary.totalReviews} reviews
                        </span>
                    </div>
                    <a
                        href={googleRatingSummary.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="google-write-review"
                    >
                        Write a review
                    </a>
                </div>
            </div>

            <div className="testimonial-track">
                {duplicatedReviews.map((review, index) => (
                    <div key={`${review.id}-${index}`} className="testimonial-card google-review-card">
                        <div className="testimonial-header">
                            <div className="testimonial-avatar">
                                {review.profilePhoto ? (
                                    <img src={review.profilePhoto} alt={review.name} className="review-photo" />
                                ) : (
                                    getInitials(review.name)
                                )}
                            </div>
                            <div>
                                <div className="testimonial-name">{review.name}</div>
                                <div className="review-time">{review.relativeTime}</div>
                            </div>
                            <FaGoogle className="review-google-icon" />
                        </div>

                        <div className="review-stars-row">
                            {renderStars(review.rating)}
                        </div>

                        <p className="testimonial-text">"{review.text}"</p>

                        {review.treatment && (
                            <span className="review-treatment-tag">{review.treatment}</span>
                        )}
                    </div>
                ))}
            </div>

            {/* Powered by Google attribution */}
            <div className="google-attribution">
                <FaGoogle style={{ fontSize: '0.85rem' }} />
                <span>Powered by Google Reviews</span>
            </div>
        </section>
    );
};

export default TestimonialSlider;
