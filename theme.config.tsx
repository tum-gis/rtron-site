import type {DocsThemeConfig} from 'nextra-theme-docs'
import {useConfig} from 'nextra-theme-docs'
import TumLogo from './components/logos/tum'
import SavenowLogo from './components/logos/savenow'
import RtronSmallLogo from "./components/logos/rtron-small";
import {useRouter} from "next/router";

const config: DocsThemeConfig = {
    project: {
        link: "https://github.com/tum-gis/rtron",
    },
    chat: {
        link: "https://discord.gg/7w2G5FVt3p",
    },
    docsRepositoryBase: 'https://github.com/tum-gis/rtron-site/blob/main',
    editLink: {
        content: 'Edit this page on GitHub'
    },
    feedback: {
        content: "Question? Give us feedback →",
        labels: "feedback"
    },
    logo: () => (
        <>
            <RtronSmallLogo height={30} />
            <span className="mx-2 font-extrabold hidden md:inline select-none">
                r:trån
            </span>
        </>
    ),
  head: function useHead() {
    const config = useConfig()
    const { route } = useRouter()
    const isDefault = route === '/' || !config.title

    const description =
      config.frontMatter.description ||
      'Processing Library for Road Space Models.'
    const title = config.title + (route === '/' ? '' : ' - r:trån')

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="rtron.io" />
        <meta name="twitter:url" content="https://rtron.io" />
        <meta name="apple-mobile-web-app-title" content="rtron" />
        <link rel="icon" href="/favicon.ico" type="image/ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
    footer: {
        content: (
                <>
                <a
                    href="https://github.com/tum-gis"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center no-underline text-current font-semibold"
                >
                    <span className="mr-2">Powered by</span>
                    <span className="mr-2">
                        <TumLogo height={50} />
                    </span>
                </a>
                <a
                    href="https://github.com/savenow"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center no-underline text-current font-semibold"
                >
                    <span>
                        <SavenowLogo height={50} />
                    </span>
                </a>
                </>
            )
    },
};

export default config;