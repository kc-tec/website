/*
 * NEWS AND ANNOUNCEMENTS — removed.
 *
 * The News and Admissions pages were deleted. This stub remains only so
 * old imports do not break; nothing imports NEWS anymore.
 */

export type NewsItem = {
  /** ISO date, YYYY-MM-DD. */
  date: string;
  categoryKm: string;
  categoryEn: string;
  titleKm: string;
  titleEn: string;
  summaryKm: string;
  summaryEn: string;
};

export const NEWS: NewsItem[] = [];

const MONTHS_EN = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/**
 * Splits an ISO date into the day and month shown on the badge.
 * Parsed manually rather than with `new Date()` so the result does not
 * shift by a day depending on the server's timezone.
 */
export function formatBadge(iso: string): { day: string; month: string } {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return { day: "—", month: "—" };

  const monthIndex = Number(match[2]) - 1;
  return {
    day: String(Number(match[3])),
    month: MONTHS_EN[monthIndex] ?? "—",
  };
}
