import { useState } from 'react';

const galleryItems = [
    // Hair Transplant
    { id: 1, image: '/images/patient/1.jpg', title: 'Hair Transplant Process', category: 'Hair Transplant' },
    { id: 2, image: '/images/patient/2.jpg', title: 'Follicular Unit Extraction', category: 'Hair Transplant' },
    { id: 3, image: '/images/patient/3.jpg', title: 'Successful Transplant', category: 'Hair Transplant' },
    { id: 4, image: '/images/patient/verma.jpg', title: 'Patient Result', category: 'Hair Transplant' },
    { id: 5, image: '/images/bna/7.jpg', title: 'Before & After', category: 'Hair Transplant' },

    // Skin Care
    { id: 6, image: '/images/patient/b1.jpg', title: 'Skin Rejuvenation', category: 'Skin Care' },
    { id: 7, image: '/images/patient/b2.jpg', title: 'Acne Treatment', category: 'Skin Care' },
    { id: 8, image: '/images/patient/fack.jpg', title: 'Laser Treatment', category: 'Skin Care' },
    { id: 9, image: '/images/patient/mono.jpg', title: 'Pigmentation Control', category: 'Skin Care' },

    // Facility
    { id: 10, image: '/images/hosp/hos.jpg', title: 'Our Modern Facility', category: 'Facility' },

    // Team
    { id: 11, image: '/images/front/Doc.jpg', title: 'Our Expert Doctor', category: 'Team' },
    { id: 12, image: '/images/front/Sapna3.JPG', title: 'Dedicated Staff', category: 'Team' },
    { id: 13, image: '/images/front/sapana.jpg', title: 'Nursing Team', category: 'Team' }
];

const categories = ['All', 'Hair Transplant', 'Skin Care', 'Facility', 'Team'];

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredItems = selectedCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Our Gallery</h1>
                    <p>Witness the transformations and explore our state-of-the-art facility</p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="section">
                <div className="container">

                    {/* Filter Buttons */}
                    <div className="gallery-filter">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`btn-filter ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="gallery-grid">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="gallery-item" onClick={() => setSelectedImage(item)}>
                                <div className="img-container">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&fit=crop';
                                        }}
                                    />
                                    <div className="overlay">
                                        <span>+</span>
                                    </div>
                                </div>
                                <div className="gallery-caption">
                                    <h4>{item.title}</h4>
                                    <p>{item.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredItems.length === 0 && (
                        <div className="text-center" style={{ padding: '3rem' }}>
                            <p>No images found in this category.</p>
                        </div>
                    )}

                    {/* Privacy Note */}
                    <div className="text-center" style={{ marginTop: '3rem' }}>
                        <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.9rem' }}>
                            * Some images are for representational purposes. Actual patient results may vary.
                        </p>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                    <button className="lightbox-close" onClick={() => setSelectedImage(null)}>&times;</button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.image} alt={selectedImage.title} />
                        <div className="lightbox-caption">
                            <h3>{selectedImage.title}</h3>
                            <p>{selectedImage.category}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA */}
            <section className="section section-dark text-center">
                <div className="container">
                    <h2>Ready to Start Your Transformation?</h2>
                    <p style={{ marginBottom: '2rem' }}>
                        See what we can do for you. Book a consultation today.
                    </p>
                    <a href="/contact" className="btn btn-white">
                        Book Consultation
                    </a>
                </div>
            </section>
        </>
    );
};

export default Gallery;
