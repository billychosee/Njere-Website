/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'e',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@sanity/ui', '@sanity/icons'],
};

module.exports = nextConfig;
