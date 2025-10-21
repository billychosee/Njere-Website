// sanity.config.ts
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

// Import the entire 'schema' object
import { schema } from './src/app/sanity/schemaTypes';
import { structure } from './src/app/sanity/structure';

export default defineConfig({
  basePath: '/studio',

  // Use the loaded variables here
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'u09fo6dn',
  dataset: process.env.VITE_SANITY_DATASET || 'production',

  schema: {
    types: schema.types,
  },

  plugins: [
    structureTool({ structure }),
    visionTool({
      defaultApiVersion: process.env.VITE_SANITY_API_VERSION || '2024-05-23',
    }),
  ],
});
