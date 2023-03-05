// Attempt 1
// This is with regular paths which are not rewritten.
// - Keep skipMiddlewareUrlNormalize
// - Add this externalMiddlewareRewritesResolve here
// This WORKS!
// Attempt 2
// This is with regular paths which are not rewritten.
// - Remove skipMiddlewareUrlNormalize
// - Keep externalMiddlewareRewritesResolve
// This WORKS!
// ---------------------------------------------------
// Attempt 3
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
