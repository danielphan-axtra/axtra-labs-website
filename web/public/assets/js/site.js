(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Header scroll ── */
  const header = document.querySelector('header');
  if (header) {
    const isSolid = header.classList.contains('header-solid');
    const onScroll = () => {
      header.classList.toggle('scrolled', isSolid || window.scrollY > 60);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Mobile nav ── */
  const nav = document.querySelector('.nav');
  const navlinks = document.querySelector('.navlinks');
  let toggle = document.querySelector('.nav-toggle');
  let navlinksHome = null;

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

  function clearHeaderFilters() {
    if (!header) return;
    header.style.setProperty('backdrop-filter', 'none', 'important');
    header.style.setProperty('-webkit-backdrop-filter', 'none', 'important');
    header.style.setProperty('filter', 'none', 'important');
    header.style.setProperty('transform', 'none', 'important');
  }

  function restoreHeaderFilters() {
    if (!header) return;
    header.style.removeProperty('backdrop-filter');
    header.style.removeProperty('-webkit-backdrop-filter');
    header.style.removeProperty('filter');
    header.style.removeProperty('transform');
  }

  function mountDrawer() {
    if (!navlinks || !nav) return;
    if (!navlinksHome) {
      navlinksHome = { parent: navlinks.parentElement, next: navlinks.nextSibling };
    }
    /* Escape header stacking / backdrop-filter containing block */
    if (navlinks.parentElement !== document.body) {
      document.body.appendChild(navlinks);
    }
    clearHeaderFilters();
  }

  function unmountDrawer() {
    if (!navlinks || !navlinksHome || !navlinksHome.parent) return;
    if (navlinks.parentElement === document.body) {
      if (navlinksHome.next && navlinksHome.next.parentElement === navlinksHome.parent) {
        navlinksHome.parent.insertBefore(navlinks, navlinksHome.next);
      } else {
        navlinksHome.parent.appendChild(navlinks);
      }
    }
    restoreHeaderFilters();
  }

  function closeNav() {
    document.body.classList.remove('nav-open');
    document.documentElement.classList.remove('nav-open');
    document.body.style.overflow = '';
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    document.querySelectorAll('.nav-item.open').forEach((el) => el.classList.remove('open'));
    unmountDrawer();
  }

  function openNav() {
    mountDrawer();
    document.body.classList.add('nav-open');
    document.documentElement.classList.add('nav-open');
    document.body.style.overflow = 'hidden';
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }

  if (toggle && navlinks) {
    toggle.addEventListener('click', () => {
      if (document.body.classList.contains('nav-open')) {
        closeNav();
      } else {
        openNav();
      }
    });

    navlinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeNav);
    });

    /* Remove leftover mobile Contact clone if present */
    navlinks.querySelectorAll('.nav-contact-link').forEach((el) => el.remove());

    /* Use CSS triangle caret — strip glyph text like ▾ */
    navlinks.querySelectorAll('.caret').forEach((el) => {
      el.textContent = '';
    });
  }

  document.querySelectorAll('.nav-item > span').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth > 900) return;
      e.preventDefault();
      e.stopPropagation();
      const item = trigger.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.nav-item.open').forEach((el) => el.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* Prevent sticky :hover mega-menus on touch / narrow viewports */
  const syncMobileNavFlag = () => {
    document.documentElement.classList.toggle('is-mobile-nav', window.innerWidth <= 900);
  };
  syncMobileNavFlag();
  window.addEventListener('resize', syncMobileNavFlag);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeNav();
  });

  /* ── Industry accordion ── */
  document.querySelectorAll('.acc-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.acc-item');
      const list = item.parentElement;
      const wasOpen = item.classList.contains('open');
      list.querySelectorAll('.acc-item.open').forEach((el) => el.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
  const firstAcc = document.querySelector('.acc-item');
  if (firstAcc) firstAcc.classList.add('open');

  /* ── Industries sliding window (always 4 visible) ── */
  const indBand = document.getElementById('industriesBand');
  if (indBand) {
    const viewport = indBand.querySelector('.ind-viewport');
    const track = document.getElementById('indTrack');
    const cols = [...indBand.querySelectorAll('.ind-col')];
    const imgs = indBand.querySelectorAll('.ind-bg img');
    const prev = document.getElementById('indPrev');
    const next = document.getElementById('indNext');
    const visible = 4;
    const maxStart = Math.max(0, cols.length - visible);
    let start = 0;

    function activateInd(col) {
      if (!col) return;
      const id = col.getAttribute('data-ind');
      cols.forEach((c) => c.classList.toggle('is-active', c === col));
      imgs.forEach((img) => img.classList.toggle('is-active', img.getAttribute('data-ind') === id));
    }

    function colWidth() {
      return viewport ? viewport.clientWidth / visible : 0;
    }

    function applySlide(animate = true) {
      if (!track || !viewport) return;
      if (window.matchMedia('(max-width: 980px)').matches) {
        track.style.transform = 'none';
        cols.forEach((c) => {
          c.style.width = '';
          c.style.minWidth = '';
          c.style.flex = '';
        });
        return;
      }
      const w = colWidth();
      cols.forEach((c) => {
        c.style.flex = `0 0 ${w}px`;
        c.style.width = `${w}px`;
        c.style.minWidth = `${w}px`;
      });
      if (!animate) track.style.transition = 'none';
      track.style.transform = `translateX(-${start * w}px)`;
      if (!animate) {
        void track.offsetWidth;
        track.style.transition = '';
      }
      if (prev) prev.disabled = start <= 0;
      if (next) next.disabled = start >= maxStart;
      const activeInView = cols.slice(start, start + visible).find((c) => c.classList.contains('is-active'));
      if (!activeInView) activateInd(cols[start]);
    }

    function shift(dir) {
      start = Math.min(maxStart, Math.max(0, start + dir));
      applySlide(true);
    }

    cols.forEach((col) => {
      col.addEventListener('mouseenter', () => activateInd(col));
      col.addEventListener('focus', () => activateInd(col));
      col.addEventListener('click', (e) => {
        if (!col.classList.contains('is-active') && window.matchMedia('(max-width: 980px)').matches) {
          e.preventDefault();
          activateInd(col);
        }
      });
    });

    if (prev) prev.addEventListener('click', () => shift(-1));
    if (next) next.addEventListener('click', () => shift(1));
    window.addEventListener('resize', () => applySlide(false));
    applySlide(false);
  }

  /* ── Count-up numbers on scroll ── */
  const counters = document.querySelectorAll('.count-up[data-target]');
  if (counters.length && !prefersReducedMotion) {
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    function runCount(el) {
      const target = Number(el.getAttribute('data-target')) || 0;
      const suffix = el.getAttribute('data-suffix') || '';
      const prefix = el.getAttribute('data-prefix') || '';
      const duration = 1400;
      const start = performance.now();

      function frame(now) {
        const p = Math.min(1, (now - start) / duration);
        const value = Math.round(target * easeOut(p));
        el.textContent = `${prefix}${value}${suffix}`;
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          runCount(entry.target);
          countObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.35 }
    );
    counters.forEach((el) => countObserver.observe(el));
  } else {
    counters.forEach((el) => {
      el.textContent = `${el.getAttribute('data-prefix') || ''}${el.getAttribute('data-target') || '0'}${el.getAttribute('data-suffix') || ''}`;
    });
  }

  /* ── Scroll reveal — improved stagger ── */
  if (!prefersReducedMotion) {
    const animatedSelectors = [
      '.reveal',
      '.framework-step',
      '.pipeline-step',
      '.bento-step',
      '.devops-node',
      '.zig-step',
      '.rail-step',
      '.why-stack-item',
      '.why-stat',
      '.why-dark-card',
      '.why-alt-row',
      '.acc-item'
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
          const delay = Math.min(idx, 8) * 75;

          setTimeout(() => entry.target.classList.add('in-view'), delay);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
  } else {
    document
      .querySelectorAll('.reveal, .framework-step, .pipeline-step, .bento-step, .devops-node, .zig-step')
      .forEach((el) => el.classList.add('in-view'));
  }
})();
