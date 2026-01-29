import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { blogPosts, getBlogBySlug } from '../data/blogs';
import BlogCard from '../components/BlogCard';

// Blog Listing Page
export const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

    const filteredPosts = selectedCategory === 'all'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Skin Health Blog</h1>
                    <p>Expert insights, tips, and the latest in dermatology</p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="section" style={{ paddingBottom: '0' }}>
                <div className="container">
                    <div className="flex flex-center" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-secondary'}`}
                                style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                            >
                                {category === 'all' ? 'All Posts' : category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-3">
                        {filteredPosts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section section-alt text-center">
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2>Stay Updated</h2>
                    <p>Get the latest skincare tips and clinic updates delivered to your inbox.</p>
                    <form
                        onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}
                        style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            style={{
                                padding: '0.875rem 1.5rem',
                                borderRadius: 'var(--radius-full)',
                                border: '2px solid var(--gray)',
                                fontSize: '1rem',
                                minWidth: '280px'
                            }}
                        />
                        <button type="submit" className="btn btn-primary">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

// Blog Post Detail Page
export const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = getBlogBySlug(slug);

    if (!post) {
        return (
            <section className="section text-center">
                <div className="container">
                    <h1>Post Not Found</h1>
                    <p>The blog post you're looking for doesn't exist.</p>
                    <Link to="/blog" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                        Back to Blog
                    </Link>
                </div>
            </section>
        );
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Get related posts (same category, excluding current)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 2);

    return (
        <>
            {/* Article Header */}
            <section className="page-header">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <span style={{
                            background: 'rgba(255,255,255,0.2)',
                            padding: '0.25rem 0.75rem',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.875rem'
                        }}>
                            {post.category}
                        </span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>{post.title}</h1>
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        marginTop: '1rem',
                        fontSize: '0.9375rem',
                        opacity: 0.9
                    }}>
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{formatDate(post.date)}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <article
                        className="blog-content"
                        style={{
                            lineHeight: '1.8',
                            fontSize: '1.0625rem'
                        }}
                    >
                        <div
                            dangerouslySetInnerHTML={{ __html: post.content }}
                            style={{
                                '--heading-color': 'var(--deep-blue)'
                            }}
                        />
                    </article>

                    {/* Share & Back */}
                    <div style={{
                        marginTop: '3rem',
                        paddingTop: '2rem',
                        borderTop: '1px solid var(--gray)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem'
                    }}>
                        <button
                            onClick={() => navigate('/blog')}
                            className="btn btn-secondary"
                        >
                            ← Back to Blog
                        </button>
                        <Link to="/contact" className="btn btn-primary">
                            Book Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="section section-alt">
                    <div className="container">
                        <h2 className="text-center" style={{ marginBottom: '2rem' }}>Related Articles</h2>
                        <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            {relatedPosts.map((relatedPost) => (
                                <BlogCard key={relatedPost.id} post={relatedPost} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Blog;
