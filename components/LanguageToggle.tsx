"use client";

import { useEffect, useState } from "react";

export const LANG_STORAGE_KEY = "kctec-lang";
export type Lang = "km" | "en";

/* Khmer first — most visitors are local. */
const DEFAULT_LANG: Lang = "km";

/*
 * Writes the active language onto <html> so the CSS in globals.css can
 * show the right spans, and remembers the choice for the next visit.
 *
 * The inline script in app/layout.tsx applies the saved language before
 * first paint, so there is no flash of the wrong language. This component
 * syncs its own button state to that value on mount.
 */
export default function LanguageToggle() {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);

  // Pick up whatever the pre-paint script already decided.
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-lang");
    if (current === "km" || current === "en") {
      setLang(current);
    }
  }, []);

  function choose(next: Lang) {
    setLang(next);

    const root = document.documentElement;
    root.setAttribute("data-lang", next);
    // Keep the real lang attribute honest for screen readers and search engines.
    root.setAttribute("lang", next);

    try {
      localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      /* Private browsing or storage disabled — the page still renders fine. */
    }
  }

  return (
    <div className="lang-toggle" role="group" aria-label="Language / ភាសា">
      <button
        type="button"
        lang="km"
        aria-pressed={lang === "km"}
        onClick={() => choose("km")}
      >
        ខ្មែរ
      </button>
      <button
        type="button"
        lang="en"
        aria-pressed={lang === "en"}
        onClick={() => choose("en")}
      >
        EN
      </button>
    </div>
  );
}
