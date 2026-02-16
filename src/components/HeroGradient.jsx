import { Link } from 'react-router-dom';

const floatingServices = [
    // Left Side
    { label: 'Hair Transplant', icon: '👨‍🦲', slug: 'hair-transplant', position: { top: '40%', left: '5%' }, delay: '0s', duration: '6s' },
    { label: 'Laser Treatment', icon: '✨', slug: 'laser-hair-removal', position: { top: '55%', left: '5%' }, delay: '0.5s', duration: '5.5s' },
    { label: 'Pigmentation', icon: '🌟', slug: 'pigmentation', position: { top: '70%', left: '5%' }, delay: '1s', duration: '6.5s' },
    { label: 'Mole Removal', icon: '🔍', slug: 'mole-removal', position: { top: '85%', left: '5%' }, delay: '1.5s', duration: '7s' },

    // Right Side
    { label: 'Botox & Fillers', icon: '💆‍♀️', slug: 'anti-aging', position: { top: '40%', right: '5%' }, delay: '0.2s', duration: '6.2s' },
    { label: 'Acne & Scars', icon: '🧴', slug: 'acne-treatment', position: { top: '55%', right: '5%' }, delay: '0.7s', duration: '5.8s' },
    { label: 'HydraFacial', icon: '💧', slug: 'hydrafacial', position: { top: '65%', right: '5%' }, delay: '1.2s', duration: '6.8s' },
    { label: 'Body Contouring', icon: '⚖️', slug: 'weight-management', position: { top: '85%', right: '5%' }, delay: '1.7s', duration: '7.2s' },
];

const HeroGradient = () => {
    return (
        <section className="hero-gradient">
            {/* Mesh gradient background */}
            <div className="hero-gradient-bg">
                <div className="mesh-blob mesh-blob-1"></div>
                <div className="mesh-blob mesh-blob-2"></div>
                <div className="mesh-blob mesh-blob-3"></div>
            </div>

            {/* Official Logo on Left - Fully Visible */}
            <img
                src="/images/hosp/logo.png"
                alt="Nepalgunj Skin Center Logo"
                style={{
                    position: 'absolute',
                    left: '5%',
                    top: '1%', // Moved up slightly to be distinct from floating items or act as a brand anchor
                    width: '180px', // Reasonable size
                    zIndex: 20, // Ensure it's above background elements
                    opacity: 1, // Fully visible
                    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' // Slight shadow for depth
                }}
                className="hero-logo-img"
            />

            {/* Floating service pills */}
            {floatingServices.map((service, index) => (
                <Link
                    key={index}
                    to={`/services/${service.slug}`}
                    className="floating-pill"
                    style={{
                        ...service.position,
                        animationDelay: service.delay,
                        animationDuration: service.duration,
                    }}
                >
                    <span className="pill-icon">{service.icon}</span>
                    <span className="pill-label">{service.label}</span>
                </Link>
            ))}

            {/* Center content */}
            <div className="hero-gradient-content">
                <p className="hero-tagline">Nepalgunj Skin Center</p>
                <h1 className="hero-heading">
                    Your Skin Deserves{' '}
                    <span className="gradient-text">Expert Care.</span>
                </h1>
                <p className="hero-subtext">
                    Aesthetic clinic for advanced dermatology,
                    hair transplant, and laser treatments in Western Nepal.
                </p>
                <div className="hero-cta-group">
                    <Link to="/contact" className="btn btn-primary btn-lg">
                        Book Appointment
                    </Link>
                    <Link to="/services" className="btn btn-glass">
                        Our Services →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroGradient;
