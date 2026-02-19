import { Link } from 'react-router-dom';

const BlogCard = ({ post, className = '' }) => {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <article className={`blog-card blog-card-animated ${className}`}>
            <div className="blog-card-image">
                <span className="blog-card-category">{post.category}</span>
                <img
                    src={post.image || '/images/blog/default.jpg'}
                    alt={`${post.title} - ${post.category} article by ${post.author}`}
                    loading="lazy"
                    onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop';
                    }}
                />
            </div>
            <div className="blog-card-body">
                <div className="blog-card-meta">
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    {post.views && (
                        <>
                            <span>•</span>
                            <span>{post.views.toLocaleString()} views</span>
                        </>
                    )}
                </div>
                <h3>
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
                <div className="blog-card-author-row">
                    <img
                        src={post.authorAvatar || '/images/hosp/doctor.jpg'}
                        alt={post.author}
                        className="blog-card-avatar"
                        loading="lazy"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                    <span className="blog-card-author-name">{post.author}</span>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
