import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.haberantalya.com' },
      { protocol: 'https', hostname: '*.haberantalya.com' },
      { protocol: 'https', hostname: '*.antalyayasam.com.tr' },
      { protocol: 'https', hostname: '*.mygazete.com.tr' },
      { protocol: 'https', hostname: '*.akdeniz.edu.tr' },
      { protocol: 'https', hostname: '*.saglik.gov.tr' },
      { protocol: 'https', hostname: '*.wordpress.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS' },
          { key: 'Cache-Control', value: 'public, s-maxage=900, stale-while-revalidate=1800' },
        ],
      },
    ];
  },
};

export default nextConfig;
