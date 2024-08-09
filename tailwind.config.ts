import type { Config } from "tailwindcss";

const config: Config = {
    mode: "jit",
    content: [
        "./src/components/**/*.js",
        "./src/pages/**/*.{md,mdx}",
        "./src/theme.config.tsx",
    ],
};

export default config;