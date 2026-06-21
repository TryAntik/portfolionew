# Anton Kovalov — Portfolio

## 🚀 How to Open
Just double-click `index.html` — no server needed, opens directly in the browser.

---

## 🖼️ Changing Your Photo
1. Place your photo file in this folder
2. Rename it to **`photo.jpg`**
3. Refresh the browser

> Supports: `.jpg`, `.jpeg`, `.png`, `.webp`
> If no photo is found, a stylish placeholder with your initials is shown automatically.

---

## 🌐 Languages
The site supports **EN / RU / UA / PL** — switch via the buttons in the top-right corner.
To edit translations, open `i18n.js` and update the text strings inside each language object.

---

## ✏️ Updating Contact Info
Open `index.html` and find the `#contact` section.
Update the `href` and text in the `.contact-card` elements:
- Email link
- GitHub link
- Telegram link

---

## ➕ Adding a New Project
In `index.html`, inside `<div class="projects-grid">`, copy and paste this block:

```html
<article class="project-card glass" data-aos="fade-up">
  <div class="project-header">
    <span class="project-badge">Backend</span>
    <div class="project-links">
      <a href="YOUR_LINK" target="_blank" class="proj-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </a>
    </div>
  </div>
  <h3 class="project-title">Project <span class="accent">Name</span></h3>
  <p class="project-desc">Description of what you built.</p>
  <div class="project-tech">
    <span class="chip">C#</span>
    <span class="chip">.NET</span>
  </div>
  <a href="YOUR_LINK" target="_blank" class="btn btn-sm btn-primary mt-card">View Live →</a>
</article>
```

Then add a translation key `"proj2.desc"` in `i18n.js` for all 4 languages and add `data-i18n="proj2.desc"` to the `<p>` tag.

---

## 🎨 Changing Colors
Open `style.css` and edit the `:root` variables at the top:

```css
:root {
  --accent:  #818cf8;   /* Main purple accent */
  --accent2: #a78bfa;   /* Secondary violet */
  --bg:      #0a0a0f;   /* Page background */
}
```
