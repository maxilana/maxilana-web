const withPreact = require('next-plugin-preact');
const nextBuildId = require('next-build-id');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const buildId = nextBuildId.sync({ dir: __dirname });

module.exports = withPreact(
  withBundleAnalyzer({
    target: 'serverless',
    generateBuildId: () => buildId,
    reactStrictMode: true,
    images: {
      domains: ['www.maxilana.com'],
      deviceSizes: [640, 750, 828, 1080, 1200],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
  }),
);
