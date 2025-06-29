import { languages } from '@i18n/ui';

const BASE_PATH = '/astro-site'; // Change this if your base changes

export function getAlternateLanguageLinks(currentLocale: string, currentPath: string) {
  const pathParts = currentPath.split('/').filter(Boolean);

  // The locale is always the first segment after the base path
  // e.g., ['astro-site', 'en', 'resume']
  const base = BASE_PATH.replace(/^\/|\/$/g, ''); // 'astro-site'
  const baseIndex = pathParts[0] === base ? 1 : 0;

  return Object.entries(languages)
    .filter(([locale]) => locale !== currentLocale)
    .map(([locale, { name, slug, img }]) => {
      // Replace the locale segment with the new slug
      const newParts = [...pathParts];
      newParts[baseIndex] = slug;
      let url = '/' + newParts.join('/') + '/';
      url = url.replace(/\/+/g, '/'); // normalize slashes
      return {
        locale,
        name,
        img,
        url,
      };
    });
}

export function getCurrentLanguageData(currentLocale: string) {
  const { name, img } = languages[currentLocale as keyof typeof languages];
  return {
    name,
    img,
  };
}