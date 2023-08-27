/** @type {import('next').NextConfig} */
const nextConfig = {
        output: 'export',
}

module.exports = { 
        nextConfig,
        webpack: (config, { isServer }) => {
          if (!isServer) {
            config.resolve.fallback.fs = false;
          }
          return config;
        },
      }