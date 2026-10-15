import Link from "next/link";

import T from "./T";
import Photo from "./Photo";

/*
 * The heading strip at the top of every inner page, with a breadcrumb
 * back to the home page.
 */
export default function PageBanner({
  titleKm,
  titleEn,
  introKm,
  introEn,
  img,
  altKm,
  altEn,
}: {
  titleKm: string;
  titleEn: string;
  introKm: string;
  introEn: string;
  /* Optional photo file name inside public/images, e.g. "programs.png".
     Omit these three to render a plain text banner. */
  img?: string;
  altKm?: string;
  altEn?: string;
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

      {img ? (
        <div className="wrap">
          <Photo
            name={img}
            altKm={altKm ?? ""}
            altEn={altEn ?? ""}
            className="photo photo-hero"
          />
        </div>
      ) : null}
    </section>
  );
}
