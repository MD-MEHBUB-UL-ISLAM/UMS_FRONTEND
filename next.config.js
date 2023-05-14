/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'umsbackendteo-production.up.railway.app',
        port: '3000',
       
      },
    ],
  },
  nextConfig
}