import { languages } from '@i18n/ui';

export function getAlternateLanguageLinks(currentLocale: string, currentPath: string) {
  const pathParts = currentPath.split('/').filter(Boolean);

  //strip current locale from path (i.e., remove `/fr/`)
  const relativePath = pathParts.slice(1).join('/');

  return Object.entries(languages)
    .filter(([locale]) => locale !== currentLocale)
    .map(([locale, { name, slug, img }]) => {
      const prefix = slug ? `/${slug}` : '';
      const url = relativePath ? `${prefix}/${relativePath}/` : `${prefix}/` || '/';
      return {
        locale,
        name,
        img,
        url: url.replace(/\/+/g, '/'), //normalize slashes
      };
    });
}

export function getCurrentLanguageData(currentLocale: string){
    const {name, img} = languages[currentLocale as keyof typeof languages];
    return {
        name,
        img
    }
}