
export type Language = 'am' | 'en';

export interface GalleryImageTranslation {
  label: string;
  desc: string;
}

export interface GalleryAlbumTranslation {
  title: string;
  images: GalleryImageTranslation[];
}

export interface TranslationContent {
  nav: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  home: {
    welcome: string;
    intro: string;
    recentAnnouncements: string;
    announcement1: string;
    announcement2: string;
  };
  about: {
    title: string;
    fullName: string;
    churchType: string;
    address: string;
    plusCode: string;
    hours: string;
    historyTitle: string;
    historyText: string;
  };
  services: {
    title: string;
    liturgy: string;
    liturgyDesc: string;
    prayer: string;
    prayerDesc: string;
    choir: string;
    choirDesc: string;
    eventsTitle: string;
    events: { date: string; title: string }[];
  };
  gallery: {
    title: string;
    description: string;
    quote: string;
    quoteSource: string;
    quoteTitle: string;
    albums: GalleryAlbumTranslation[];
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    findUs: string;
    phone: string;
  };
}
