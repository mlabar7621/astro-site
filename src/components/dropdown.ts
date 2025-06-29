export function dropdownScript() {
  const dropdowns = document.querySelectorAll('.dropdown');
  const selectorDropdowns = document.querySelectorAll('.dropdown.selector');

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

  selectorDropdowns.forEach(dropdown => {
    const triggerText = dropdown.querySelector('.dropdown-button p')!;
    const content = dropdown.querySelectorAll('.dropdown-content li');
    const hiddenInput = dropdown.querySelector('.dropdown-hidden') as HTMLInputElement;

    content.forEach(option => {
      option.addEventListener('click', (e) => {
        const value = option.getAttribute('data-value')!;
        triggerText.textContent = option.textContent;
        hiddenInput.value = value;
        hiddenInput.dispatchEvent(new Event('change', { bubbles: true }));
        dropdown.classList.remove('open');
      });
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