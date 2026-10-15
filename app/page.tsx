import Link from "next/link";

import T, { TBlock } from "@/components/T";
import NewsList from "@/components/NewsList";
import Photo from "@/components/Photo";
import { NEWS } from "@/lib/news";

/* PLACEHOLDER: replace the "—" values with the college's real figures. */
const STATS = [
  { value: "4", km: "ឆ្នាំសិក្សា (បរិញ្ញាបត្រ)", en: "Year degree program" },
  { value: "—", km: "និស្សិតសរុប", en: "Students enrolled" },
  { value: "—", km: "គ្រូបង្រៀន", en: "Teacher educators" },
  { value: "—", km: "និស្សិតបានបញ្ចប់ការសិក្សា", en: "Graduates to date" },
];

const QUICK_LINKS = [
  {
    href: "/programs",
    icon: "B.Ed",
    img: "programs.png",
    altKm: "និស្សិតកំពុងចូលរួមវគ្គបណ្តុះបណ្តាល",
    altEn: "Students taking part in a training session",
    titleKm: "កម្មវិធីសិក្សា",
    titleEn: "Our programs",
    bodyKm: "បរិញ្ញាបត្រអប់រំ សម្រាប់បឋមសិក្សា និងមធ្យមសិក្សាបឋមភូមិ។",
    bodyEn: "Bachelor of Education pathways for primary and lower-secondary teaching.",
  },
  {
    href: "/admissions",
    icon: "✓",
    img: "admissions.png",
    altKm: "ការស្វាគមន៍និស្សិតថ្មីនៅពេលចុះឈ្មោះ",
    altEn: "Welcoming new students at registration",
    titleKm: "លក្ខខណ្ឌចូលរៀន",
    titleEn: "Entry requirements",
    bodyKm: "តម្រូវការ ឯកសារ និងកាលបរិច្ឆេទសំខាន់ៗសម្រាប់បេក្ខជន។",
    bodyEn: "Eligibility, documents, and key dates for prospective students.",
  },
  {
    href: "/contact",
    icon: "◎",
    img: "contact.png",
    altKm: "ច្រកចូលបរិវេណវិទ្យាស្ថាន",
    altEn: "The entrance to the college campus",
    titleKm: "ទីតាំង និងទំនាក់ទំនង",
    titleEn: "Visit & contact",
    bodyKm: "ទីតាំងបរិវេណ ម៉ោងធ្វើការ និងព័ត៌មានទំនាក់ទំនង។",
    bodyEn: "Campus location, office hours, and how to reach us.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="wrap">
          <span className="hero-eyebrow">
            <T km="បណ្តុះបណ្តាលគ្រូបង្រៀន" en="Teacher Education" />
          </span>
          <h1>
            <T
              km="បណ្តុះបណ្តាលគ្រូបង្រៀនជំនាន់ក្រោយសម្រាប់កម្ពុជា"
              en="Preparing Cambodia's next generation of teachers"
            />
          </h1>
          <p>
            <T
              km="វិទ្យាស្ថានគរុកោសល្យកំពង់ចាម ផ្តល់កម្មវិធីបណ្តុះបណ្តាលគ្រូបង្រៀនរយៈពេល ៤ ឆ្នាំ កម្រិតបរិញ្ញាបត្រ សម្រាប់ការអប់រំមូលដ្ឋាន ស្របតាមកំណែទម្រង់របស់ក្រសួងអប់រំ យុវជន និងកីឡា។"
              en="KCTEC delivers four-year Bachelor of Education programmes for primary and lower-secondary teaching, aligned with the Ministry of Education, Youth and Sport's teacher education reform."
            />
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/admissions">
              <T km="ដំណើរការចុះឈ្មោះ" en="How to apply" />
            </Link>
            <Link className="btn btn-ghost" href="/programs">
              <T km="មើលកម្មវិធីសិក្សា" en="Explore programs" />
            </Link>
          </div>

          {/* Replace public/images/hero.png with your own photo. */}
          <Photo
            name="hero.png"
            altKm="អគារសំខាន់នៃវិទ្យាស្ថានគរុកោសល្យកំពង់ចាម"
            altEn="The main building of Kampong Cham Teacher Education College"
            className="photo photo-hero"
          />
        </div>
      </section>

      {/* ---------- Quick links ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="grid grid-3">
            {QUICK_LINKS.map((card) => (
              <Link className="card card-link" href={card.href} key={card.href}>
                <Photo
                  name={card.img}
                  altKm={card.altKm}
                  altEn={card.altEn}
                  className="photo photo-card"
                />
                <div className="card-icon" aria-hidden="true">
                  {card.icon}
                </div>
                <h3>
                  <T km={card.titleKm} en={card.titleEn} />
                </h3>
                <p>
                  <T km={card.bodyKm} en={card.bodyEn} />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- At a glance ---------- */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <h2>
              <T km="ទិដ្ឋភាពទូទៅ" en="At a glance" />
            </h2>
          </div>

          <div className="grid grid-4">
            {STATS.map((stat) => (
              <div className="card stat" key={stat.en}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">
                  <T km={stat.km} en={stat.en} />
                </span>
              </div>
            ))}
          </div>

          <div className="notice" style={{ marginTop: "1.5rem" }}>
            <TBlock
              km={
                <p>
                  <strong>សម្គាល់សម្រាប់អ្នកកែសម្រួល៖</strong> សូមជំនួសលេខ “—”
                  ក្នុង <code>app/page.tsx</code> និងព័ត៌មានទំនាក់ទំនងក្នុង{" "}
                  <code>lib/site.ts</code> ដោយទិន្នន័យពិតរបស់វិទ្យាស្ថាន។
                </p>
              }
              en={
                <p>
                  <strong>Editor&apos;s note:</strong> replace the “—” figures in{" "}
                  <code>app/page.tsx</code> and the contact details in{" "}
                  <code>lib/site.ts</code> with the college&apos;s real data.
                </p>
              }
            />
          </div>
        </div>
      </section>

      {/* ---------- Mission ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="grid grid-2">
            <div>
              <h2>
                <T km="បេសកកម្មរបស់យើង" en="Our mission" />
              </h2>
              <p>
                <T
                  km="យើងបណ្តុះបណ្តាលគ្រូបង្រៀនដែលមានសមត្ថភាព ក្រមសីលធម៌ និងស្មារតីបម្រើសង្គម ដើម្បីលើកកម្ពស់គុណភាពអប់រំនៅខេត្តកំពង់ចាម និងទូទាំងប្រទេស។"
                  en="We prepare capable, ethical teachers committed to public service, raising the quality of education in Kampong Cham province and across Cambodia."
                />
              </p>
              <ul className="checklist">
                <li>
                  <T
                    km="ការបង្រៀនផ្អែកលើការអនុវត្តជាក់ស្តែងនៅសាលារៀនដៃគូ"
                    en="Practice-based training in partner schools"
                  />
                </li>
                <li>
                  <T
                    km="ការផ្តោតលើគណិតវិទ្យា និងអក្សរសាស្ត្រខ្មែរកម្រិតដំបូង"
                    en="Strong focus on early-grade mathematics and Khmer literacy"
                  />
                </li>
                <li>
                  <T
                    km="ការអភិវឌ្ឍវិជ្ជាជីវៈបន្តសម្រាប់គ្រូបង្រៀនជាប់រាល់ឆ្នាំ"
                    en="Continuous professional development for serving teachers"
                  />
                </li>
              </ul>
              <p>
                <Link className="btn btn-outline" href="/about">
                  <T km="អានអំពីយើងបន្ថែម" en="Read more about us" />
                </Link>
              </p>
            </div>

            <div className="card">
              <h3>
                <T km="ព័ត៌មានថ្មីៗ" en="Latest news" />
              </h3>
              {/* Pulls the two newest items from lib/news.ts. */}
              <NewsList items={NEWS.slice(0, 2)} showCategory={false} />
              <p style={{ marginTop: "1rem" }}>
                <Link href="/news">
                  <T km="មើលព័ត៌មានទាំងអស់ →" en="View all news →" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
