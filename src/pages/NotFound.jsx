import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaHome, FaSearch, FaArrowRight } from 'react-icons/fa';

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | Nepalgunj Skin Center</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '8rem' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <div style={{
                        fontSize: 'clamp(6rem, 15vw, 10rem)',
                        fontWeight: 800,
                        lineHeight: 1,
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1rem',
                        opacity: 0.9,
                        letterSpacing: '-5px'
                    }}>
                        404
                    </div>
                    
                    <h1 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Oops! Page Not Found</h1>
                    
                    <p style={{ color: 'var(--text-light)', marginBottom: '2.5rem', fontSize: '1.125rem', lineHeight: 1.6 }}>
                        It looks like the page you are looking for has been moved, deleted, or possibly never existed.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FaHome /> Back to Home
                        </Link>
                        <Link to="/services" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            View Services <FaArrowRight />
                        </Link>
                    </div>

                    <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--light-bg)', borderRadius: 'var(--radius-lg)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Looking for something specific?</h3>
                        <p style={{ fontSize: '0.9375rem', marginBottom: '1.5rem', color: 'var(--text-light)' }}>
                            You can check our blog for skin care tips or contact our team directly.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/blog" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>→ Read our Blog</Link>
                            <Link to="/contact" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>→ Contact Clinic</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NotFound;
