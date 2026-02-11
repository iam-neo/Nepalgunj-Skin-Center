
import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = services.find(s => s.id === id);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <>
            {/* Header */}
            <section className="page-header">
                <div className="container">
                    <h1>{service.title}</h1>
                    <p>Advanced Dermatological Care</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-3">
                        {/* Main Content (2 cols) */}
                        <div style={{ gridColumn: 'span 2' }}>
                            <div className="service-image-container" style={{
                                borderRadius: 'var(--radius-xl)',
                                overflow: 'hidden',
                                marginBottom: '2rem',
                                boxShadow: 'var(--shadow-lg)'
                            }}>
                                <img src={service.image} alt={service.title} style={{ width: '100%', height: 'auto' }} />
                            </div>

                            <h2 style={{ marginBottom: '1.5rem', color: 'var(--deep-blue)' }}>About the Treatment</h2>
                            <p className="lead" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
                                {service.longDescription}
                            </p>

                            <div style={{ margin: '3rem 0' }}>
                                <h3>Key Benefits</h3>
                                <div className="grid grid-2" style={{ marginTop: '1.5rem' }}>
                                    {service.benefits?.map((benefit, index) => (
                                        <div key={index} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                            <span style={{
                                                color: 'var(--success)',
                                                fontSize: '1.25rem',
                                                fontWeight: 'bold'
                                            }}>✓</span>
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ background: 'var(--light-gray)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '3rem' }}>
                                <h3 style={{ marginBottom: '1.5rem' }}>Treatment Procedure</h3>
                                <div className="procedure-steps">
                                    {service.procedure?.map((step, index) => (
                                        <div key={index} style={{
                                            display: 'flex',
                                            gap: '1.5rem',
                                            marginBottom: index !== service.procedure.length - 1 ? '1.5rem' : '0'
                                        }}>
                                            <div style={{
                                                background: 'var(--white)',
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 'bold',
                                                color: 'var(--primary-blue)',
                                                boxShadow: 'var(--shadow-sm)',
                                                flexShrink: 0
                                            }}>
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{step.title}</h4>
                                                <p style={{ margin: 0, fontSize: '0.95rem' }}>{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ Section */}
                            {service.faq && (
                                <div style={{ marginBottom: '3rem' }}>
                                    <h3>Common Questions</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                                        {service.faq.map((item, index) => (
                                            <div key={index} style={{
                                                border: '1px solid var(--gray)',
                                                borderRadius: 'var(--radius-md)',
                                                padding: '1.5rem'
                                            }}>
                                                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--deep-blue)' }}>{item.q}</h4>
                                                <p style={{ margin: 0, fontSize: '0.95rem' }}>{item.a}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar (1 col) */}
                        <aside style={{ gridColumn: 'span 1' }}>
                            <div style={{
                                background: 'var(--white)',
                                padding: '2rem',
                                borderRadius: 'var(--radius-xl)',
                                boxShadow: 'var(--shadow-md)',
                                position: 'sticky',
                                top: '120px'
                            }}>
                                <h3 style={{ marginBottom: '1.5rem' }}>Quick Facts</h3>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px' }}>Duration</h4>
                                    <p style={{ fontWeight: '600', color: 'var(--deep-blue)' }}>{service.duration || 'Varies'}</p>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px' }}>Price</h4>
                                    <p style={{ fontWeight: '600', color: 'var(--deep-blue)' }}>{service.pricing || 'Consultation Required'}</p>
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px' }}>Recovery</h4>
                                    <p style={{ fontWeight: '600', color: 'var(--deep-blue)' }}>Minimal to None</p>
                                </div>

                                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                                    Book Appointment
                                </Link>

                                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--gray)' }}>
                                    <h4 style={{ marginBottom: '1rem' }}>Other Services</h4>
                                    <ul className="footer-links">
                                        {services.filter(s => s.id !== id).slice(0, 5).map(s => (
                                            <li key={s.id} style={{ marginBottom: '0.75rem' }}>
                                                <Link to={`/services/${s.id}`} style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <span>•</span> {s.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="section section-dark text-center">
                <div className="container">
                    <h2>Not sure if this is right for you?</h2>
                    <p style={{ marginBottom: '2rem' }}>Schedule a free consultation with our experts.</p>
                    <Link to="/contact" className="btn btn-white">Talk to a Doctor</Link>
                </div>
            </section>
        </>
    );
};

export default ServiceDetail;
