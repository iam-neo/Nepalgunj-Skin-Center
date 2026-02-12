import { Link } from 'react-router-dom';

const floatingServices = [
    { label: 'Hair Transplant', icon: '👨‍🦲', slug: 'hair-transplant', position: { top: '8%', left: '5%' }, delay: '0s', duration: '6s' },
    { label: 'Botox & Fillers', icon: '💆‍♀️', slug: 'anti-aging', position: { top: '15%', right: '8%' }, delay: '1s', duration: '7s' },
    { label: 'Laser Treatment', icon: '✨', slug: 'laser-hair-removal', position: { top: '45%', left: '2%' }, delay: '0.5s', duration: '5.5s' },
    { label: 'HydraFacial', icon: '💧', slug: 'hydrafacial', position: { bottom: '25%', right: '4%' }, delay: '1.5s', duration: '6.5s' },
    { label: 'Acne & Scars', icon: '🧴', slug: 'acne-treatment', position: { top: '55%', right: '12%' }, delay: '2s', duration: '7.5s' },
    { label: 'Mole Removal', icon: '🔍', slug: 'mole-removal', position: { bottom: '12%', left: '8%' }, delay: '0.8s', duration: '5s' },
    { label: 'Pigmentation', icon: '🌟', slug: 'pigmentation', position: { top: '30%', left: '10%' }, delay: '2.5s', duration: '6.8s' },
    { label: 'Body Contouring', icon: '⚖️', slug: 'weight-management', position: { bottom: '35%', right: '2%' }, delay: '1.2s', duration: '5.8s' },
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
