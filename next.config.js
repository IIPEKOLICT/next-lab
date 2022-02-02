/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.pcclean.io', 'images.ctfassets.net'],
  },
  experimental: {
    styledComponents: true,
  },
}

module.exports = nextConfig
