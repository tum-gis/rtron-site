import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";
import { Page } from "nextra";

export default function BlogIndex({ more = "Read more" }) {
  let pages: Page[] = getPagesUnderRoute("/blog");

  return pages.map((page) => {
    // Alias `<a>` to avoid it being replaced by MDX components.
    const A = "a";
    return (
      <div className="">
        <h3>
          <Link href={page.route}>
            <A style={{ color: "inherit", textDecoration: "none" }}>
              {page.meta?.title || (page.kind !== "MdxPage" || page.frontMatter?.title) || page.name}
            </A>
          </Link>
        </h3>
        <p className="opacity-60">
          {page.kind !== "MdxPage" || page?.frontMatter?.description}{" "}
          <Link href={page.route}>{more + " →"}</Link>
        </p>
        {page.kind !== "MdxPage" || page?.frontMatter?.date ? (
          <p className="opacity-50 text-sm">{page.kind !== "MdxPage" || page?.frontMatter?.date}</p>
        ) : null}
      </div>
    );
  });
}
