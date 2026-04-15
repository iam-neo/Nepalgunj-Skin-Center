import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const phoneNumber = '9779802580007';
    const defaultMessage = 'Hello! I would like to book an appointment at Nepalgunj Skin Center.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

    // Show button after a short delay for a nice entrance
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    // Show tooltip after 5 seconds, hide after 8
    useEffect(() => {
        const showTimer = setTimeout(() => setIsTooltipVisible(true), 5000);
        const hideTimer = setTimeout(() => setIsTooltipVisible(false), 12000);
        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`whatsapp-float ${isVisible ? 'whatsapp-visible' : ''}`}
            aria-label="Chat with us on WhatsApp"
            title="Chat with us on WhatsApp"
        >
            {/* Tooltip */}
            <span className={`whatsapp-tooltip ${isTooltipVisible ? 'tooltip-visible' : ''}`}>
                Book Appointment 💬
            </span>

            {/* WhatsApp SVG Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="whatsapp-icon"
            >
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.744 3.047 9.379L1.054 31.49l6.328-2.032C9.96 31.078 12.871 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.335 22.594c-.39 1.1-1.932 2.013-3.17 2.28-.848.18-1.955.324-5.682-1.222-4.77-1.978-7.834-6.816-8.072-7.131-.228-.316-1.916-2.553-1.916-4.87 0-2.316 1.214-3.453 1.644-3.924.39-.428 1.032-.627 1.646-.627.198 0 .376.01.536.02.472.02.708.047 1.02.788.39.93 1.34 3.27 1.458 3.508.12.238.238.554.078.87-.15.324-.278.526-.516.808-.238.282-.498.63-.712.844-.238.238-.486.496-.208.972.278.476 1.236 2.037 2.654 3.3 1.822 1.622 3.358 2.126 3.834 2.364.476.238.754.198 1.032-.12.286-.326 1.218-1.42 1.544-1.908.316-.486.642-.406 1.08-.238.442.158 2.794 1.318 3.27 1.558.476.238.792.358.91.554.12.198.12 1.14-.268 2.238z" />
            </svg>

            {/* Pulse ring */}
            <span className="whatsapp-pulse"></span>
        </a>
    );
};

export default WhatsAppButton;
