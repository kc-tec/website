/**
 * A photo slot on the site.
 *
 * Every image lives in public/images and is referenced with a plain
 * root-relative path. The site is served from a custom domain at the root,
 * so these paths must NOT carry a repository sub-path — see the
 * "Using a custom domain" section of the README.
 *
 * To use the college's own photographs, overwrite the matching file in
 * public/images. No change to this component is needed.
 */

type PhotoProps = {
  /** File name inside public/images, e.g. "hero.png". */
  name: string;
  /** Khmer description, shown to Khmer screen reader users. */
  altKm: string;
  /** English description, shown to English screen reader users. */
  altEn: string;
  /** Extra classes for layout (see .photo variants in globals.css). */
  className?: string;
  /** Set false for purely decorative images. */
  decorative?: boolean;
  /** Inline styles. */
  style?: React.CSSProperties;
};

export default function Photo({
  name,
  altKm,
  altEn,
  className,
  decorative = false,
  style,
}: PhotoProps) {
  /* A decorative image carries no meaning, so it gets an empty alt in both
     languages rather than being read out twice. */
  if (decorative) {
    return (
      <img
        className={className}
        src={`/images/${name}`}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <>
      <img
        className={className}
        src={`/images/${name}`}
        alt={altKm}
        lang="km"
        data-lang="km"
        style={style}
        loading="lazy"
        decoding="async"
      />
      <img
        className={className}
        src={`/images/${name}`}
        alt={altEn}
        lang="en"
        data-lang="en"
        style={style}
        loading="lazy"
        decoding="async"
      />
    </>
  );
}