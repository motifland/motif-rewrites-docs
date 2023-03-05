// Attempt 1
// - Keep skipMiddlewareUrlNormalize
// - Add this externalMiddlewareRewritesResolve here
// This WORKS!
// ---------------------------------------------------
// Attempt 2
// - Keep externalMiddlewareRewritesResolve here
// - Remove skipMiddlewareUrlNormalize
// This WORKS!
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/__motif/assets',
  reactStrictMode: true,
  // skipMiddlewareUrlNormalize: true,
  experimental: {
    externalMiddlewareRewritesResolve: true,
  },
}

module.exports = nextConfig
