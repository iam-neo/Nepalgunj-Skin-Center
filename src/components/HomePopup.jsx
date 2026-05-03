import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Only show popup once per session
        const alreadyShown = sessionStorage.getItem('popupShown');
        if (alreadyShown) return;

        // Show popup after a short delay (e.g., 1.5 seconds)
        const timer = setTimeout(() => {
            setIsOpen(true);
            sessionStorage.setItem('popupShown', 'true');
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    // --- POPUP CONFIGURATION ---
    // 
    // MEDIA TYPE OPTIONS:
    //   'image'     → Local image (.jpg, .png, .gif) from public folder or absolute URL
    //   'video'     → Local video (.mp4, .webm) from public folder or absolute URL
    //   'facebook'  → Facebook video embed (paste the Facebook video/reel URL)
    //   'instagram' → Instagram post/reel embed (paste the Instagram post/reel URL)
    //
    // ASPECT RATIO OPTIONS (for facebook & instagram embeds):
    //   'landscape'  → 16:9  — for normal horizontal videos
    //   'portrait'   → 9:16  — for vertical Reels (Facebook & Instagram)
    //   'square'     → 1:1   — for square Instagram posts
    //
    // EXAMPLES:
    //   mediaType: 'facebook',  mediaUrl: 'https://www.facebook.com/PageName/videos/123', aspectRatio: 'landscape'
    //   mediaType: 'facebook',  mediaUrl: 'https://www.facebook.com/reel/123',            aspectRatio: 'portrait'
    //   mediaType: 'instagram', mediaUrl: 'https://www.instagram.com/reel/ABC123/',        aspectRatio: 'portrait'
    //   mediaType: 'instagram', mediaUrl: 'https://www.instagram.com/p/ABC123/',           aspectRatio: 'square'
    //   mediaType: 'image',     mediaUrl: '/images/pop/new.png'
    //   mediaType: 'video',     mediaUrl: '/videos/promo.mp4'
    //
    const popupContent = {
        mediaType: 'facebook',     // Change this: 'image' | 'video' | 'facebook' | 'instagram'
        mediaUrl: 'https://www.facebook.com/share/v/1BEmkYAbRE/',  // Paste your URL here
        aspectRatio: 'portrait',   // Change this: 'landscape' | 'portrait' | 'square' (for embeds only)
        linkUrl: '',               // Optional: external link when clicking image/video (not used for embeds)
        altText: 'Special Event'
    };

    // Determine CSS class for aspect ratio
    const getAspectClass = () => {
        const ratio = popupContent.aspectRatio || 'landscape';
        if (ratio === 'portrait') return 'popup-embed-portrait';
        if (ratio === 'square') return 'popup-embed-square';
        return ''; // landscape is the default
    };

    const renderMediaElement = () => {
        const { mediaType, mediaUrl } = popupContent;
        const aspectClass = getAspectClass();

        // --- Facebook Video Embed ---
        // autoplay=1 → starts playing automatically
        // mute=1     → required by browsers for autoplay to work
        if (mediaType === 'facebook') {
            const encodedUrl = encodeURIComponent(mediaUrl);
            return (
                <div className={`popup-embed-wrapper ${aspectClass}`}>
                    <iframe
                        src={`https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1514396190400152%2F&show_text=false&width=267&t=0&autoplay=true`}
                        className="popup-embed-iframe"
                        style={{ border: 'none', overflow: 'hidden', pointerEvents: 'none' }}
                        scrolling="no"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                        title="Facebook Video"
                    />
                </div>
            );
        }

        // --- Instagram Post/Reel Embed ---
        // Instagram embeds auto-play reels by default
        if (mediaType === 'instagram') {
            let embedUrl = mediaUrl.replace(/\/$/, '') + '/embed/';
            if (embedUrl.includes('/embed/embed/')) {
                embedUrl = embedUrl.replace('/embed/embed/', '/embed/');
            }
            // Add autoplay param
            embedUrl += '?autoplay=1';
            return (
                <div className={`popup-embed-wrapper ${aspectClass}`}>
                    <iframe
                        src={embedUrl}
                        className="popup-embed-iframe"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                        title="Instagram Post"
                    />
                </div>
            );
        }

        // --- Local Video ---
        if (mediaType === 'video') {
            return (
                <video
                    src={mediaUrl}
                    className="popup-media"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            );
        }

        // --- Local Image (default) ---
        return (
            <img
                src={mediaUrl}
                alt={popupContent.altText}
                className="popup-media"
            />
        );
    };

    const isEmbed = popupContent.mediaType === 'facebook' || popupContent.mediaType === 'instagram';
    const isPortrait = popupContent.aspectRatio === 'portrait';

    return (
        <div className="popup-overlay" onClick={handleClose}>
            <div className={`popup-content ${isEmbed ? 'popup-content-embed' : ''} ${isEmbed && isPortrait ? 'popup-content-embed-portrait' : ''}`} onClick={(e) => e.stopPropagation()}>
                <button className="popup-close-btn" onClick={handleClose} aria-label="Close popup">
                    &times;
                </button>

                {isEmbed ? (
                    renderMediaElement()
                ) : popupContent.linkUrl && popupContent.linkUrl.startsWith('http') ? (
                    <a href={popupContent.linkUrl} target="_blank" rel="noopener noreferrer" onClick={handleClose}>
                        {renderMediaElement()}
                    </a>
                ) : popupContent.linkUrl ? (
                    <Link to={popupContent.linkUrl} onClick={handleClose}>
                        {renderMediaElement()}
                    </Link>
                ) : (
                    renderMediaElement()
                )}
            </div>
        </div>
    );
};

export default HomePopup;
