export function dropdownScript() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.dropdown-button');
    const content = dropdown.querySelector('.dropdown-content');

    if (!trigger || !content) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation(); // Don't close immediately on open
      closeAllDropdownsExcept(dropdown);
      dropdown.classList.toggle('open');
    });

    content.addEventListener('click', (e) => {
      e.stopPropagation(); // Clicking inside should not close it
    });
  });

  // Close all dropdowns on outside click
  document.addEventListener('click', () => {
    dropdowns.forEach(d => d.classList.remove('open'));
  });

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdowns.forEach(d => d.classList.remove('open'));
    }
  });

  function closeAllDropdownsExcept(current: Element) {
    dropdowns.forEach(d => {
      if (d !== current) d.classList.remove('open');
    });
  }
}