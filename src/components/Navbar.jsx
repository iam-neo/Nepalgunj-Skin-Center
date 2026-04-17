import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark';
        }
        return false;
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Apply dark mode
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/gallery', label: 'Gallery' },
        { path: '/blog', label: 'Blog' },
        { path: '/about', label: 'About Us' },
        { path: '/faq', label: 'FAQ' },
        { path: '/contact', label: 'Contact' }
    ];

    const concerns = [
        { label: 'Hair Loss & Transplant', path: '/services/hair-transplant' },
        { label: 'Acne & Scars', path: '/services/acne-treatment' },
        { label: 'Pigmentation', path: '/services/pigmentation' },
        { label: 'Anti-Aging', path: '/services/anti-aging' },
        { label: 'Laser Removal', path: '/services/laser-hair-removal' },
        { label: 'Weight Management', path: '/services/weight-management' }
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${!isHome ? 'navbar-solid' : ''}`}>
            <div className="container">
                <Link to="/" className="logo">
                    <img
                        src="/images/hosp/logo.png"
                        alt="Nepalgunj Skin Center"
                        className={`navbar-logo ${scrolled ? 'visible' : ''}`}
                    />
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button
                        className="theme-toggle"
                        onClick={() => setIsDark(!isDark)}
                        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                        title={isDark ? 'Light mode' : 'Dark mode'}
                    >
                        {isDark ? '☀️' : '🌙'}
                    </button>
                    <button
                        className="menu-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navItems.map((item, index) => (
                        <li key={index} className="nav-item">
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}

                    <li className="nav-item">
                        <button className="dropdown-trigger" aria-haspopup="true" aria-label="Browse concerns">Concerns ▾</button>
                        <ul className="dropdown-menu">
                            {concerns.map((concern, index) => (
                                <li key={index}>
                                    <Link to={concern.path} onClick={() => setIsOpen(false)}>
                                        {concern.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

