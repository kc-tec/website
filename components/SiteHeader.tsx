"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import T from "./T";
import LanguageToggle from "./LanguageToggle";
import { CONTACT, NAV_ITEMS, withBase } from "@/lib/site";

export default function SiteHeader() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  // trailingSlash: true means pathname is "/about/" — normalise for comparison.
  const current = pathname.replace(/\/+$/, "") || "/";

  // Close the mobile menu after navigating to a new page.
  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  // Escape closes the menu.
  useEffect(() => {
    if (!navOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setNavOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [navOpen]);

  return (
    <>
      {/* ---------- Top utility bar ---------- */}
      <div className="topbar">
        <div className="wrap">
          <div className="topbar-contact">
            <a href={CONTACT.phoneHref}>☎ {CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`}>✉ {CONTACT.email}</a>
          </div>
          <LanguageToggle />
        </div>
      </div>

      {/* ---------- Masthead ---------- */}
      <header className="masthead">
        <div className="wrap">
          <Link className="brand" href="/">
            {/* withBase is required: next/image with unoptimized:true passes
                src through verbatim and does NOT prefix basePath, so a bare
                "/logo.svg" 404s once the site is served from a repo subpath.
                alt="" is deliberate — the college name sits beside it in the
                same link, so announcing the logo too would be redundant. */}
            <Image src={withBase("/logo.svg")} alt="" width={60} height={60} priority />
            <span className="brand-text">
              <span className="brand-name">
                <T
                  km="វិទ្យាស្ថានគរុកោសល្យកំពង់ចាម"
                  en="Kampong Cham Teacher Education College"
                />
              </span>
              <span className="brand-sub">
                <T
                  km="ក្រសួងអប់រំ យុវជន និងកីឡា"
                  en="Ministry of Education, Youth and Sport"
                />
              </span>
            </span>
          </Link>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={navOpen}
            aria-controls="primary-nav"
            onClick={() => setNavOpen((open) => !open)}
          >
            <span className="bars" aria-hidden="true" />
            <T km="ម៉ឺនុយ" en="Menu" />
          </button>
        </div>
      </header>

      {/* ---------- Primary navigation ---------- */}
      <nav
        className={`primary-nav${navOpen ? " is-open" : ""}`}
        id="primary-nav"
        aria-label="Main"
      >
        <div className="wrap">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current === item.href ? "page" : undefined}
                >
                  <T km={item.km} en={item.en} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
