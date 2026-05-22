/* Custom cursor — smooth follow + hover state */
(function () {
  if (matchMedia('(max-width: 820px)').matches) return;

  const c = document.getElementById('cursor');
  const d = document.getElementById('cursorDot');
  if (!c || !d) return;

  let tx = 0, ty = 0, cx = 0, cy = 0;
  window.addEventListener('mousemove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
    d.style.transform = `translate(${tx}px,${ty}px) translate(-50%,-50%)`;
  });

  function tick() {
    cx += (tx - cx) * 0.15;
    cy += (ty - cy) * 0.15;
    c.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
    requestAnimationFrame(tick);
  }
  tick();

  function bindHovers() {
    const hoverSel = 'a, button, .dir-item, .price-card, .master, input, select, textarea';
    document.querySelectorAll(hoverSel).forEach((el) => {
      el.addEventListener('mouseenter', () => c.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => c.classList.remove('is-hover'));
    });
  }
  document.addEventListener('partials:ready', bindHovers);
})();
