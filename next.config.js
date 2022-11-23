/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    USER_EMAILJS_SERVICE_ID: process.env.USER_EMAILJS_SERVICE_ID,
    USER_EMAILJS_TEMPLATE_ID: process.env.USER_EMAILJS_TEMPLATE_ID,
    USER_EMAILJS_USER_ID: process.env.USER_EMAILJS_USER_ID,
  }
}

module.exports = nextConfig
