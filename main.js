/* ══════════════════════════════════════════════════════
   MAIN — main.js
   Handles: language switching, typed text, AOS,
            navbar scroll, cursor glow, burger menu
══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── STATE ──────────────────────────────────────────── */
  let currentLang = localStorage.getItem('portfolio-lang') || 'en';

  /* ── LANGUAGE ───────────────────────────────────────── */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    const dict = window.TRANSLATIONS[lang] || window.TRANSLATIONS.en;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // Update html lang attr
    document.documentElement.lang = lang;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Restart typed text
    startTyped();
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  /* ── TYPED TEXT ─────────────────────────────────────── */
  const typedEl = document.getElementById('typedText');
  let typedTimeout = null;

  function startTyped() {
    clearTimeout(typedTimeout);
    const strings = (window.TYPED_STRINGS || {})[currentLang] || ['.NET Developer'];
    let si = 0, ci = 0, deleting = false;

    function tick() {
      const word = strings[si];
      if (!deleting) {
        typedEl.textContent = word.substring(0, ci + 1);
        ci++;
        if (ci === word.length) {
          deleting = true;
          typedTimeout = setTimeout(tick, 1800);
          return;
        }
      } else {
        typedEl.textContent = word.substring(0, ci - 1);
        ci--;
        if (ci === 0) {
          deleting = false;
          si = (si + 1) % strings.length;
        }
      }
      typedTimeout = setTimeout(tick, deleting ? 50 : 80);
    }
    typedEl.textContent = '';
    ci = 0; si = 0; deleting = false;
    tick();
  }

  /* ── AOS (Animate on Scroll) ────────────────────────── */
  function initAOS() {
    const elements = document.querySelectorAll('[data-aos]');
    const delays   = {};
    elements.forEach(el => {
      const d = parseInt(el.getAttribute('data-aos-delay') || 0);
      delays.set ? null : (delays[el] = d); // just store
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el    = entry.target;
          const delay = parseInt(el.getAttribute('data-aos-delay') || 0);
          setTimeout(() => el.classList.add('aos-animate'), delay);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  /* ── NAVBAR SCROLL ──────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ── ACTIVE NAV LINK ────────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active-link'));
        const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (link) link.classList.add('active-link');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => io.observe(s));

  /* ── CURSOR GLOW ─────────────────────────────────────── */
  const glow = document.getElementById('cursorGlow');
  let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + 'px';
    glow.style.top  = glowY + 'px';
    requestAnimationFrame(animateGlow);
  }
  animateGlow();

  /* ── BURGER MENU ────────────────────────────────────── */
  const burger     = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  document.querySelectorAll('.mm-link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ── SMOOTH SCROLL for #links ───────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── INIT ───────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    applyLang(currentLang);
    initAOS();
  });

})();
