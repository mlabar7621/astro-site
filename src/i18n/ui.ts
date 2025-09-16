export const languages = {
  en: { name: 'ENG', slug: 'en', img: `/img/icons/uk.png` },
  de: { name: 'DEU', slug: 'de', img: `/img/icons/deu.png` },
  fr: { name: 'FRA', slug: 'fr', img: `/img/icons/fra.png` },
  ru: { name: 'РУС', slug: 'ru', img: `/img/icons/rus.png` },
  be: { name: 'БЕЛ', slug: 'be', img: `/img/icons/by.png` }
};

export const defaultLocale = 'en';

export const ui_text = {
  en: {
    nav:{
        site_title: "Mikhail Labar",
        site_description: "Mikhail Labar's personal website and blog",
        title: "ML",
        home: "Home",
        resume: "Resume",
        blog: "Blog",
        about: "About",
        contact: "Contact",
        portfolio: "Portfolio",
        certifications: "Certifications",
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
        site_title: "ML",
        site_description: "Mikhail Labar's personal website and blog",
        title: "Personelle Seite",
        home: "Heim",
        resume: "CV",
        blog: "Blog",
        about: "Über Mich",
        contact: "Kontakt",
        portfolio: "Portfolio",
        certifications: "Certifications",
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
        site_title: "ML",
        site_description: "Mikhail Labar's personal website and blog",
        title: "Site Personel",
        home: "Acceuil",
        resume: "CV",
        blog: "Blog",
        about: "de Moi",
        contact: "Contacte",
        portfolio: "Portfolio",
        certifications: "Certifications",
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
        site_title: "ML",
        site_description: "Mikhail Labar's personal website and blog",
        title: "Personal Site",
        home: "Home",
        resume: "Resume",
        blog: "Blog",
        about: "About",
        contact: "Contact",
        portfolio: "Portfolio",
        certifications: "Certifications",
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
        site_title: "ML",
        site_description: "Mikhail Labar's personal website and blog",
        title: "Personal Site",
        home: "Home",
        resume: "Resume",
        blog: "Blog",
        about: "About",
        contact: "Contact",
        portfolio: "Portfolio",
        certifications: "Certifications",
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