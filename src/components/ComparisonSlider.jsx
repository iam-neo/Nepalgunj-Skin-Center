import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const ComparisonSlider = ({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After" }) => {
    return (
        <div className="comparison-slider-container" style={{ 
            borderRadius: 'var(--radius-xl)', 
            overflow: 'hidden', 
            boxShadow: 'var(--shadow-lg)',
            border: '4px solid var(--white)'
        }}>
            <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={beforeImage} _srcSet={beforeImage} alt={beforeLabel} />}
                itemTwo={<ReactCompareSliderImage src={afterImage} _srcSet={afterImage} alt={afterLabel} />}
                style={{ height: '100%', width: '100%' }} 
            />
            <div className="slider-labels" style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0.5rem 1rem',
                background: 'var(--white)',
                fontWeight: '600',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)'
            }}>
                <span>{beforeLabel}</span>
                <span>{afterLabel}</span>
            </div>
        </div>
    );
};

export default ComparisonSlider;
