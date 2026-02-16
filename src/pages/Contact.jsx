import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, this would send to a backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you. Get in touch today.</p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div>
                            <h2>Send Us a Message</h2>
                            <p style={{ marginBottom: '2rem' }}>
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>

                            {submitted ? (
                                <div style={{
                                    background: 'var(--gradient-light)',
                                    padding: '2rem',
                                    borderRadius: 'var(--radius-xl)',
                                    textAlign: 'center'
                                }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                                    <h3>Thank You!</h3>
                                    <p>Your message has been sent. We'll contact you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div className="grid grid-2" style={{ gap: '1rem' }}>
                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+977 98XXXXXXXX"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="service">Service of Interest</label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select a service</option>
                                            <option value="hair-transplant">Hair Transplant</option>
                                            <option value="acne-treatment">Acne Treatment</option>
                                            <option value="laser-hair-removal">Laser Hair Removal</option>
                                            <option value="anti-aging">Anti-Aging (Botox/Fillers)</option>
                                            <option value="pigmentation">Pigmentation Treatment</option>
                                            <option value="hydrafacial">HydraFacial</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your concerns or questions..."
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info Card */}
                        <div className="contact-info-card">
                            <h3 style={{ color: 'var(--white)', marginBottom: '2rem' }}>Get In Touch</h3>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">📍</div>
                                <div>
                                    <h4>Visit Us</h4>
                                    <p>Pasang Lhamu Road<br />Nepalgunj, Banke 21900<br />Nepal</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">📞</div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+977 9802580007<br />081-534189</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">✉️</div>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>nepalgunjskincenter@gmail.com</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">🕐</div>
                                <div>
                                    <h4>Opening Hours</h4>
                                    <p>Sun - Fri: 10:00 AM - 6:00 PM<br />Saturday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="section section-alt">
                <div className="container text-center">
                    <h2>Find Us on Map</h2>
                    <p style={{ marginBottom: '2rem' }}>
                        Located in the heart of Nepalgunj, easily accessible from anywhere in the city.
                    </p>
                    <div style={{
                        background: 'var(--light-gray)',
                        borderRadius: 'var(--radius-xl)',
                        height: '400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <iframe
                            src="https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=Nepalgunj%20Skin%20Center&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Nepalgunj Skin Center Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
