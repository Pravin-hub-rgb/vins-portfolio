/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable ESLint during production build
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig