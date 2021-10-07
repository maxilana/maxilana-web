const withPreact = require('next-plugin-preact');
const nextBuildId = require('next-build-id');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const buildId = nextBuildId.sync({ dir: __dirname });

if (!process.env.IMAGES_DOMAINS) throw Error('Environment variable IMAGES_DOMAINS is missing');
if (!process.env.IMAGES_DEVICE_SIZES) {
  throw Error('Environment variable IMAGES_DEVICE_SIZES is missing');
}
if (!process.env.IMAGES_SIZES) throw Error('Environment variable IMAGES_SIZES is missing');

if (!`${process.env.IMAGES_DOMAINS}`.includes('maps.googleapis.com')) {
  throw Error('Environment variable IMAGES_DOMAINS not includes maps.googleapis.com');
}
if (!`${process.env.IMAGES_DOMAINS}`.includes('img.youtube.com')) {
  throw Error('Environment variable IMAGES_DOMAINS not includes img.youtube.com');
}
module.exports = withPreact(
  withBundleAnalyzer({
    target: 'serverless',
    generateBuildId: () => buildId,
    reactStrictMode: true,
    images: {
      domains: process.env.IMAGES_DOMAINS.split(','),
      deviceSizes: process.env.IMAGES_DEVICE_SIZES.split(',').map((item) => parseInt(item)),
      imageSizes: process.env.IMAGES_SIZES.split(',').map((item) => parseInt(item)),
    },
    async rewrites() {
      return [
        {
          source: '/sitemap.xml',
          destination: '/sitemap',
        },
      ];
    },
  }),
);
