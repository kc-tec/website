/*
 * NEWS AND ANNOUNCEMENTS
 *
 * TO ADD A POST: copy one block below, put it at the TOP of the array
 * (newest first), and fill in the fields. The date drives the little
 * calendar badge, so use a real YYYY-MM-DD value.
 *
 * Nothing else needs to change — app/news/page.tsx renders whatever
 * is in this list, and the home page shows the first two.
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

/* PLACEHOLDER: these three are templates — replace with real announcements. */
export const NEWS: NewsItem[] = [
  {
    date: "2025-01-01",
    categoryKm: "ការចុះឈ្មោះ",
    categoryEn: "Admissions",
    titleKm: "សេចក្តីជូនដំណឹងស្តីពីការទទួលពាក្យចូលរៀន",
    titleEn: "Announcement: applications for the new intake",
    summaryKm: "បន្ថែមសេចក្តីសង្ខេបខ្លីនៅទីនេះ រួមទាំងកាលបរិច្ឆេទ និងទីកន្លែងដាក់ពាក្យ។",
    summaryEn:
      "Add a short summary here, including the dates and where to submit applications.",
  },
  {
    date: "2025-01-01",
    categoryKm: "សកម្មភាព",
    categoryEn: "Events",
    titleKm: "សិក្ខាសាលាអភិវឌ្ឍវិជ្ជាជីវៈគ្រូបង្រៀន",
    titleEn: "Professional development workshop for teachers",
    summaryKm: "បន្ថែមព័ត៌មានអំពីសិក្ខាសាលា អ្នកចូលរួម និងប្រធានបទ។",
    summaryEn:
      "Add details about the workshop, who attended, and the topics covered.",
  },
  {
    date: "2025-01-01",
    categoryKm: "សិក្សា",
    categoryEn: "Academic",
    titleKm: "កម្មសិក្សាបង្រៀននៅសាលារៀនដៃគូ",
    titleEn: "Teaching practice placements at partner schools",
    summaryKm: "បន្ថែមព័ត៌មានអំពីកម្មសិក្សា ចំនួននិស្សិត និងសាលារៀនដែលចូលរួម។",
    summaryEn:
      "Add information about the placements, how many students took part, and which schools hosted them.",
  },
];

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
