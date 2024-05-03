/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
      unoptimized: true,
      domains: ['https://apod.nasa.gov/'],
    }
  }

export default nextConfig;
