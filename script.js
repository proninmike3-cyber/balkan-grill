(() => {
  const navButton = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobile-menu');
  const closeMobile = () => {
    if (!navButton || !mobileNav) return;
    mobileNav.hidden = true;
    navButton.setAttribute('aria-expanded','false');
    navButton.setAttribute('aria-label','Открыть меню');
  };
  navButton?.addEventListener('click', () => {
    const willOpen = mobileNav.hidden;
    mobileNav.hidden = !willOpen;
    navButton.setAttribute('aria-expanded', String(willOpen));
    navButton.setAttribute('aria-label', willOpen ? 'Закрыть меню' : 'Открыть меню');
  });
  mobileNav?.querySelectorAll('a').forEach(el => el.addEventListener('click', closeMobile));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobile(); });
  document.addEventListener('click', e => { if (!mobileNav?.hidden && !e.target.closest('.site-header')) closeMobile(); });

  const tabs = document.querySelectorAll('.menu-tab');
  const cards = document.querySelectorAll('.dish-card');
  tabs.forEach(tab => tab.addEventListener('click', () => {
    const category = tab.dataset.category;
    tabs.forEach(t => {
      const active = t === tab;
      t.classList.toggle('active',active);
      t.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
  }));
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
