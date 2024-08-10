import "../style.css";
import "nextra-theme-docs/style.css";
import "@fontsource/open-sans/latin-300.css";

// @ts-ignore
export default function Nextra({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page: any) => page);
    return getLayout(<Component {...pageProps} />);
}
