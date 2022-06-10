/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    localeDetection: false,
  },
  images: {
    domains: ["res.cloudinary.com", "via.placeholder.com"],
  },
};

module.exports = nextConfig;
