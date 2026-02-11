# Gradient Hero Customization Guide

This guide explains how to customize the new Gradient Text Hero component (`src/components/HeroGradient.jsx`) and its styles.

## 1. Changing the Background Gradient
The background uses animated CSS "blobs". You can change their colors in `src/index.css`.

Look for these classes:
```css
.mesh-blob-1 {
  background: var(--accent-light); /* Currently #90E0EF (Light Blue) */
}

.mesh-blob-2 {
  background: #caf0f8; /* Currently lighter cyan */
}

.mesh-blob-3 {
  background: rgba(144, 224, 239, 0.4); /* Transparent Blue */
}
```

## 2. editing Floating Pills
The service tags (pills) are defined in the `floatingServices` array in `src/components/HeroGradient.jsx`.

### Adding/Removing Pills
To add a pill, add a new object to the array:

```javascript
{ 
  label: 'New Service', 
  icon: '⚡', 
  slug: 'service-slug', 
  position: { top: '20%', left: '10%' }, // CSS position
  delay: '0s', 
  duration: '6s' // Animation speed
}
```

### Adjusting Positions
- `top`/`bottom`: Vertical position (0% is top/bottom edge)
- `left`/`right`: Horizontal position (0% is left/right edge)
- **Tip:** Avoid placing pills near the center (50%) to keep the text readable.

## 3. Customizing Animations
The animations are defined in `src/index.css`.

- **Float Animation:** Controls the up/down movement of pills.
  ```css
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); } /* Change -15px to adjust height */
  }
  ```

- **Blob Animation:** Controls the background movement.
  ```css
  @keyframes blobFloat {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(30px, -30px) scale(1.1); }
  }
  ```

## 4. Mobile Responsiveness
On mobile screens (width < 768px), the layout changes significantly:
- Only 4 pills are shown (corners) to avoid clutter.
- Pills are scaled down to 75%.
- `position: absolute` is forced to specific corner coordinates to ensure text readability.

To show *more* pills on mobile, edit the CSS:
```css
/* src/index.css around line 700 */
.floating-pill:nth-child(n+5) {
  display: none; /* remove this to show all */
}
```
