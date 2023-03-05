// Attempt 1
// - Add this externalMiddlewareRewritesResolve here
// - Keep skipMiddlewareUrlNormalize
// This WORKS!
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/__motif/assets',
  reactStrictMode: true,
  skipMiddlewareUrlNormalize: true,
  experimental: {
    externalMiddlewareRewritesResolve: true,
  },
}

module.exports = nextConfig
