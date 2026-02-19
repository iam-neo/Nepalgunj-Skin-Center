import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { blogPosts, getBlogBySlug } from '../data/blogs';
import BlogCard from '../components/BlogCard';
import { Helmet } from 'react-helmet-async';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaLink, FaCheck, FaSearch, FaEye, FaComments, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SITE_URL = 'https://nepalgunjskincenter.com';
const SITE_NAME = 'Nepalgunj Skin Center';
const POSTS_PER_PAGE = 6;

// ============================================
// Blog Listing Page
// ============================================
export const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

    // Featured post (first featured or latest)
    const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];

    // Filtered posts (exclude featured from grid)
    const filteredPosts = useMemo(() => {
        let posts = blogPosts.filter(p => p.id !== featuredPost.id);

        if (selectedCategory !== 'all') {
            posts = posts.filter(post => post.category === selectedCategory);
        }

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            posts = posts.filter(post =>
                post.title.toLowerCase().includes(query) ||
                post.excerpt.toLowerCase().includes(query) ||
                (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query)))
            );
        }

        return posts;
    }, [selectedCategory, searchQuery, featuredPost.id]);

    // Pagination
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    // Reset page when filter changes
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, searchQuery]);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
    };

    // Blog listing structured data
    const blogListSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": `Skin Health Blog | ${SITE_NAME}`,
        "description": "Expert dermatology insights, skincare tips, and the latest treatments from Nepalgunj Skin Center.",
        "url": `${SITE_URL}/blog`,
        "publisher": {
            "@type": "Organization",
            "name": SITE_NAME,
            "url": SITE_URL
        },
        "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "url": `${SITE_URL}/blog/${post.id}`,
            "datePublished": post.date,
            "author": { "@type": "Person", "name": post.author }
        }))
    };

    return (
        <>
            <Helmet>
                <title>Skin Health Blog | {SITE_NAME}</title>
                <meta name="description" content="Expert dermatology insights, skincare tips, and the latest treatments from Nepalgunj Skin Center. Read articles by Dr. Abhishek Arjel on acne, anti-aging, hair care, and more." />
                <link rel="canonical" href={`${SITE_URL}/blog`} />
                <meta property="og:title" content={`Skin Health Blog | ${SITE_NAME}`} />
                <meta property="og:description" content="Expert dermatology insights, skincare tips, and the latest treatments from Nepalgunj Skin Center." />
                <meta property="og:url" content={`${SITE_URL}/blog`} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Skin Health Blog | ${SITE_NAME}`} />
                <meta name="twitter:description" content="Expert dermatology insights, skincare tips, and the latest treatments from Nepalgunj Skin Center." />
                <script type="application/ld+json">
                    {JSON.stringify(blogListSchema)}
                </script>
            </Helmet>

            {/* Breadcrumbs */}
            <section style={{ paddingTop: '6rem' }}>
                <div className="container">
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <Link to="/">Home</Link>
                        <span className="separator">›</span>
                        <span className="current">Blog</span>
                    </nav>
                </div>
            </section>

            {/* Hero Featured Article */}
            <section>
                <div className="container">
                    <Link to={`/blog/${featuredPost.id}`} style={{ textDecoration: 'none' }}>
                        <div className="blog-hero">
                            <div className="blog-hero-image">
                                <img
                                    src={featuredPost.image}
                                    alt={`Featured: ${featuredPost.title}`}
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop';
                                    }}
                                />
                            </div>
                            <div className="blog-hero-overlay" />
                            <div className="blog-hero-content">
                                <span className="blog-hero-badge">✦ Featured Article</span>
                                <h1>{featuredPost.title}</h1>
                                <p className="blog-hero-excerpt">{featuredPost.excerpt}</p>
                                <div className="blog-hero-meta">
                                    <span><FaClock /> {featuredPost.readTime}</span>
                                    <span>•</span>
                                    <span>{formatDate(featuredPost.date)}</span>
                                    <span>•</span>
                                    <span>{featuredPost.author}</span>
                                    {featuredPost.views && (
                                        <>
                                            <span>•</span>
                                            <span><FaEye /> {featuredPost.views.toLocaleString()} views</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Search + Filters */}
            <section className="section" style={{ paddingBottom: 0 }}>
                <div className="container">
                    {/* Search Bar */}
                    <div className="blog-search" style={{ marginBottom: 'var(--space-xl)' }}>
                        <input
                            type="text"
                            placeholder="Search articles by topic, keyword, or tag..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            id="blog-search-input"
                            aria-label="Search blog articles"
                        />
                        <FaSearch className="blog-search-icon" />
                    </div>

                    {/* Category Tabs */}
                    <div className="blog-category-tabs" role="tablist" aria-label="Blog categories">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`blog-tab ${selectedCategory === category ? 'active' : ''}`}
                                role="tab"
                                aria-selected={selectedCategory === category}
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
                    {paginatedPosts.length > 0 ? (
                        <>
                            <div className="grid grid-3" key={`${selectedCategory}-${currentPage}-${searchQuery}`}>
                                {paginatedPosts.map((post) => (
                                    <BlogCard key={post.id} post={post} />
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <nav className="blog-pagination" aria-label="Blog pagination">
                                    <button
                                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                        aria-label="Previous page"
                                    >
                                        <FaChevronLeft />
                                    </button>
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={currentPage === page ? 'active' : ''}
                                            aria-label={`Page ${page}`}
                                            aria-current={currentPage === page ? 'page' : undefined}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                        aria-label="Next page"
                                    >
                                        <FaChevronRight />
                                    </button>
                                </nav>
                            )}
                        </>
                    ) : (
                        <div className="text-center" style={{ padding: 'var(--space-3xl) 0' }}>
                            <h3>No articles found</h3>
                            <p>Try a different search term or category.</p>
                            <button
                                className="btn btn-secondary"
                                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                                style={{ marginTop: 'var(--space-md)' }}
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="blog-newsletter">
                        <h2>Stay Updated on Skin Health</h2>
                        <p>Get the latest skincare tips, treatment insights, and clinic updates delivered to your inbox.</p>
                        <form
                            className="blog-newsletter-form"
                            onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}
                        >
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                required
                                aria-label="Email for newsletter"
                            />
                            <button type="submit" className="btn btn-primary">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

// ============================================
// Social Share Button Component
// ============================================
const ShareButton = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const IconComponent = props.Icon;

    return (
        <button
            onClick={props.onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: isHovered ? props.hoverBgColor : props.bgColor,
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
                    ? `0 6px 20px ${props.bgColor}66`
                    : `0 2px 8px ${props.bgColor}33`,
            }}
            aria-label={props.label}
            title={props.label}
        >
            <IconComponent />
        </button>
    );
};

// ============================================
// Blog Post Detail Page
// ============================================
export const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = getBlogBySlug(slug);
    const [selectedImage, setSelectedImage] = useState(0);
    const [linkCopied, setLinkCopied] = useState(false);
    const [readingProgress, setReadingProgress] = useState(0);
    const [showStickyCTA, setShowStickyCTA] = useState(false);
    const [stickyDismissed, setStickyDismissed] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);
    const articleRef = useRef(null);

    // Reading progress bar + sticky CTA logic
    useEffect(() => {
        const handleScroll = () => {
            if (!articleRef.current) return;
            const article = articleRef.current;
            const rect = article.getBoundingClientRect();
            const scrolled = -rect.top;
            const total = rect.height - window.innerHeight;
            const progress = Math.max(0, Math.min(100, (scrolled / total) * 100));
            setReadingProgress(progress);

            // Show sticky CTA after 30% scroll
            const pageScroll = window.scrollY;
            const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pageProgress = pageScroll / pageHeight;
            if (pageProgress > 0.3 && !stickyDismissed) {
                setShowStickyCTA(true);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [stickyDismissed]);

    if (!post) {
        return (
            <section className="section text-center" style={{ paddingTop: '8rem' }}>
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
            year: 'numeric', month: 'long', day: 'numeric'
        });
    };

    const formatDateISO = (dateString) => {
        return new Date(dateString).toISOString();
    };

    // Get related posts
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 2);

    const hasMultipleImages = post.images && post.images.length > 0;
    const postUrl = `${SITE_URL}/blog/${post.id}`;
    const postImage = post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/images/og-default.jpg`;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setLinkCopied(true);
            setTimeout(() => setLinkCopied(false), 2000);
        });
    };

    // Extract h3 headings for TOC
    const tocItems = useMemo(() => {
        const regex = /<h3>(.*?)<\/h3>/gi;
        const items = [];
        let match;
        while ((match = regex.exec(post.content)) !== null) {
            const text = match[1].replace(/<[^>]*>/g, '');
            items.push({ text, id: text.toLowerCase().replace(/[^a-z0-9]+/g, '-') });
        }
        return items;
    }, [post.content]);

    // Inject IDs into h3 tags for anchor linking and inject CTA
    const processedContent = useMemo(() => {
        let content = post.content;
        let headingIndex = 0;
        content = content.replace(/<h3>(.*?)<\/h3>/gi, (match, text) => {
            const id = tocItems[headingIndex]?.id || '';
            headingIndex++;
            return `<h3 id="${id}">${text}</h3>`;
        });

        // Inject CTA after the 3rd heading
        const h3Matches = [...content.matchAll(/<h3[^>]*>.*?<\/h3>/gi)];
        if (h3Matches.length >= 3) {
            const insertPos = h3Matches[2].index;
            const ctaHtml = `
                <div class="article-cta">
                    <h3 style="border:none;margin-top:0;padding:0">Need Expert Skin Care Advice?</h3>
                    <p>Schedule a consultation with Dr. Abhishek Arjel for personalized treatment recommendations.</p>
                    <a href="/contact" class="btn btn-primary" style="display:inline-flex">Book Consultation →</a>
                </div>
            `;
            content = content.slice(0, insertPos) + ctaHtml + content.slice(insertPos);
        }

        return content;
    }, [post.content, tocItems]);

    // Article structured data
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
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
        "articleSection": post.category,
        "wordCount": post.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
        ...(post.tags && { "keywords": post.tags.join(', ') })
    };

    // FAQ structured data
    const faqSchema = post.faq && post.faq.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    } : null;

    // Breadcrumb structured data
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": postUrl }
        ]
    };

    return (
        <>
            <Helmet>
                <title>{post.title} | {SITE_NAME} Blog</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={postUrl} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={postImage} />
                <meta property="og:url" content={postUrl} />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content={SITE_NAME} />
                <meta property="article:published_time" content={formatDateISO(post.date)} />
                <meta property="article:author" content={post.author} />
                <meta property="article:section" content={post.category} />
                {post.tags && post.tags.map(tag => (
                    <meta key={tag} property="article:tag" content={tag} />
                ))}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.excerpt} />
                <meta name="twitter:image" content={postImage} />
                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>
                {faqSchema && (
                    <script type="application/ld+json">
                        {JSON.stringify(faqSchema)}
                    </script>
                )}
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            {/* Reading Progress Bar */}
            <div
                className="reading-progress"
                style={{ width: `${readingProgress}%` }}
                role="progressbar"
                aria-valuenow={Math.round(readingProgress)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Reading progress"
            />

            {/* Article Header */}
            <section className="page-header" style={{ paddingTop: '7rem' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    {/* Breadcrumbs */}
                    <nav className="breadcrumbs" aria-label="Breadcrumb" style={{ justifyContent: 'center', paddingTop: 0 }}>
                        <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>Home</Link>
                        <span className="separator" style={{ color: 'rgba(255,255,255,0.4)' }}>›</span>
                        <Link to="/blog" style={{ color: 'rgba(255,255,255,0.7)' }}>Blog</Link>
                        <span className="separator" style={{ color: 'rgba(255,255,255,0.4)' }}>›</span>
                        <span className="current" style={{ color: 'rgba(255,255,255,0.9)' }}>{post.title}</span>
                    </nav>

                    <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                        <span style={{
                            background: 'rgba(0, 180, 216, 0.25)',
                            backdropFilter: 'blur(8px)',
                            padding: '0.3rem 0.85rem',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.8125rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            border: '1px solid rgba(144, 224, 239, 0.3)',
                            color: 'var(--accent-light)'
                        }}>
                            {post.category}
                        </span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>{post.title}</h1>

                    {/* Meta + Social Proof */}
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        marginTop: '1rem',
                        fontSize: '0.9375rem',
                        opacity: 0.9,
                        flexWrap: 'wrap',
                        alignItems: 'center'
                    }}>
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{formatDate(post.date)}</span>
                        <span>•</span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                            <FaClock /> {post.readTime}
                        </span>
                        {post.views && (
                            <>
                                <span>•</span>
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                                    <FaEye /> {post.views.toLocaleString()} views
                                </span>
                            </>
                        )}
                        {post.commentsCount > 0 && (
                            <>
                                <span>•</span>
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                                    <FaComments /> {post.commentsCount} comments
                                </span>
                            </>
                        )}
                    </div>

                    {/* Tags */}
                    {post.tags && (
                        <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {post.tags.map(tag => (
                                <span key={tag} style={{
                                    background: 'rgba(255,255,255,0.12)',
                                    padding: '0.2rem 0.7rem',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.75rem',
                                    fontWeight: 500,
                                    color: 'rgba(255,255,255,0.75)'
                                }}>
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Image Gallery */}
            {hasMultipleImages && (
                <section className="section" style={{ paddingBottom: '0' }}>
                    <div className="container" style={{ maxWidth: '900px' }}>
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
                                loading="lazy"
                                style={{
                                    width: '100%', height: 'auto', maxHeight: '500px',
                                    objectFit: 'cover', display: 'block'
                                }}
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop';
                                }}
                            />
                            <div style={{
                                position: 'absolute', bottom: 0, left: 0, right: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                padding: '2rem 1.5rem 1rem', color: 'white'
                            }}>
                                <p style={{ margin: 0, fontSize: '0.9375rem' }}>
                                    {post.images[selectedImage].caption}
                                </p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {post.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    style={{
                                        padding: 0,
                                        border: selectedImage === index ? '3px solid var(--primary)' : '3px solid transparent',
                                        borderRadius: 'var(--radius-sm)', overflow: 'hidden', cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        opacity: selectedImage === index ? 1 : 0.7,
                                        transform: selectedImage === index ? 'scale(1.05)' : 'scale(1)',
                                        background: 'none'
                                    }}
                                    title={img.caption}
                                >
                                    <img
                                        src={img.src} alt={img.caption}
                                        loading="lazy"
                                        style={{ width: '100px', height: '70px', objectFit: 'cover', display: 'block' }}
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=100&h=70&fit=crop';
                                        }}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Article Content with TOC Sidebar */}
            <section className="section" ref={articleRef}>
                <div className="container" style={{ maxWidth: '1060px' }}>
                    <div className="blog-post-layout">
                        {/* Table of Contents */}
                        {tocItems.length > 2 && (
                            <aside>
                                <nav className="blog-toc" aria-label="Table of contents">
                                    <h4>Contents</h4>
                                    <ul className="blog-toc-list">
                                        {tocItems.map((item, i) => (
                                            <li key={i}>
                                                <a
                                                    href={`#${item.id}`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                    }}
                                                >
                                                    {item.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </aside>
                        )}

                        {/* Main Article */}
                        <div>
                            <article
                                className="blog-content"
                                style={{ lineHeight: '1.8', fontSize: '1.0625rem' }}
                            >
                                <div dangerouslySetInnerHTML={{ __html: processedContent }} />
                            </article>

                            {/* Social Sharing */}
                            <div style={{
                                marginTop: '3rem', paddingTop: '2rem',
                                borderTop: '1px solid var(--gray)',
                            }}>
                                <p style={{
                                    fontWeight: 600, marginBottom: '1rem', textAlign: 'center',
                                    fontSize: '1.0625rem', color: 'var(--deep-blue)',
                                }}>
                                    Share this article
                                </p>
                                <div style={{
                                    display: 'flex', gap: '0.875rem', justifyContent: 'center',
                                    alignItems: 'center', flexWrap: 'wrap',
                                }}>
                                    <ShareButton
                                        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank', 'width=600,height=400')}
                                        bgColor="#1877F2" hoverBgColor="#0d65d9" Icon={FaFacebook} label="Share on Facebook"
                                    />
                                    <ShareButton
                                        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank', 'width=600,height=400')}
                                        bgColor="#1DA1F2" hoverBgColor="#0c8de0" Icon={FaTwitter} label="Share on Twitter"
                                    />
                                    <ShareButton
                                        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank', 'width=600,height=400')}
                                        bgColor="#0A66C2" hoverBgColor="#084e96" Icon={FaLinkedin} label="Share on LinkedIn"
                                    />
                                    <ShareButton
                                        onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`, '_blank')}
                                        bgColor="#25D366" hoverBgColor="#1fb855" Icon={FaWhatsapp} label="Share on WhatsApp"
                                    />
                                    <button
                                        onClick={handleCopyLink}
                                        style={{
                                            background: linkCopied ? '#10B981' : '#6B7280',
                                            color: 'white', border: 'none',
                                            borderRadius: linkCopied ? 'var(--radius-full)' : '50%',
                                            width: linkCopied ? 'auto' : '44px', height: '44px',
                                            padding: linkCopied ? '0 1.25rem' : '0',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            gap: '0.5rem', cursor: 'pointer',
                                            fontSize: linkCopied ? '0.875rem' : '1.25rem',
                                            fontWeight: linkCopied ? 600 : 400,
                                            transition: 'all 0.3s ease',
                                            boxShadow: linkCopied
                                                ? '0 4px 15px rgba(16,185,129,0.4)'
                                                : '0 2px 8px rgba(107,114,128,0.3)',
                                        }}
                                        aria-label="Copy link" title="Copy link to clipboard"
                                    >
                                        {linkCopied ? <><FaCheck /> Copied!</> : <FaLink />}
                                    </button>
                                </div>
                            </div>

                            {/* Author Box */}
                            <div className="author-box">
                                <img
                                    src={post.authorAvatar || '/images/hosp/doctor.jpg'}
                                    alt={`${post.author} - Dermatologist`}
                                    className="author-box-avatar"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                                <div className="author-box-info">
                                    <h4>{post.author}</h4>
                                    <p className="author-box-credentials">MBBS, MD Dermatology</p>
                                    <p className="author-box-bio">
                                        {post.authorBio || 'Founder of Nepalgunj Skin Center with extensive expertise in advanced dermatological care and aesthetic treatments.'}
                                    </p>
                                    <Link to="/about" className="author-box-link">
                                        View Profile →
                                    </Link>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            {post.faq && post.faq.length > 0 && (
                                <div className="blog-faq" id="faq">
                                    <h2>Frequently Asked Questions</h2>
                                    {post.faq.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`blog-faq-item ${activeFaq === index ? 'active' : ''}`}
                                        >
                                            <button
                                                className="blog-faq-question"
                                                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                                aria-expanded={activeFaq === index}
                                            >
                                                {item.question}
                                                <span className="blog-faq-toggle">+</span>
                                            </button>
                                            <div className="blog-faq-answer">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Comments Section */}
                            {post.comments && post.comments.length > 0 && (
                                <section className="blog-comments" id="comments" aria-label="Comments">
                                    <h2>Comments ({post.comments.length})</h2>
                                    {post.comments.map((comment, index) => (
                                        <div key={index} className="comment-card">
                                            <div className="comment-avatar" aria-hidden="true">
                                                {comment.name.charAt(0)}
                                            </div>
                                            <div className="comment-body">
                                                <div className="comment-header">
                                                    <span className="comment-name">{comment.name}</span>
                                                    <span className="comment-date">
                                                        {formatDate(comment.date)}
                                                    </span>
                                                </div>
                                                <p className="comment-text">{comment.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </section>
                            )}

                            {/* Back & CTA */}
                            <div style={{
                                marginTop: '2rem', paddingTop: '1.5rem',
                                display: 'flex', justifyContent: 'space-between',
                                alignItems: 'center', flexWrap: 'wrap', gap: '1rem'
                            }}>
                                <button onClick={() => navigate('/blog')} className="btn btn-secondary">
                                    ← Back to Blog
                                </button>
                                <Link to="/contact" className="btn btn-primary">
                                    Book Consultation
                                </Link>
                            </div>
                        </div>
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

            {/* Sticky Subscribe CTA */}
            {!stickyDismissed && (
                <div className={`sticky-subscribe ${showStickyCTA ? 'visible' : ''}`}>
                    <div className="sticky-subscribe-inner">
                        <p className="sticky-subscribe-text">
                            📬 Get <span>skincare tips</span> delivered to your inbox
                        </p>
                        <form
                            className="sticky-subscribe-form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert('Thank you for subscribing!');
                                setStickyDismissed(true);
                            }}
                        >
                            <input
                                type="email"
                                placeholder="Your email"
                                required
                                aria-label="Email for subscription"
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                        <button
                            className="sticky-subscribe-close"
                            onClick={() => setStickyDismissed(true)}
                            aria-label="Dismiss subscription bar"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Blog;
