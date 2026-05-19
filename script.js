/* ============================================================
   STARYZANOVY · v2 · interactions
   ============================================================ */

(() => {
  'use strict';

  /* ---------- sticky nav state ---------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('is-stuck', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- reveal on scroll ---------- */
  const revealTargets = document.querySelectorAll(
    '.section__head, .step, .card, .post, .testimonial, .faq__item, ' +
    '.broker__photo, .broker__body, .contact__left, .contact__form, ' +
    '.hero__lead, .hero__actions, .hero__stats, .hero__photo, .trust__item, .quote blockquote'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger items within the same parent
          const parent = entry.target.parentElement;
          const siblings = parent ? [...parent.children].filter((c) => c.classList.contains('reveal')) : [];
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${Math.min(idx, 4) * 0.08}s`;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );
  revealTargets.forEach((el) => io.observe(el));

  /* ---------- smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- hero photo subtle parallax ---------- */
  const photo = document.querySelector('.hero__photo img');
  if (photo && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let raf;
    window.addEventListener('scroll', () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 600);
        photo.style.transform = `scale(1.06) translateY(${y * 0.06}px)`;
      });
    }, { passive: true });
  }

  /* ---------- FAQ — close others on open (optional) ---------- */
  document.querySelectorAll('.faq__item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      document.querySelectorAll('.faq__item[open]').forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });

  /* ---------- mobile burger (no menu drawer yet — anchor scroll) ---------- */
  const burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', () => {
      // simple behaviour: scroll to contact CTA for now
      document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

})();
