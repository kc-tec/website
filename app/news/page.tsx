import type { Metadata } from "next";

import { TBlock } from "@/components/T";
import PageBanner from "@/components/PageBanner";
import NewsList from "@/components/NewsList";
import { NEWS } from "@/lib/news";

export const metadata: Metadata = {
  title: "ព័ត៌មាន / News",
  description: "News and announcements from Kampong Cham Teacher Education College.",
};

export default function NewsPage() {
  return (
    <>
      <PageBanner
        titleKm="ព័ត៌មាន"
        titleEn="News"
        introKm="ព័ត៌មានថ្មីៗអំពីវិទ្យាស្ថាន កម្មវិធីសិក្សា និងសកម្មភាពនិស្សិត។"
        introEn="Updates on the college, its programmes, and student activities."
      />

      <section className="section">
        <div className="wrap">
          <div className="notice">
            <TBlock
              km={
                <p>
                  <strong>សម្គាល់សម្រាប់អ្នកកែសម្រួល៖</strong> ធាតុខាងក្រោមជាគំរូ។
                  ដើម្បីបន្ថែមប្រកាសថ្មី សូមកែឯកសារ <code>lib/news.ts</code> ហើយដាក់
                  ប្រកាសថ្មីបំផុតនៅខាងលើ។
                </p>
              }
              en={
                <p>
                  <strong>Editor&apos;s note:</strong> the entries below are templates.
                  To post an update, edit <code>lib/news.ts</code> and put the newest
                  item at the top of the list.
                </p>
              }
            />
          </div>

          <div style={{ marginTop: "2rem" }}>
            <NewsList items={NEWS} />
          </div>
        </div>
      </section>
    </>
  );
}
