# Nepalgunj Skin Center – Official Website

A professional, modern website for **Nepalgunj Skin & Hair Transplant Clinic**, built using HTML and CSS. The site features a premium design, responsive layout, and a static build system for easy deployment.

---

## 📂 Project Structure

```bash
├── src/                # SOURCE CODE (Edit these files!)
│   ├── header.html     # Header template
│   ├── footer.html     # Footer template
│   └── *.html          # Pages (index, about, etc.)
├── css/                
│   └── style.css       # Main stylesheet
├── images/             # Media assets
├── build.js            # Build script (compiles src/ -> root)
├── index.html          # GENERATED FILE (Do not edit directly)
└── README.md           # Project documentation
```

---

## 🛠️ Technologies Used

- **Static Site Generation (SSG)**: Custom Node.js script to stitch header/footer.
- **HTML5/CSS3**: Core technologies.
- **Vercel**: Optimized for static hosting.

---

## 🚀 Deployment Guide (Vercel)

This project is optimized for **Vercel**.

### Method 1: Zero-Config Deployment (Recommended)
1. Push this repository to **GitHub**.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. **Vercel will automatically detect the static HTML files** in the root directory.
5. Click **Deploy**. Done!

*(Since I have already run the build script, the `index.html` and other files in the root are ready to be served).*

### Method 2: Manual Build (For Developers)
If you make changes to the source files in `src/`, you need to rebuild the project before deploying (or committing).

1. **Edit** files in `src/` (e.g., `src/index.html`).
2. **Run Build**:
   ```bash
   node build.js
   ```
   *This command updates the files in the root directory.*
3. **Commit & Push** to GitHub.

---

## 💻 Running Locally

You can simply open `index.html` in your browser! No server is required anymore because the files are fully static.

---

## 📞 Contact

**Nepalgunj Skin Center**
Nepalgunj, Banke, Nepal
Phone: +977-9800000000
Email: info@nepalgunjskincenter.com