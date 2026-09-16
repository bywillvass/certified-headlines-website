'use strict';

/* ─── Mobile nav ─────────────────────────────────────────────────────────── */
(function initNav() {
  const toggle = document.querySelector('.nav__toggle');
  const links  = document.querySelector('.nav__links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    links.classList.toggle('is-open', !open);
    document.body.style.overflow = open ? '' : 'hidden';
  });

  // Close menu when a link is tapped on mobile
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      links.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
})();

/* ─── Hero headline reveal (home page only) ──────────────────────────────── */
(function initHeroReveal() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Respect prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    hero.classList.add('is-ready');
    return;
  }

  // Small delay so fonts have a chance to load before the reveal
  requestAnimationFrame(() => {
    setTimeout(() => hero.classList.add('is-ready'), 80);
  });
})();

/* ─── Active nav link ────────────────────────────────────────────────────── */
(function setActiveLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path || (path === '' && href === 'index.html')) {
      a.setAttribute('aria-current', 'page');
    }
  });
})();
