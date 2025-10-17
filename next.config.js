/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  // This enables the Next.js server, which is required for your API route (/api/contact)
  // to execute the NodeMailer code.

  images: {
    // Keeping unoptimized: true, as you had it, often used for static-like behavior
    // or when not relying on Next.js Image Optimization server-side.
    unoptimized: true,
  },

  // Keeping this as you had it
  reactStrictMode: true,

  // NOTE: If you are not using rewrites, you can remove the commented block below.
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://erp.smatechgroup.com/api/:path*'
  //     }
  //   ];
  // },
};

module.exports = nextConfig;