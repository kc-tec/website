/*
 * Bilingual text.
 *
 *   <T km="ទំព័រដើម" en="Home" />
 *
 * Both languages are rendered into the HTML; CSS hides whichever one
 * is not active (see the [data-lang] rules in app/globals.css). That
 * keeps this a server component, avoids any hydration mismatch, makes
 * the switch instant, and leaves both languages visible to search
 * engines and to visitors with JavaScript disabled.
 *
 * Use `as="div"` when the text wraps block-level content, since a
 * <span> may not legally contain a <p> or a heading.
 */

type TProps = {
  km: string;
  en: string;
  /** Element to render each language inside. Defaults to "span". */
  as?: "span" | "div";
  className?: string;
};

export default function T({ km, en, as: Tag = "span", className }: TProps) {
  return (
    <>
      <Tag data-lang="km" className={className} lang="km">
        {km}
      </Tag>
      <Tag data-lang="en" className={className} lang="en">
        {en}
      </Tag>
    </>
  );
}

/*
 * Same idea, but for rich content rather than a plain string:
 *
 *   <TBlock
 *     km={<p>អត្ថបទ <strong>ខ្មែរ</strong></p>}
 *     en={<p>English <strong>text</strong></p>}
 *   />
 */
export function TBlock({
  km,
  en,
  as: Tag = "div",
}: {
  km: React.ReactNode;
  en: React.ReactNode;
  as?: "span" | "div";
}) {
  return (
    <>
      <Tag data-lang="km" lang="km">
        {km}
      </Tag>
      <Tag data-lang="en" lang="en">
        {en}
      </Tag>
    </>
  );
}
