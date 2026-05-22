/* Reveal on scroll — IntersectionObserver adds .is-in to .reveal / .split */
(function () {
  function init() {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    );
    document.querySelectorAll('.reveal, .split').forEach((el) => io.observe(el));

    setTimeout(
      () => document.querySelectorAll('.hero .reveal').forEach((el) => el.classList.add('is-in')),
      120,
    );
  }
  document.addEventListener('partials:ready', init);
})();
