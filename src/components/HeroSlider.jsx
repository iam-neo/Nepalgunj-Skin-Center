import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
    {
        image: '/images/patient/1.jpg',
        title: 'Your Health, Our Priority!',
        subtitle: "Nepal's Premier Aesthetic Center for Skin, Hair, and Laser treatments."
    },
    {
        image: '/images/patient/verma.jpg',
        title: 'Advanced Hair Transplant',
        subtitle: 'Natural-looking results with FUE technology.'
    },
    {
        image: '/images/patient/2.jpg',
        title: 'Rejuvenate Your Skin',
        subtitle: 'Expert care for glowing, youthful skin.'
    }
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className="hero-slider">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="slide-content">
                        <h1>{slide.title}</h1>
                        <p>{slide.subtitle}</p>
                        <div className="flex flex-center" style={{ gap: '1rem' }}>
                            <Link to="/contact" className="btn btn-primary">
                                Book Appointment
                            </Link>
                            <Link to="/services" className="btn btn-white">
                                Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

            <button
                className="slider-controls slider-prev"
                onClick={prevSlide}
                aria-label="Previous slide"
            >
                ‹
            </button>
            <button
                className="slider-controls slider-next"
                onClick={nextSlide}
                aria-label="Next slide"
            >
                ›
            </button>

            <div className="slider-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
