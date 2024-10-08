const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    esmExternals: 'loose',
  },
  headers: async function headers() {
    if (process.env.NODE_ENV === 'development') return [];

    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source:
          '/:all*(svg|jpg|JPG|jpeg|png|webp|avif|otf|ttf|woff|woff2|eot|mp4|webm|ogg|mp3|wav|flac|aac)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
