const galleryItems = [
    { id: 1, image: '/images/patient/1.jpg', title: 'Hair Transplant Result', category: 'Hair' },
    { id: 2, image: '/images/patient/2.jpg', title: 'Skin Treatment', category: 'Skin' },
    { id: 3, image: '/images/patient/verma.jpg', title: 'Before & After', category: 'Hair' },
    { id: 4, image: '/images/front/Doc.jpg', title: 'Our Expert', category: 'Team' },
    { id: 5, image: '/images/hosp/hos.jpg', title: 'Our Clinic', category: 'Facility' },
    { id: 6, image: '/images/front/Sapna3.JPG', title: 'Our Team', category: 'Team' }
];

const Gallery = () => {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Our Gallery</h1>
                    <p>Witness the transformations and explore our state-of-the-art facility</p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="section">
                <div className="container">
                    <div className="gallery-grid">
                        {galleryItems.map((item) => (
                            <div key={item.id} className="gallery-item">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&fit=crop';
                                    }}
                                />
                                <div className="gallery-caption">
                                    <h4>{item.title}</h4>
                                    <p>{item.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Note about before/after */}
                    <div className="text-center" style={{ marginTop: '3rem' }}>
                        <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
                            For patient privacy, actual before and after images are shown during consultations.
                        </p>
                    </div>
                </div>
            </section>

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
