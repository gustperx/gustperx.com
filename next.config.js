/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "es-ES"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
  images: {
    domains: ["res.cloudinary.com", "via.placeholder.com"],
  },
};

module.exports = nextConfig;
