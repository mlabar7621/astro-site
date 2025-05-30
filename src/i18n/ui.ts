export const languages = {
  en: { name: 'ENG', slug: '', img: "/src/assets/img/icons/uk.png"},
  de: { name: 'DEU', slug: 'de', img: "/src/assets/img/icons/deu.png"},
  fr: { name: 'FRA', slug: 'fr', img: "/src/assets/img/icons/fra.png"},
  ru: { name: 'РУС', slug: 'ru', img: "/src/assets/img/icons/rus.png"},
  be: { name: 'БЕЛ', slug: 'be', img: "/src/assets/img/icons/by.png"}
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