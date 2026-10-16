import Link from "next/link";

import T, { TBlock } from "@/components/T";
import Photo from "@/components/Photo";

/* PLACEHOLDER: replace the "—" values with the college's real figures. */
const STATS = [
  { value: "4", km: "ឆ្នាំសិក្សា (បរិញ្ញាបត្រ)", en: "Year degree program" },
  { value: "1,500", km: "និស្សិតសរុប", en: "Students enrolled" },
  { value: "60", km: "គ្រូបង្រៀន", en: "Teacher educators" },
  { value: "1,500", km: "និស្សិតបានបញ្ចប់ការសិក្សា", en: "Graduates to date" },
];

const QUICK_LINKS = [
  {
    href: "/departments/math-science",
    icon: "🔬",
    img: "dept-math-science.png",
    altKm: "និស្សិតកំពុងចូលរួមវគ្គបណ្តុះបណ្តាល",
    altEn: "Students taking part in a training session",
    titleKm: "ផ្នែក​គណិតវិទ្យា និងវិទ្យាសាស្ត្រ",
    titleEn: "Dept. of Mathematics and Science",
    bodyKm: "ទទួលបន្ទុកគ្រប់គ្រង សម្របសម្រួល និងអភិវឌ្ឍកម្មវិធីបណ្តុះបណ្តាលលើមុខវិជ្ជាគណិតវិទ្យា និងវិទ្យាសាស្ត្រពិត (រូបវិទ្យា គីមីវិទ្យា ជីវវិទ្យា និងផែនដីវិទ្យា)។ ផ្នែកនេះផ្តោតសំខាន់លើការពង្រឹងវិធីសាស្ត្របង្រៀនបែបទំនើប ការអនុវត្តពិសោធន៍ជាក់ស្តែង និងការលើកកម្ពស់ការអប់រំស្ទែម (STEM) សម្រាប់គរុសិស្ស-និស្សិត។",
    bodyEn: "Responsible for coordinating and advancing academic programs in mathematics and natural sciences (Physics, Chemistry, Biology, and Earth Science). This unit focuses on innovative pedagogical practices, laboratory experimentation, and strengthening STEM education to prepare competent educators for modern classrooms.",
  },
  {
    href: "/departments/languages-social",
    icon: "📖",
    img: "dept-languages-social.png",
    altKm: "ការស្វាគមន៍និស្សិតថ្មីនៅពេលចុះឈ្មោះ",
    altEn: "Welcoming new students at registration",
    titleKm: "ផ្នែកភាសា និងវិទ្យាសាស្ត្រសង្គម",
    titleEn: "Dept. of Languages and Social Sciences",
    bodyKm: "ទទួលបន្ទុកការបណ្តុះបណ្តាលមុខវិជ្ជាភាសា (ភាសាខ្មែរ និងភាសាបរទេស) ព្រមទាំងមុខវិជ្ជាវិទ្យាសាស្ត្រសង្គម (ប្រវត្តិវិទ្យា ភូមិវិទ្យា និងសីលធម៌-ពលរដ្ឋវិជ្ជា)។ ផ្នែកនេះជំរុញការអភិវឌ្ឍជំនាញទំនាក់ទំនង អក្ខរកម្ម ការយល់ដឹងអំពីវប្បធម៌ និងការបណ្តុះស្មារតីពលរដ្ឋល្អប្រកបដោយក្រមសីលធម៌វិជ្ជាជីវៈ។",
    bodyEn: "Oversees instruction in linguistic development (Khmer and Foreign Languages) and social sciences (History, Geography, and Civics/Moral Education). The unit emphasizes communicative competence, critical literacy, cultural understanding, and civic values essential for future educators.",
  },
  {
    href: "/departments/digital-tech",
    icon: "🌐",
    img: "dept-digital-tech.png",
    altKm: "ច្រកចូលបរិវេណវិទ្យាស្ថាន",
    altEn: "The entrance to the college campus",
    titleKm: "ផ្នែក​បច្ចេកវិទ្យាឌីជីថល ស្រាវជ្រាវ និងបណ្ណាល័យ",
    titleEn: "Dept. of Digital Technology, Research, and Library",
    bodyKm: "ទទួលបន្ទុកជំរុញការធ្វើបរិវត្តកម្មឌីជីថលក្នុងការអប់រំ ការគាំទ្រការស្រាវជ្រាវប្រតិបត្តិ (Action Research) និងការគ្រប់គ្រងសេវាធនធានបណ្ណាល័យ។ ផ្នែកនេះផ្តល់នូវហេដ្ឋារចនាសម្ព័ន្ធព័ត៌មានវិទ្យា ឧបករណ៍ឌីជីថល និងប្រភពឯកសារសិក្សាស្រាវជ្រាវដ៏សម្បូរបែប ដើម្បីគាំទ្រដល់ការរៀននិងបង្រៀនពេញមួយជីវិត។",
    bodyEn: "Drives educational digital transformation, supports institutional and action research, and manages comprehensive library and learning resources. This unit provides digital learning solutions, ICT infrastructure, and modern academic resources to cultivate a vibrant research and lifelong learning environment.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-content">
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
            <Link className="btn btn-primary" href="/contact">
              <T km="ទាក់ទងមកយើង" en="Contact us" />
            </Link>
            <Link className="btn btn-ghost" href="/programs">
              <T km="មើលកម្មវិធីសិក្សា" en="Explore programs" />
            </Link>
          </div>

          </div>

          <div className="hero-image">
            {/* Replace public/images/hero.png with your own photo. */}
            <Photo
              name="hero.png"
              altKm="អគារសំខាន់នៃវិទ្យាស្ថានគរុកោសល្យកំពង់ចាម"
              altEn="The main building of Kampong Cham Teacher Education College"
              className="photo photo-hero"
            />
          </div>
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
                <T km="តើអ្នកចង់ដឹងបន្ថែមទេ?" en="Want to learn more?" />
              </h3>
              <p>
                <T
                  km="ស្វែងយល់បន្ថែមអំពីកម្មវិធីសិក្សា ផ្នែកវិជ្ជាជីវៈ និងរបៀបទាក់ទងមកយើង។"
                  en="Explore our academic programs, departments, and ways to get in touch."
                />
              </p>
              <p>
                <Link className="btn btn-primary" href="/programs">
                  <T km="កម្មវិធីសិក្សា" en="Programs" />
                </Link>
              </p>
              <p style={{ marginBottom: 0 }}>
                <Link href="/contact">
                  <T km="ទំនាក់ទំនង →" en="Contact us →" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
