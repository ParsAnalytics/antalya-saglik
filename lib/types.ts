// lib/types.ts
export interface NewsItem {
  id: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
  image?: string;
  category: string;
  categoryColor: string;
  source: string;
  sourceLabel: string;
  author?: string;
}

export interface NewsSource {
  name: string;
  label: string;
  url: string;
  type: 'rss' | 'scrape';
  category: string;
  categoryColor: string;
}
