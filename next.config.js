/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    BASE_URL: 'http://137.184.238.12:4000',
  },
};

module.exports = nextConfig;
