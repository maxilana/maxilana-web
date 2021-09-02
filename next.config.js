const withPreact = require('next-plugin-preact');
const nextBuildId = require('next-build-id');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const buildId = nextBuildId.sync({ dir: __dirname });

if (!process.env.IMAGES_DOMAINS) throw Error('Environment variable IMAGES_DOMAINS is missing');

module.exports = withPreact(
  withBundleAnalyzer({
    target: 'serverless',
    generateBuildId: () => buildId,
    reactStrictMode: true,
    images: {
      domains: process.env.IMAGES_DOMAINS.split(','),
      deviceSizes: [640, 750, 828, 1080, 1200],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
  }),
);
