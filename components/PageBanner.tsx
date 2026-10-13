import Link from "next/link";

import T from "./T";

/*
 * The heading strip at the top of every inner page, with a breadcrumb
 * back to the home page.
 */
export default function PageBanner({
  titleKm,
  titleEn,
  introKm,
  introEn,
}: {
  titleKm: string;
  titleEn: string;
  introKm: string;
  introEn: string;
}) {
  return (
    <section className="page-banner">
      <div className="wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">
            <T km="ទំព័រដើម" en="Home" />
          </Link>{" "}
          <span aria-hidden="true">/</span>{" "}
          <T km={titleKm} en={titleEn} />
        </nav>
        <h1>
          <T km={titleKm} en={titleEn} />
        </h1>
        <p>
          <T km={introKm} en={introEn} />
        </p>
      </div>
    </section>
  );
}
