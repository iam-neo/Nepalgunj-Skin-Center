import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>About Nepalgunj Skin Center</h1>
                    <p>Your trusted partner in dermatological excellence.</p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2>Our Mission</h2>
                            <p style={{ marginBottom: '2rem' }}>
                                We strive to provide affordable, accessible, and high-quality skin and hair
                                care services to the people of Nepalgunj and surrounding areas. Our commitment
                                is to deliver world-class treatments with compassion and expertise.
                            </p>
                            <h2>Our Vision</h2>
                            <p>
                                To be the leading center for aesthetic and clinical dermatology in Western Nepal,
                                known for patient satisfaction, clinical excellence, and innovative treatments.
                            </p>
                        </div>
                        <div>
                            <img
                                src="/images/hosp/hos.jpg"
                                alt="Clinic Interior"
                                style={{
                                    borderRadius: 'var(--radius-2xl)',
                                    boxShadow: 'var(--shadow-xl)',
                                    minHeight: '300px',
                                    objectFit: 'cover',
                                    backgroundColor: 'var(--light-gray)'
                                }}
                                onError={(e) => {
                                    e.target.style.minHeight = '300px';
                                    e.target.style.backgroundColor = 'var(--light-gray)';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section section-alt">
                <div className="container">
                    <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2>Our Story</h2>
                        <p>
                            Founded in 2015, Nepalgunj Skin Center began with a simple mission: to bring
                            advanced dermatological care to Western Nepal. What started as a small clinic
                            has grown into the region's premier destination for skin, hair, and aesthetic treatments.
                        </p>
                        <p>
                            Over the years, we have invested in state-of-the-art technology and continuous
                            education to ensure our patients receive the best possible care. Today, we are
                            proud to have helped thousands of patients achieve their skincare goals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Meet Our Experts */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>Meet Our Experts</h2>
                        <p>Dedicated professionals committed to your care</p>
                    </div>

                    <div className="grid grid-2">
                        {/* Dr. Abhishek Arjel */}
                        <div className="service-card">
                            <div style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                margin: '0 auto 1.5rem'
                            }}>
                                <img
                                    src="/images/front/Doc.jpg"
                                    alt="Dr. Abhishek Arjel"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <h3>Dr. Abhishek Arjel</h3>
                            <p style={{ color: 'var(--primary-blue)', fontWeight: '500' }}>
                                Cosmetic Dermatologist
                            </p>
                            <p style={{ fontSize: '0.9375rem' }}>MBBS, MD (Dermatology)</p>
                            <p style={{ marginTop: '1rem' }}>
                                10+ years of experience in clinical and aesthetic dermatology.
                                Specializes in hair transplant, anti-aging treatments, and acne scar management.
                            </p>
                        </div>

                        {/* Dr. Sapana Sharma */}
                        <div className="service-card">
                            <div style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                margin: '0 auto 1.5rem',
                                backgroundColor: 'var(--light-gray)'
                            }}>
                                <img
                                    src="/images/front/Sapna3.JPG"
                                    alt="Dr. Sapana Sharma"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                            <h3>Dr. Sapana Sharma</h3>
                            <p style={{ color: 'var(--primary-blue)', fontWeight: '500' }}>
                                Cosmetic Surgeon
                            </p>
                            <p style={{ fontSize: '0.9375rem' }}>MBBS</p>
                            <p style={{ marginTop: '1rem' }}>
                                Expert in skin and hair transplant procedures with a focus on
                                natural-looking results and patient comfort.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section section-alt">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>Our Core Values</h2>
                    </div>

                    <div className="grid grid-4">
                        <div className="feature-card">
                            <div className="feature-icon">🎯</div>
                            <h4>Excellence</h4>
                            <p>Committed to the highest standards in everything we do.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💝</div>
                            <h4>Compassion</h4>
                            <p>Treating every patient with care, respect, and understanding.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔒</div>
                            <h4>Integrity</h4>
                            <p>Honest advice and transparent pricing with no hidden costs.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">💡</div>
                            <h4>Innovation</h4>
                            <p>Embracing the latest technologies and treatment methods.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-dark text-center">
                <div className="container">
                    <h2>Experience the Difference</h2>
                    <p style={{ marginBottom: '2rem' }}>
                        Schedule your consultation today and discover personalized care.
                    </p>
                    <Link to="/contact" className="btn btn-white">
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    );
};

export default About;
