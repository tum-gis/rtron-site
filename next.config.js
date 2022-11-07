const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
  unstable_staticImage: true,
  unstable_flexsearch: {
    codeblock: false
  }
})

module.exports = withNextra({
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
})