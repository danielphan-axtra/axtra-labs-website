(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Header scroll ── */
  const header = document.querySelector('header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Mobile nav ── */
  const nav = document.querySelector('.nav');
  const navlinks = document.querySelector('.navlinks');
  let toggle = document.querySelector('.nav-toggle');

  if (nav && navlinks && !toggle) {
    toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Toggle menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span></span><span></span><span></span>';
    const contactBtn = nav.querySelector('.btn');
    if (contactBtn) {
      nav.insertBefore(toggle, contactBtn);
    } else {
      nav.appendChild(toggle);
    }
  }

  function closeNav() {
    document.body.classList.remove('nav-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    document.querySelectorAll('.nav-item.open').forEach((el) => el.classList.remove('open'));
  }

  if (toggle && navlinks) {
    toggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    navlinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeNav);
    });

    const contactBtn = nav.querySelector('a.btn[href]');
    if (contactBtn && !navlinks.querySelector('.nav-contact-link')) {
      const mobileContact = contactBtn.cloneNode(true);
      mobileContact.classList.add('nav-contact-link');
      mobileContact.style.marginTop = '20px';
      mobileContact.style.alignSelf = 'flex-start';
      navlinks.appendChild(mobileContact);
    }
  }

  document.querySelectorAll('.nav-item > span').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth > 900) return;
      e.preventDefault();
      const item = trigger.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.nav-item.open').forEach((el) => el.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeNav();
  });

  /* ── Scroll reveal — improved stagger ── */
  if (!prefersReducedMotion) {
    const animatedSelectors = [
      '.reveal',
      '.framework-step',
      '.pipeline-step',
      '.bento-step',
      '.devops-node',
      '.zig-step'
    ];

    const elements = [...new Set(document.querySelectorAll(animatedSelectors.join(',')))];
    const groups = new Map();

    elements.forEach((el) => {
      const key = el.parentElement;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(el);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const parent = entry.target.parentElement;
          const siblings = groups.get(parent) || [entry.target];
          const idx = siblings.indexOf(entry.target);
          const delay = Math.min(idx, 6) * 90;

          setTimeout(() => entry.target.classList.add('in-view'), delay);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
  } else {
    document
      .querySelectorAll('.reveal, .framework-step, .pipeline-step, .bento-step, .devops-node, .zig-step')
      .forEach((el) => el.classList.add('in-view'));
  }
})();
