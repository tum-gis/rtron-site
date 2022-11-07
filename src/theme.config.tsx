import type {DocsThemeConfig} from 'nextra-theme-docs'
import {useConfig} from 'nextra-theme-docs'
import TumLogo from '../src/components/logos/TUM'
import SavenowLogo from '../src/components/logos/SAVeNoW'
import RtronSmallLogo from "./components/logos/rtron-small";

const config: DocsThemeConfig = {
    project: {
        link: "https://github.com/tum-gis/rtron",
    },
    chat: {
        link: "https://discord.gg/7w2G5FVt3p",
    },
    docsRepositoryBase: 'https://github.com/tum-gis/rtron-site/',
    getNextSeoProps() {
        return {
            titleTemplate: `%s | r:trån`,
        };
    },
    editLink: {
        text: 'Edit this page on GitHub'
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
    head: () => (
        <>
        </>
    ),
    footer: {
        text() {
            return (
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
            );
        },
    },
};

export default config;