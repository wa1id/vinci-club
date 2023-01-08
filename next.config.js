const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    USER_EMAILJS_SERVICE_ID: process.env.USER_EMAILJS_SERVICE_ID,
    USER_EMAILJS_TEMPLATE_ID: process.env.USER_EMAILJS_TEMPLATE_ID,
    USER_EMAILJS_PUBLIC_KEY: process.env.USER_EMAILJS_PUBLIC_KEY
  },
  i18n
};

module.exports = nextConfig;
