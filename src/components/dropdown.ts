export function dropdownScript(dropdown_class: string, button_class: string, content_class: string) {
  const dropdowns = document.querySelectorAll(dropdown_class);

  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector(button_class);
    const content = dropdown.querySelector(content_class);

    if (!trigger || !content) return;

    // Don't close immediately on open
    trigger.addEventListener('click', (e) => {
      e.stopPropagation(); 
      closeAllDropdownsExcept(dropdown);
      dropdown.classList.toggle('open');
    });

    // Clicking inside should not close it
    content.addEventListener('click', (e) => {
      e.stopPropagation(); 
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

export function selectorDropdownScript(selector_class: string) {
  const selectorDropdowns = document.querySelectorAll(selector_class);

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
}