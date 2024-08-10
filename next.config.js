const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  unstable_staticImage: true,
  unstable_flexsearch: {
    codeblock: false
  }
})

module.exports = withNextra({
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
})