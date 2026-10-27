// Mobile navigation; no external dependencies.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', '메뉴 열기');
  nav.classList.remove('is-open');
}
toggle?.addEventListener('click', () => {
  const opened = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!opened));
  toggle.setAttribute('aria-label', opened ? '메뉴 열기' : '메뉴 닫기');
  nav.classList.toggle('is-open', !opened);
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
