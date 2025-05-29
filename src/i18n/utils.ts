import { languages, defaultLocale } from '@i18n/ui';

export function getAlternateLanguageLinks(currentLocale: string, currentPath: string) {
  const pathParts = currentPath.split('/').filter(Boolean);

  // Strip current locale from path if it's not the default (i.e., remove `/fr/`)
  const relativePath =
    currentLocale === defaultLocale
      ? pathParts.join('/')
      : pathParts.slice(1).join('/');

  return Object.entries(languages)
    .filter(([locale]) => locale !== currentLocale)
    .map(([locale, { name, slug }]) => {
      const prefix = slug ? `/${slug}` : '';
      const url = relativePath ? `${prefix}/${relativePath}` : prefix || '/';
      return {
        locale,
        name,
        url: url.replace(/\/+/g, '/'), // normalize slashes
      };
    });
}
