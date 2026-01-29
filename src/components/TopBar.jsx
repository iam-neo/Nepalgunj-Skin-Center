import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <header className="top-bar">
            <div className="container">
                <div>
                    <span>📍 Pasang Lhamu Road, Nepalgunj</span>
                </div>
                <div>
                    <span>📞 +977 9802580007, 081-534189</span>
                    <Link to="/contact">Book Now</Link>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
