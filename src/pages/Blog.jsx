import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { blogPosts, getBlogBySlug } from '../data/blogs';
import BlogCard from '../components/BlogCard';
import { Helmet } from 'react-helmet-async';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaLink, FaCheck } from 'react-icons/fa';

const SITE_URL = 'https://nepalgunjskincenter.com';
const SITE_NAME = 'Nepalgunj Skin Center';

// Blog Listing Page
export const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

    const filteredPosts = selectedCategory === 'all'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <>
            <Helmet>
                <title>Skin Health Blog | {SITE_NAME}</title>
                <meta name="description" content="Expert dermatology insights, skincare tips, and the latest treatments from Nepalgunj Skin Center. Read articles by Dr. Abhishek Arjel on acne, anti-aging, hair care, and more." />
                <link rel="canonical" href={`${SITE_URL}/blog`} />

                {/* Open Graph */}
                <meta property="og:title" content={`Skin Health Blog | ${SITE_NAME}`} />
                <meta property="og:description" content="Expert dermatology insights, skincare tips, and the latest treatments from Nepalgunj Skin Center." />
                <meta property="og:url" content={`${SITE_URL}/blog`} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={SITE_NAME} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Skin Health Blog | ${SITE_NAME}`} />
                <meta name="twitter:description" content="Expert dermatology insights, skincare tips, and the latest treatments from Nepalgunj Skin Center." />
            </Helmet>

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

// Social Share Button Component
const ShareButton = ({ onClick, bgColor, hoverBgColor, icon: Icon, label }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: isHovered ? hoverBgColor : bgColor,
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.25rem',
                transition: 'all 0.3s ease',
                transform: isHovered ? 'translateY(-3px) scale(1.1)' : 'translateY(0) scale(1)',
                boxShadow: isHovered
                    ? `0 6px 20px ${bgColor}66`
                    : `0 2px 8px ${bgColor}33`,
                position: 'relative',
            }}
            aria-label={label}
            title={label}
        >
            <Icon />
        </button>
    );
};

// Blog Post Detail Page
export const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = getBlogBySlug(slug);
    const [selectedImage, setSelectedImage] = useState(0);
    const [linkCopied, setLinkCopied] = useState(false);

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

    const formatDateISO = (dateString) => {
        return new Date(dateString).toISOString();
    };

    // Get related posts (same category, excluding current)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 2);

    // Check if post has multiple images
    const hasMultipleImages = post.images && post.images.length > 0;

    const postUrl = `${SITE_URL}/blog/${post.id}`;
    const postImage = post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/images/og-default.jpg`;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setLinkCopied(true);
            setTimeout(() => setLinkCopied(false), 2000);
        });
    };

    // Article structured data (JSON-LD)
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": postImage,
        "author": {
            "@type": "Person",
            "name": post.author,
            "url": `${SITE_URL}/about`
        },
        "publisher": {
            "@type": "Organization",
            "name": SITE_NAME,
            "url": SITE_URL,
        },
        "datePublished": formatDateISO(post.date),
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": postUrl
        },
        "articleSection": post.category
    };

    return (
        <>
            <Helmet>
                <title>{post.title} | {SITE_NAME} Blog</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={postUrl} />

                {/* Open Graph */}
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={postImage} />
                <meta property="og:url" content={postUrl} />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="article:published_time" content={formatDateISO(post.date)} />
                <meta property="article:author" content={post.author} />
                <meta property="article:section" content={post.category} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.excerpt} />
                <meta name="twitter:image" content={postImage} />

                {/* Article Schema JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>
            </Helmet>

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

            {/* Image Gallery - for posts with multiple images */}
            {hasMultipleImages && (
                <section className="section" style={{ paddingBottom: '0' }}>
                    <div className="container" style={{ maxWidth: '900px' }}>
                        {/* Main Image Display */}
                        <div style={{
                            position: 'relative',
                            borderRadius: 'var(--radius)',
                            overflow: 'hidden',
                            marginBottom: '1rem',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
                        }}>
                            <img
                                src={post.images[selectedImage].src}
                                alt={post.images[selectedImage].caption}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: '500px',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop';
                                }}
                            />
                            {/* Caption */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                padding: '2rem 1.5rem 1rem',
                                color: 'white'
                            }}>
                                <p style={{ margin: 0, fontSize: '0.9375rem' }}>
                                    {post.images[selectedImage].caption}
                                </p>
                            </div>
                        </div>

                        {/* Thumbnail Selection */}
                        <div style={{
                            display: 'flex',
                            gap: '0.75rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}>
                            {post.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    style={{
                                        padding: 0,
                                        border: selectedImage === index
                                            ? '3px solid var(--primary)'
                                            : '3px solid transparent',
                                        borderRadius: 'var(--radius-sm)',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        opacity: selectedImage === index ? 1 : 0.7,
                                        transform: selectedImage === index ? 'scale(1.05)' : 'scale(1)',
                                        background: 'none'
                                    }}
                                    title={img.caption}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.caption}
                                        style={{
                                            width: '100px',
                                            height: '70px',
                                            objectFit: 'cover',
                                            display: 'block'
                                        }}
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=100&h=70&fit=crop';
                                        }}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Image Counter */}
                        <p style={{
                            textAlign: 'center',
                            marginTop: '1rem',
                            color: 'var(--text-light)',
                            fontSize: '0.875rem'
                        }}>
                            Image {selectedImage + 1} of {post.images.length}
                        </p>
                    </div>
                </section>
            )}

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

                    {/* Social Sharing */}
                    <div style={{
                        marginTop: '3rem',
                        paddingTop: '2rem',
                        borderTop: '1px solid var(--gray)',
                    }}>
                        <p style={{
                            fontWeight: 600,
                            marginBottom: '1rem',
                            textAlign: 'center',
                            fontSize: '1.0625rem',
                            color: 'var(--deep-blue)',
                        }}>
                            Share this article
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '0.875rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <ShareButton
                                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank', 'width=600,height=400')}
                                bgColor="#1877F2"
                                hoverBgColor="#0d65d9"
                                icon={FaFacebook}
                                label="Share on Facebook"
                            />
                            <ShareButton
                                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank', 'width=600,height=400')}
                                bgColor="#1DA1F2"
                                hoverBgColor="#0c8de0"
                                icon={FaTwitter}
                                label="Share on Twitter"
                            />
                            <ShareButton
                                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank', 'width=600,height=400')}
                                bgColor="#0A66C2"
                                hoverBgColor="#084e96"
                                icon={FaLinkedin}
                                label="Share on LinkedIn"
                            />
                            <ShareButton
                                onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`, '_blank')}
                                bgColor="#25D366"
                                hoverBgColor="#1fb855"
                                icon={FaWhatsapp}
                                label="Share on WhatsApp"
                            />
                            <button
                                onClick={handleCopyLink}
                                style={{
                                    background: linkCopied ? '#10B981' : '#6B7280',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: linkCopied ? 'var(--radius-full)' : '50%',
                                    width: linkCopied ? 'auto' : '44px',
                                    height: '44px',
                                    padding: linkCopied ? '0 1.25rem' : '0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    cursor: 'pointer',
                                    fontSize: linkCopied ? '0.875rem' : '1.25rem',
                                    fontWeight: linkCopied ? 600 : 400,
                                    transition: 'all 0.3s ease',
                                    boxShadow: linkCopied
                                        ? '0 4px 15px rgba(16,185,129,0.4)'
                                        : '0 2px 8px rgba(107,114,128,0.3)',
                                }}
                                aria-label="Copy link"
                                title="Copy link to clipboard"
                            >
                                {linkCopied ? <><FaCheck /> Copied!</> : <FaLink />}
                            </button>
                        </div>
                    </div>

                    {/* Back & CTA */}
                    <div style={{
                        marginTop: '2rem',
                        paddingTop: '1.5rem',
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
