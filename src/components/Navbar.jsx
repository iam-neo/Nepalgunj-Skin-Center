import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="logo">
                    {/* <img src="/images/hosp/logo.png" alt="Nepalgunj Skin Center" /> */}
                </Link>

                <div
                    className="menu-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? '✕' : '☰'}
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
