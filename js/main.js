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


/* ─── Video hover preview ────────────────────────────────────────────────── */
(function initVideoHover() {
  document.querySelectorAll('[data-video-id]').forEach(card => {
    const id = card.dataset.videoId;
    let iframe = null;

    card.addEventListener('mouseenter', () => {
      iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&rel=0`;
      iframe.allow = 'autoplay';
      iframe.setAttribute('allowfullscreen', '');
      iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;z-index:1;pointer-events:none;';
      card.appendChild(iframe);
    });

    card.addEventListener('mouseleave', () => {
      if (iframe) { iframe.remove(); iframe = null; }
    });
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
