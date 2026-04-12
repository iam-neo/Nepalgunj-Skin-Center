import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup after a short delay (e.g., 1.5 seconds)
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    // --- POPUP CONFIGURATION ---
    // Change these values to update the popup content.
    // Ensure mediaUrl points to a valid image (.jpg, .png, .gif) or video (.mp4) in the public folder or absolute URL.
    const popupContent = {
        mediaUrl: '/images/pop/new.png', // Updated to use the uploaded image
        linkUrl: 'https://www.facebook.com/share/p/17CQwfN7Q3/', // The link to redirect to (can be external like 'https://...')
        altText: 'Special Event'
    };

    // Determine if the media is a video based on extension
    const isVideo = popupContent.mediaUrl.match(/\.(mp4|webm)$/i);

    const MediaElement = () => {
        if (isVideo) {
            return (
                <video
                    src={popupContent.mediaUrl}
                    className="popup-media"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            );
        }
        return (
            <img
                src={popupContent.mediaUrl}
                alt={popupContent.altText}
                className="popup-media"
            />
        );
    };

    return (
        <div className="popup-overlay" onClick={handleClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close-btn" onClick={handleClose} aria-label="Close popup">
                    &times;
                </button>

                {popupContent.linkUrl.startsWith('http') ? (
                    <a href={popupContent.linkUrl} target="_blank" rel="noopener noreferrer" onClick={handleClose}>
                        <MediaElement />
                    </a>
                ) : (
                    <Link to={popupContent.linkUrl} onClick={handleClose}>
                        <MediaElement />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default HomePopup;
