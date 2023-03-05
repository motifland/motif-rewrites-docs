// Attempt 1
// - Keep skipMiddlewareUrlNormalize
// - Add this externalMiddlewareRewritesResolve here
// This WORKS!
// ---------------------------------------------------
// Attempt 2
// Now we have middleware rewrites /docs/... to
// /domains/.../docs./...
// - Keep externalMiddlewareRewritesResolve here
// - Remove skipMiddlewareUrlNormalize
// This doesn't work
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
