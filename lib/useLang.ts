"use client";

import { useEffect, useState } from "react";

import type { Lang } from "@/components/LanguageToggle";

/*
 * Reads the active language from <html data-lang="...">, which
 * LanguageToggle owns, and re-renders when it changes.
 *
 * Most bilingual text is handled by the <T> component and plain CSS,
 * which needs no JavaScript at all. This hook is only for the few
 * cases that must produce a real string rather than two hidden spans,
 * such as validation messages and <option> labels — option elements
 * cannot be hidden reliably with CSS.
 */
export function useLang(): Lang {
  // Server render and first client render both assume Khmer, matching
  // the default in LanguageToggle, so hydration stays consistent.
  const [lang, setLang] = useState<Lang>("km");

  useEffect(() => {
    const root = document.documentElement;

    const read = () => {
      const value = root.getAttribute("data-lang");
      setLang(value === "en" ? "en" : "km");
    };

    read();

    const observer = new MutationObserver(read);
    observer.observe(root, { attributes: true, attributeFilter: ["data-lang"] });
    return () => observer.disconnect();
  }, []);

  return lang;
}
