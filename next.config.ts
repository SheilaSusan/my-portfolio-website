import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
      protocol: 'https',
      hostname: 'pbs.twimg.com', // Add this for your Twitter image
      }
    ],
  },
}

export default nextConfig
