/* Sticky nav state — toggles .scrolled past 40px */
(function () {
  function init() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  document.addEventListener('partials:ready', init);
})();
