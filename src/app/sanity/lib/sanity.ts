// lib/sanity.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Read from .env.local
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Read from .env.local
  useCdn: true,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // Read from .env.local
});
