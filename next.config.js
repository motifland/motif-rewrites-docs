/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/__motif/assets',
  reactStrictMode: true,
  experimental: {
    externalMiddlewareRewritesResolve: true,
  },
}

module.exports = nextConfig
