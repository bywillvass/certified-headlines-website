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



/* ─── Video cover fill ───────────────────────────────────────────────────── */
(function initVideoCover() {
  function resize() {
    document.querySelectorAll('[data-video-id] iframe').forEach(iframe => {
      const container = iframe.closest('[data-video-id]');
      const cw = container.offsetWidth;
      const ch = container.offsetHeight;
      if (!cw || !ch) return;
      if (cw / ch > 16 / 9) {
        iframe.style.width  = '100%';
        iframe.style.height = (cw / (16 / 9)) + 'px';
      } else {
        iframe.style.height = '100%';
        iframe.style.width  = (ch * (16 / 9)) + 'px';
      }
    });
  }
  window.addEventListener('load', resize);
  window.addEventListener('resize', resize);
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
