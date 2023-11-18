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
    APP_URL: process.env.APP_URL,
    APP_SOCKET_URL: process.env.APP_SOCKET_URL,
  },
};

module.exports = nextConfig;
