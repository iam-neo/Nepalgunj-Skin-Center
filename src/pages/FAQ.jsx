import { useState } from 'react';
import { faqCategories, faqs } from '../data/faqs';

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState('general');
    const [activeQuestion, setActiveQuestion] = useState(null);

    const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

    const toggleQuestion = (id) => {
        setActiveQuestion(activeQuestion === id ? null : id);
    };

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Frequently Asked Questions</h1>
                    <p>Find answers to common questions about our treatments and services</p>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="section">
                <div className="container">
                    <div className="faq-layout">
                        {/* Sidebar Navigation */}
                        <aside className="faq-sidebar">
                            <nav className="faq-nav">
                                {faqCategories.map((category) => (
                                    <a
                                        key={category.id}
                                        href={`#${category.id}`}
                                        className={activeCategory === category.id ? 'active' : ''}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveCategory(category.id);
                                            setActiveQuestion(null);
                                        }}
                                    >
                                        {category.name}
                                    </a>
                                ))}
                            </nav>
                        </aside>

                        {/* FAQ List */}
                        <div className="faq-content">
                            <h2 style={{ marginBottom: '1.5rem' }}>
                                {faqCategories.find(c => c.id === activeCategory)?.name}
                            </h2>

                            {filteredFaqs.map((faq) => (
                                <div
                                    key={faq.id}
                                    className={`faq-item ${activeQuestion === faq.id ? 'active' : ''}`}
                                >
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleQuestion(faq.id)}
                                    >
                                        {faq.question}
                                        <span className="faq-icon">+</span>
                                    </button>
                                    <div className="faq-answer">
                                        <p style={{ margin: 0 }}>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="section section-alt text-center">
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2>Still Have Questions?</h2>
                    <p>
                        Can't find the answer you're looking for? Please reach out to our team
                        – we're always happy to help.
                    </p>
                    <div className="flex flex-center" style={{ marginTop: '1.5rem', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="tel:+9779802580007" className="btn btn-primary">
                            📞 Call Us
                        </a>
                        <a href="/contact" className="btn btn-secondary">
                            Send Message
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
