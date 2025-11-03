/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['xemoventures.com', 'i0.wp.com'],
  },
}

module.exports = nextConfig
