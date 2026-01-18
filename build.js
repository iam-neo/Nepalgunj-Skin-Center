const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const outDir = __dirname;

// Read templates
// Note: header/footer might have replaced links themselves, but we should handle raw content
const header = fs.readFileSync(path.join(srcDir, 'header.html'), 'utf8');
const footer = fs.readFileSync(path.join(srcDir, 'footer.html'), 'utf8');

// Get all HTML files in src
const files = fs.readdirSync(srcDir).filter(file => file.endsWith('.html'));

files.forEach(file => {
    // Skip components and existing non-page files if any
    if (file === 'header.html' || file === 'footer.html') return;

    let content = fs.readFileSync(path.join(srcDir, file), 'utf8');

    // Replace PHP includes with actual content
    // We match the exact string we put in earlier
    content = content.replace(/<\?php include 'header.php'; \?>/g, header);
    content = content.replace(/<\?php include 'footer.php'; \?>/g, footer);

    // Replace .php links with .html (for proper navigation in static build)
    content = content.replace(/href="([^"]+)\.php"/g, 'href="$1.html"');

    // Write to root
    fs.writeFileSync(path.join(outDir, file), content);
    console.log(`Generated ${file}`);
});

console.log('Build complete! Static files generated in root.');
