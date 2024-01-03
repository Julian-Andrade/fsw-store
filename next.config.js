/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'fsw-store.s3.sa-east-1.amazonaws.com',
      'i.ibb.co',
      'www.apple.com',
      'store.storeimages.cdn-apple.com',
    ],
  },
}

module.exports = nextConfig
