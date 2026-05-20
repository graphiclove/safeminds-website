import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/testen',
        destination: '/kurse',
        permanent: false, // 307 — reversible if we bring /testen back
      },
    ]
  },
}

export default nextConfig
