/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    localeDetection: false,
  },
  images: {
    domains: ["res.cloudinary.com", "www.datocms-assets.com"],
  },
};

module.exports = nextConfig;
