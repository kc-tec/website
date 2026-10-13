import type { Metadata } from "next";
import { Inter, Noto_Sans_Khmer } from "next/font/google";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import T from "@/components/T";
import { withBase } from "@/lib/site";

import "./globals.css";

/* next/font self-hosts these at build time — no runtime request to Google. */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-en",
  display: "swap",
});

const notoSansKhmer = Noto_Sans_Khmer({
  subsets: ["khmer"],
  weight: ["400", "600", "700"],
  variable: "--font-km",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "វិទ្យាស្ថានគរុកោសល្យកំពង់ចាម | KCTEC",
    template: "%s | KCTEC",
  },
  description:
    "Kampong Cham Teacher Education College (KCTEC) — preparing qualified teachers for Cambodia's basic education through four-year Bachelor of Education programmes.",
  icons: { icon: withBase("/logo.svg") },
};

/*
 * Applies the saved language before the browser paints, so a returning
 * English reader never sees a flash of Khmer. Kept deliberately tiny.
 */
const LANG_INIT = `
(function(){try{var l=localStorage.getItem("kctec-lang");
if(l==="km"||l==="en"){var r=document.documentElement;
r.setAttribute("data-lang",l);r.setAttribute("lang",l);}}catch(e){}})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="km" data-lang="km" className={`${inter.variable} ${notoSansKhmer.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LANG_INIT }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          <T km="ទៅកាន់ខ្លឹមសារសំខាន់" en="Skip to main content" />
        </a>

        <SiteHeader />

        <main id="main">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}
