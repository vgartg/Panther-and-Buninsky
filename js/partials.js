(function () {
  async function loadOne(el) {
    const name = el.dataset.partial;
    const res = await fetch('partials/' + name + '.html');
    if (!res.ok) throw new Error('Failed to load partial: ' + name);
    const html = await res.text();
    const tmp = document.createElement('template');
    tmp.innerHTML = html.trim();
    el.replaceWith(tmp.content);
  }

  async function loadAll() {
    const targets = document.querySelectorAll('[data-partial]');
    await Promise.all([...targets].map(loadOne));
    document.dispatchEvent(new Event('partials:ready'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAll, { once: true });
  } else {
    loadAll();
  }
})();
