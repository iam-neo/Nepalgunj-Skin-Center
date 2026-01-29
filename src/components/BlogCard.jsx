import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <article className="blog-card">
            <div className="blog-card-image">
                <img
                    src={post.image || '/images/blog/default.jpg'}
                    alt={post.title}
                    onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop';
                    }}
                />
            </div>
            <div className="blog-card-body">
                <div className="blog-card-meta">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                </div>
                <h3>
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more">
                    Read More →
                </Link>
            </div>
        </article>
    );
};

export default BlogCard;
