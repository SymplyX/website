/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: true,
  }
}

module.exports = nextConfig
