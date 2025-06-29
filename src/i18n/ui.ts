const BASE_URL = import.meta.env.BASE_URL || '/';

export const languages = {
  en: { name: 'ENG', slug: 'en', img: `${BASE_URL}/img/icons/uk.png` },
  de: { name: 'DEU', slug: 'de', img: `${BASE_URL}/img/icons/deu.png` },
  fr: { name: 'FRA', slug: 'fr', img: `${BASE_URL}/img/icons/fra.png` },
  ru: { name: 'РУС', slug: 'ru', img: `${BASE_URL}/img/icons/rus.png` },
  be: { name: 'БЕЛ', slug: 'be', img: `${BASE_URL}/img/icons/by.png` }
};

export const defaultLocale = 'en';

export const ui_text = {
  en: {
    nav:{
        site_title: "Mikhail Labar",
        site_description: "Mikhail Labar's personal website and blog",
        title: "Personal Site",
        home: "Home",
        resume: "Resume",
        blog: "Blog",
        about: "About",
        contact: "Contact",
        license: "All content licensed under",
    },
    blog:{
      search: "Search posts",
      sort: "Sort by",
      date: "Date",
      rating: "Rating",
      tag_filter: "Filter",
      tag_select: "No Category",
    }
  },
  de: {
    nav:{
        site_title: "Mikhail Labar",
        site_description: "Mikhail Labar's personal website and blog",
        title: "Personelle Seite",
        home: "Heim",
        resume: "CV",
        blog: "Blog",
        about: "Über Mich",
        contact: "Kontakt",
        license: "All content licensed under",
    },
    blog:{
      search: "Search posts",
      sort: "Sort by",
      date: "Date",
      rating: "Rating",
      tag_filter: "Filter by",
      tag_select: "Select a Tag",
    }
  },
  fr: {
    nav:{
        site_title: "Mikhail Labar",
        site_description: "Mikhail Labar's personal website and blog",
        title: "Site Personel",
        home: "Acceuil",
        resume: "CV",
        blog: "Blog",
        about: "de Moi",
        contact: "Contacte",
        license: "All content licensed under",
    },
    blog:{
      search: "Search posts",
      sort: "Sort by",
      date: "Date",
      rating: "Rating",
      tag_filter: "Filter by",
      tag_select: "Select a Tag",
    }
  },
  ru: {
    nav:{
        site_title: "Mikhail Labar",
        site_description: "Mikhail Labar's personal website and blog",
        title: "Personal Site",
        home: "Home",
        resume: "Resume",
        blog: "Blog",
        about: "About",
        contact: "Contact",
        license: "All content licensed under",
    },
    blog:{
      search: "Search posts",
      sort: "Sort by",
      date: "Date",
      rating: "Rating",
      tag_filter: "Filter by",
      tag_select: "Select a Tag",
    }
  },
  be: {
    nav:{
        site_title: "Mikhail Labar",
        site_description: "Mikhail Labar's personal website and blog",
        title: "Personal Site",
        home: "Home",
        resume: "Resume",
        blog: "Blog",
        about: "About",
        contact: "Contact",
        license: "All content licensed under",
    },
    blog:{
      search: "Search posts",
      sort: "Sort by",
      date: "Date",
      rating: "Rating",
      tag_filter: "Filter by",
      tag_select: "Select a Tag",
    }
  }
} as const;