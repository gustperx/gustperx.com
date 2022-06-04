/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "es-ES"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
};

module.exports = nextConfig;
