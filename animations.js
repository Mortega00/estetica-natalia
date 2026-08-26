(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const header = document.querySelector('.header');

  const updateHeader = () => {
    if (header) {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    }
  };

  updateHeader();
  let scrollFrame = null;
  window.addEventListener('scroll', () => {
    if (scrollFrame) {
      return;
    }

    scrollFrame = window.requestAnimationFrame(() => {
      updateHeader();
      scrollFrame = null;
    });
  }, { passive: true });

  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    return;
  }

  const revealSelectors = [
    '.section-title-container',
    '.trayectoria-badge',
    '.services-grid',
    '.combos-section > .container > .combos-grid',
    '.combos-more',
    '.plan-conditions-card',
    '.space-image-wrapper',
    '.space-content',
    '.before-after-grid',
    '.experience-image-wrapper',
    '.experience-content',
    '.testimonials-wrapper',
    '.faq-editorial'
  ];

  const revealTargets = [...new Set(
    revealSelectors.flatMap(selector => [...document.querySelectorAll(selector)])
  )];

  if (!revealTargets.length) {
    return;
  }

  document.documentElement.classList.add('reveal-ready');

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -8%'
  });

  revealTargets.forEach(target => {
    target.classList.add('reveal');
    observer.observe(target);
  });
})();
