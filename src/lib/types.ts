interface SanityBase {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
}

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface Researcher extends SanityBase {
  name: string;
  role: string;
  profileImage?: SanityImage;
}

export interface Article extends SanityBase {
  title: string;
  slug: SanitySlug;
  category: string;
  publishedAt: string;
  mainImage: SanityImage;
  excerpt: string;
  authorNames: string[];
  body?: unknown;
}

export interface News extends SanityBase {
  title: string;
  slug: SanitySlug;
  category: string;
  publishedAt: string;
  mainImage: SanityImage;
  excerpt: string;
  body?: unknown;
}

export interface BookChapter extends SanityBase {
  title: string;
  authors: string[];
  bookTitle: string;
  publisher: string;
  year: string;
  coverImage: SanityImage;
  downloadLink: string;
}

export interface Proceedings extends SanityBase {
  eventTitle: string;
  date: string;
  theme: string;
  description: string;
  downloadLink: string;
}

export interface Activity extends SanityBase {
  title: string;
  slug: SanitySlug;
  date: string;
  category: string;
  mainImage: SanityImage;
  description: string;
  detailsLink?: string;
}