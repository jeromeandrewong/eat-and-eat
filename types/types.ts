export type PostType = {
  slug: string;
  title: string;
  date: string;
  breakdown: string;
  town: string;
  location: string;
  openingHours: string;
  website: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
  };
};
