import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // ← Crucial for static exports
  distDir: 'out',   // ← Explicit output folder
  images: {
    unoptimized: true, // ← Required for static exports
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      }
    ],
  },
  trailingSlash: true, // ← Helps with Netlify routing
}

export default nextConfig