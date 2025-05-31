export function mobileMenu() {
 document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-icon');
    const navLinks = document.getElementById('mobile-nav');

    if (!hamburger || !navLinks) return;

    hamburger?.addEventListener('click', () => {
      navLinks?.classList.toggle('open');
      hamburger?.classList.toggle('open');
    });
  });
}