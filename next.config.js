/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  // // Cf /docs/middleware.md
  // assetPrefix: '/__motif/assets',
  // // Cf /docs/middleware.md
  // // skipMiddlewareUrlNormalize: true,
  // images: {
  //   domains: [
  //     'source.unsplash.com',
  //     'images.unsplash.com',
  //     'res.cloudinary.com',
  //   ],
  //   formats: ['image/avif', 'image/webp'],
  // },
  // experimental: {
  //   externalDir: true, // allows us to build the project with external TS files
  //   // externalMiddlewareRewritesResolve: true,
  // },
  assetPrefix: '/__motif/assets',
  reactStrictMode: true,
  // skipMiddlewareUrlNormalize: true,
}

module.exports = nextConfig
