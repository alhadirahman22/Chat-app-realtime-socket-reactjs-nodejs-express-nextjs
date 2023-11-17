const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  env: {
    APP_KEY: process.env.APP_KEY,
  },
};

module.exports = nextConfig;
