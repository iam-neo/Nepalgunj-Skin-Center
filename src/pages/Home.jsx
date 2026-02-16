import { Link } from 'react-router-dom';
import HeroGradient from '../components/HeroGradient';
import ComparisonSlider from '../components/ComparisonSlider';
import TestimonialSlider from '../components/TestimonialSlider';
import { concerns } from '../data/services';

const Home = () => {
    return (
        <>
            <HeroGradient />

            {/* Concerns Grid */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '2rem' }}>
                        <h2>What is your concern?</h2>
                        <p>We offer specialized solutions for all your aesthetic needs.</p>
                    </div>

                    <div className="grid grid-4">
                        {concerns.map((concern, index) => (
                            <Link key={index} to={concern.link} className="concern-item">
                                <span className="concern-icon">{concern.icon}</span>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span className="concern-title">{concern.title}</span>
                                    {concern.subtitle && (
                                        <span style={{
                                            fontSize: '0.95rem',
                                            color: 'var(--text-secondary)',
                                            fontWeight: '400',
                                            marginTop: '0.25rem'
                                        }}>
                                            {concern.subtitle}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Real Results */}
            <section className="section section-alt">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>Real Results</h2>
                        <p>See the difference our treatments can make.</p>
                    </div>

                    <div className="grid grid-2" style={{ alignItems: 'center' }}>
                        <div style={{ height: '400px' }}>
                            <ComparisonSlider
                                beforeImage="/images/bna/7.jpg"
                                afterImage="/images/bna/8.jpg"
                                beforeLabel="Before Treatment"
                                afterLabel="After 8 Months"
                            />
                            {/* Note: using same image for demo as I don't have a perfect pair yet, but functionality is there */}
                        </div>
                        <div>
                            <h3>Hair Restoration Success</h3>
                            <p className="lead">
                                "I never thought I could get my natural hair back. The FUE procedure was painless and the results speak for themselves."
                            </p>
                            <p><strong>- Dr. Verma, Hair Transplant Patient</strong></p>
                            <Link to="/gallery" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                                View Full Gallery
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>Why Choose Us?</h2>
                        <p>We are dedicated to providing the highest standard of dermatological care.</p>
                    </div>

                    <div className="grid grid-3">
                        <div className="feature-card">
                            <div className="feature-icon">👨‍⚕️</div>
                            <h3>Expert Team</h3>
                            <p>Our clinics are led by highly qualified and experienced dermatologists and cosmetic surgeons.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔬</div>
                            <h3>Advanced Technology</h3>
                            <p>We use US-FDA approved lasers and the latest medical equipment for safe and effective results.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💖</div>
                            <h3>Personalized Care</h3>
                            <p>Every skin is unique. We customize treatment plans tailored specifically to your needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Doctor Section */}
            <section className="section">
                <div className="container">
                    <div className="doctor-section">
                        <div className="doctor-image">
                            <img src="/images/front/Doc.jpg" alt="Dr. Abhishek Arjel" />
                        </div>
                        <div className="doctor-info">
                            <h2>Meet Our Expert</h2>
                            <p>Led by experienced dermatologists and surgeons committed to your care.</p>

                            <div className="doctor-highlight">
                                <h4>Dr. Abhishek Arjel</h4>
                                <p className="title">Cosmetic Dermatologist & Hair Transplant Surgeon</p>
                                <p>
                                    With a passion for restoring confidence, Dr. Arjel brings over 10 years of
                                    specialized experience in clinical and aesthetic dermatology. He is renowned
                                    for his artistic approach to facial sculpting and natural-looking hair restoration.
                                </p>
                                <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
                                    "My goal is to enhance your natural beauty, not change it. I believe in
                                    personalized treatments that align with your unique features and lifestyle."
                                </p>
                                <p style={{ marginTop: '1rem' }}>
                                    <strong>Specializations:</strong> Acne & Acne Scar Treatments, Melasma Treatment,
                                    Anti-Aging (Botox, Fillers, Thread Lifts, PRP), and Hair Transplant.
                                </p>
                            </div>

                            <Link to="/about" className="btn btn-primary">
                                View Full Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <TestimonialSlider />

            {/* CTA Section */}
            <section className="section section-dark text-center" >
                <div className="container">
                    <h2>Ready to Transform Your Skin?</h2>
                    <p style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Schedule a consultation with our experts and take the first step towards your skincare goals.
                    </p>
                    <Link to="/contact" className="btn btn-white">
                        Book Your Appointment
                    </Link>
                </div>
            </section >
        </>
    );
};

export default Home;
