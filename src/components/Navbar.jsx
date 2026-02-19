import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
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
        { label: 'Hair Loss & Transplant', path: '/services' },
        { label: 'Acne & Scars', path: '/services' },
        { label: 'Pigmentation', path: '/services' },
        { label: 'Anti-Aging', path: '/services' },
        { label: 'Laser Removal', path: '/services' },
        { label: 'Weight Management', path: '/services' }
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
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
                    <div
                        className="menu-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? '✕' : '☰'}
                    </div>
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
                        <a href="#">Concerns ▾</a>
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

