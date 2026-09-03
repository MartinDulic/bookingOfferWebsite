/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Dev-only: lets phones on the LAN load /_next/* assets. Without this the
  // dev server 403s those requests, the page renders but never hydrates.
  allowedDevOrigins: ['192.168.1.8'],
};

export default nextConfig;
