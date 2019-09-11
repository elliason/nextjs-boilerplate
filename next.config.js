const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
const withSass = require('@zeit/next-sass');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = withBundleAnalyzer(withSass({
  webpack (config, options) {
    if (config.resolve.plugins) {
      config.resolve.plugins(new TsconfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }
    return config
  }
}));
  