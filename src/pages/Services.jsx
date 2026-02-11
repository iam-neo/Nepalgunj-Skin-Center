import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Services = () => {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Our Treatments</h1>
                    <p>Advanced solutions for all your skin and hair needs.</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-3">
                        {services.map((service) => (
                            <div key={service.id} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3><Link to={`/services/${service.id}`}>{service.title}</Link></h3>
                                <p>{service.description}</p>
                                <Link to={`/services/${service.id}`} className="read-more">
                                    Learn More →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section section-alt">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>Our Treatment Process</h2>
                        <p>What to expect when you visit Nepalgunj Skin Center</p>
                    </div>

                    <div className="grid grid-4">
                        <div className="feature-card">
                            <div className="feature-icon" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                                1
                            </div>
                            <h4>Consultation</h4>
                            <p>Meet with our specialist to discuss your concerns and goals.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                                2
                            </div>
                            <h4>Assessment</h4>
                            <p>Thorough examination and personalized treatment plan creation.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                                3
                            </div>
                            <h4>Treatment</h4>
                            <p>Expert care using advanced technology and proven techniques.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                                4
                            </div>
                            <h4>Follow-Up</h4>
                            <p>Ongoing support and monitoring for optimal results.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2>State-of-the-Art Technology</h2>
                            <p>
                                We invest in the latest FDA-approved equipment to ensure safe,
                                effective treatments with minimal downtime.
                            </p>
                            <ul style={{ marginTop: '1.5rem', lineHeight: '2' }}>
                                <li>✓ Advanced Diode Laser Systems</li>
                                <li>✓ Micro-Punch FUE Hair Transplant Technology</li>
                                <li>✓ HydraFacial MD Systems</li>
                                <li>✓ Radiofrequency & Cryolipolysis Devices</li>
                                <li>✓ Medical-Grade LED Light Therapy</li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <div style={{
                                background: 'var(--gradient-light)',
                                borderRadius: 'var(--radius-2xl)',
                                padding: '4rem',
                                fontSize: '5rem'
                            }}>
                                🔬
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-dark text-center">
                <div className="container">
                    <h2>Ready to Begin Your Journey?</h2>
                    <p style={{ marginBottom: '2rem' }}>
                        Book a consultation to discuss the best treatment options for you.
                    </p>
                    <Link to="/contact" className="btn btn-white">
                        Book Consultation
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Services;
