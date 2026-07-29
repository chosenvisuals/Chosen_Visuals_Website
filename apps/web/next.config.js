/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@chosen-visuals/ui", "@chosen-visuals/shared-types"],
};

module.exports = nextConfig;
