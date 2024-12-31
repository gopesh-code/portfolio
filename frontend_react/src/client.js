// client.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-08-13',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  if (!source || !source.asset) {
    console.error('Invalid image source:', source);
    return '/path-to-placeholder-image.jpg'; // Fallback to a placeholder image
  }
  return builder.image(source);
};
