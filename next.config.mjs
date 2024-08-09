import nextra from "nextra";

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
})

export default withNextra({
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
})
