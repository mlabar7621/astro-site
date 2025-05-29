export const languages = {
  en: { name: 'English', slug: ''},
  de: { name: 'Deutsch', slug: 'de'},
  fr: { name: 'Français', slug: 'fr'},
  ru: { name: 'Русский', slug: 'ru'},
  be: { name: 'Беларускій', slug: 'be'}
};

export const defaultLocale = 'en';

export const ui_text = {
  en: {
    nav:{
        title: "Personal Site",
        home: "Home",
        blog: "Blog",
        about: "About"
    }
  },
  de: {
    nav:{
        title: "Personelle Seite",
        home: "Heim",
        blog: "Blog",
        about: "Über Mich"
    }
  },
  fr: {
    nav:{
        title: "Site Personel",
        home: "Home",
        blog: "Blog",
        about: "de Moi"
    }
  },
  ru: {
    nav:{
        title: "Personal Site",
        home: "Home",
        blog: "Blog",
        about: "About"
    }
  },
  be: {
    nav:{
        title: "Personal Site",
        home: "Home",
        blog: "Blog",
        about: "About"
    }
  }
} as const;