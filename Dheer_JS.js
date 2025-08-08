// ===== Theme toggle with persistence (switch) =====
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const stored = localStorage.getItem('theme');
if (stored === 'light') {
  root.classList.add('light');
  if (toggle) toggle.checked = true;
}
if (toggle) {
  toggle.addEventListener('change', () => {
    root.classList.toggle('light', toggle.checked);
    localStorage.setItem('theme', toggle.checked ? 'light' : 'dark');
  });
}

// ===== Intersection Observer reveals =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== Auto-hide nav on scroll down, reveal on scroll up or hover =====
let lastY = window.scrollY;
const nav = document.querySelector('.nav');
function onScroll() {
  const y = window.scrollY;
  const goingDown = y > lastY && y > 80;
  nav.classList.toggle('nav--hidden', goingDown);
  lastY = y;
}
window.addEventListener('scroll', onScroll, { passive: true });

// ===== Smooth scrolling with offset-safe behavior for in-page links =====
function smoothScrollTo(target) {
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        smoothScrollTo(el);
      }
    }
  });
});

// ===== Scrollspy (gradient accent remains) =====
const sections = ['#about', '#research', '#experience', '#coursework', '#contact']
  .map(sel => document.querySelector(sel))
  .filter(Boolean);

const linkMap = new Map();
document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
  linkMap.set(a.getAttribute('href'), a);
});

const spy = new IntersectionObserver((entries) => {
  const visible = entries
    .filter(e => e.isIntersecting)
    .sort((a,b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
  if (!visible.length) return;
  const currentId = '#' + visible[0].target.id;
  for (const a of linkMap.values()) a.classList.remove('active');
  const currentLink = linkMap.get(currentId);
  if (currentLink) currentLink.classList.add('active');
}, {
  rootMargin: '-20% 0px -70% 0px',
  threshold: [0.2, 0.5, 1.0]
});
sections.forEach(s => spy.observe(s));
