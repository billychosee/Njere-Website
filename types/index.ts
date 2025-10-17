// types/index.ts

// We need to import the types for PortableText (the rich text body)
import { PortableTextBlock } from '@portabletext/types';

// This defines the shape of a single diary entry for the list page
export interface DiaryEntry {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  image: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
}

// This defines the shape of a full diary entry for the individual post page
export interface FullDiaryEntry
  extends Omit<DiaryEntry, 'excerpt' | 'readTime' | 'category'> {
  body: PortableTextBlock[];
}
