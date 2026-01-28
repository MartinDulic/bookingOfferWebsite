/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // THIS IS CRITICAL for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
