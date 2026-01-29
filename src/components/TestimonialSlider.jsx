import { testimonials } from '../data/testimonials';

const TestimonialSlider = () => {
    // Duplicate testimonials for seamless infinite scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase();
    };

    return (
        <section className="section section-alt testimonial-section">
            <div className="container text-center" style={{ marginBottom: '2rem' }}>
                <h2>Amazing Success Stories</h2>
                <p>Hear from our satisfied patients</p>
            </div>

            <div className="testimonial-track">
                {duplicatedTestimonials.map((testimonial, index) => (
                    <div key={`${testimonial.id}-${index}`} className="testimonial-card">
                        <div className="testimonial-header">
                            <div className="testimonial-avatar">
                                {getInitials(testimonial.name)}
                            </div>
                            <div>
                                <div className="testimonial-name">{testimonial.name}</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--primary-blue)' }}>
                                    {testimonial.treatment}
                                </div>
                            </div>
                        </div>
                        <p className="testimonial-text">"{testimonial.text}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialSlider;
