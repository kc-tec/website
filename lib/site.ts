/*
 * Shared site constants.
 *
 * EDITING CONTACT DETAILS: change them here once and every page
 * updates, since the header and footer both read from this file.
 */

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Prefixes a path in /public with the GitHub Pages base path.
 * next/link and next/image handle this automatically; plain <img>
 * tags and metadata icons do not, so use this for those.
 */
export function withBase(path: string): string {
  return `${BASE_PATH}${path}`;
}

/* PLACEHOLDER: replace every value below with the college's real details. */
export const CONTACT = {
  phone: "+855 00 000 000",
  phoneHref: "tel:+85500000000",
  email: "info@kctec.edu.kh",
  admissionsEmail: "admissions@kctec.edu.kh",
  academicEmail: "academic@kctec.edu.kh",
  addressKm: "ក្រុងកំពង់ចាម ខេត្តកំពង់ចាម ព្រះរាជាណាចក្រកម្ពុជា",
  addressEn: "Kampong Cham City, Kampong Cham Province, Cambodia",
} as const;

export type NavItem = {
  href: string;
  km: string;
  en: string;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/", km: "ទំព័រដើម", en: "Home" },
  { href: "/about", km: "អំពីយើង", en: "About" },
  { href: "/departments", km: "ផ្នែកវិជ្ជាជីវៈ", en: "Departments" },
  { href: "/programs", km: "កម្មវិធីសិក្សា", en: "Programs" },
  { href: "/contact", km: "ទំនាក់ទំនង", en: "Contact" },
];
