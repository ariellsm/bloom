/* ============================================================
   BLOOM HEALTH — main.js
   Mobile menu · FAQ accordion · Smooth scroll
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Mobile menu ──────────────────────────────────────── */
  const hamburger  = document.querySelector('.hamburger');
  const navOverlay = document.querySelector('.nav-overlay');
  const closeBtn   = document.querySelector('.nav-overlay .close-btn');

  function openMenu() {
    navOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);

  navOverlay?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navOverlay?.classList.contains('open')) closeMenu();
  });

  /* ── FAQ accordion ────────────────────────────────────── */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Active nav link ──────────────────────────────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-overlay a').forEach(link => {
    const linkPage = link.getAttribute('href')?.split('/').pop();
    if (linkPage === currentPath) link.classList.add('active');
  });

});
