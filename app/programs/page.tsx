import type { Metadata } from "next";
import Link from "next/link";

import T, { TBlock } from "@/components/T";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "កម្មវិធីសិក្សា / Programs",
  description:
    "Bachelor of Education programmes at Kampong Cham Teacher Education College for primary and lower-secondary teaching.",
};

/* PLACEHOLDER: adjust these to match what the college actually offers. */
const DEGREES = [
  {
    icon: "P",
    titleKm: "បរិញ្ញាបត្រអប់រំ — បឋមសិក្សា",
    titleEn: "B.Ed. — Primary Education",
    rows: [
      { termKm: "រយៈពេល", termEn: "Duration", valKm: "៤ ឆ្នាំ", valEn: "4 years" },
      {
        termKm: "បង្រៀនថ្នាក់",
        termEn: "Prepares you to teach",
        valKm: "ថ្នាក់ទី ១ ដល់ទី ៦",
        valEn: "Grades 1–6",
      },
      {
        termKm: "ខ្លឹមសារសំខាន់",
        termEn: "Core focus",
        valKm: "អក្សរសាស្ត្រខ្មែរ គណិតវិទ្យាកម្រិតដំបូង វិទ្យាសាស្ត្រ និងគរុកោសល្យ។",
        valEn: "Khmer literacy, early-grade mathematics, science, and classroom pedagogy.",
      },
    ],
  },
  {
    icon: "S",
    titleKm: "បរិញ្ញាបត្រអប់រំ — មធ្យមសិក្សាបឋមភូមិ",
    titleEn: "B.Ed. — Lower-Secondary Education",
    rows: [
      { termKm: "រយៈពេល", termEn: "Duration", valKm: "៤ ឆ្នាំ", valEn: "4 years" },
      {
        termKm: "បង្រៀនថ្នាក់",
        termEn: "Prepares you to teach",
        valKm: "ថ្នាក់ទី ៧ ដល់ទី ៩",
        valEn: "Grades 7–9",
      },
      {
        termKm: "មុខវិជ្ជាជំនាញ",
        termEn: "Subject majors",
        valKm: "គណិតវិទ្យា វិទ្យាសាស្ត្រ ភាសាខ្មែរ ភាសាអង់គ្លេស សិក្សាសង្គម។",
        valEn: "Mathematics, science, Khmer, English, social studies.",
      },
    ],
  },
];

const YEARS = [
  {
    titleKm: "ឆ្នាំទី ១ — មូលដ្ឋានគ្រឹះ",
    titleEn: "Year 1 — Foundations",
    bodyKm: "មូលដ្ឋានមុខវិជ្ជា ភាសា បច្ចេកវិទ្យាព័ត៌មាន និងការសង្កេតថ្នាក់រៀន។",
    bodyEn: "Subject knowledge, language skills, ICT, and first classroom observations.",
  },
  {
    titleKm: "ឆ្នាំទី ២ — គរុកោសល្យ",
    titleEn: "Year 2 — Pedagogy",
    bodyKm: "វិធីសាស្ត្របង្រៀន ចិត្តវិទ្យាអប់រំ និងការរៀបចំមេរៀន។",
    bodyEn: "Teaching methods, educational psychology, and lesson planning.",
  },
  {
    titleKm: "ឆ្នាំទី ៣ — ការអនុវត្ត",
    titleEn: "Year 3 — Teaching practice",
    bodyKm: "ការបង្រៀនជាក់ស្តែងនៅសាលារៀនដៃគូ ក្រោមការណែនាំរបស់គ្រូណែនាំ។",
    bodyEn: "Supervised teaching placements in partner schools with mentor feedback.",
  },
  {
    titleKm: "ឆ្នាំទី ៤ — ឯកទេស និងការស្រាវជ្រាវ",
    titleEn: "Year 4 — Specialisation & research",
    bodyKm: "ការស្រាវជ្រាវសកម្មភាព ការបង្រៀនឯករាជ្យ និងការវាយតម្លៃបញ្ចប់ការសិក្សា។",
    bodyEn: "Action research, independent teaching, and final assessment.",
  },
];

const CPD = [
  { km: "វិធីសាស្ត្របង្រៀនគណិតវិទ្យាកម្រិតដំបូង", en: "Early-grade mathematics methods" },
  { km: "ការបង្រៀនអក្សរសាស្ត្រខ្មែរ", en: "Khmer literacy instruction" },
  { km: "ការប្រើប្រាស់បច្ចេកវិទ្យាក្នុងថ្នាក់រៀន", en: "Using technology in the classroom" },
  { km: "ការគ្រប់គ្រងថ្នាក់រៀន និងការវាយតម្លៃ", en: "Classroom management and assessment" },
];

export default function ProgramsPage() {
  return (
    <>
      <PageBanner
        titleKm="កម្មវិធីសិក្សា"
        titleEn="Programs"
        introKm="កម្មវិធីបណ្តុះបណ្តាលគ្រូបង្រៀន និងការអភិវឌ្ឍវិជ្ជាជីវៈ។"
        introEn="Initial teacher education and continuing professional development."
      />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>
              <T km="កម្មវិធីបរិញ្ញាបត្រ" en="Degree programs" />
            </h2>
            <p>
              <T
                km="កម្មវិធីទាំងនេះឆ្លើយតបនឹងក្របខណ្ឌជាតិស្តីពីការបណ្តុះបណ្តាលគ្រូបង្រៀន។ សូមផ្ទៀងផ្ទាត់ជាមួយការិយាល័យសិក្សាសម្រាប់ព័ត៌មានលម្អិតបច្ចុប្បន្ន។"
                en="These pathways follow the national teacher education framework. Confirm current details with the academic office."
              />
            </p>
          </div>

          {/* Replace public/images/programs.png with your own photo. */}
          <Photo
            name="programs.png"
            altKm="និស្សិតកំពុងរៀនក្នុងថ្នាក់"
            altEn="Student teachers in a lecture room"
            className="photo photo-side"
          />

          <div className="grid grid-2" style={{ marginTop: "1.5rem" }}>
            {DEGREES.map((d) => (
              <article className="card" key={d.titleEn}>
                <div className="card-icon" aria-hidden="true">
                  {d.icon}
                </div>
                <h3>
                  <T km={d.titleKm} en={d.titleEn} />
                </h3>
                <dl className="detail-list">
                  {d.rows.map((r) => (
                    <div key={r.termEn}>
                      <dt>
                        <T km={r.termKm} en={r.termEn} />
                      </dt>
                      <dd>
                        <T km={r.valKm} en={r.valEn} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>

          <div className="notice" style={{ marginTop: "1.5rem" }}>
            <TBlock
              km={
                <p>
                  <strong>សម្គាល់សម្រាប់អ្នកកែសម្រួល៖</strong>{" "}
                  សូមកែមុខវិជ្ជាជំនាញខាងលើឱ្យត្រូវនឹងអ្វីដែលវិទ្យាស្ថានបើកបង្រៀនពិតប្រាកដ។
                </p>
              }
              en={
                <p>
                  <strong>Editor&apos;s note:</strong> adjust the subject majors above
                  to match exactly what the college actually offers.
                </p>
              }
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <h2>
              <T
                km="រចនាសម្ព័ន្ធកម្មវិធីសិក្សា"
                en="How the four years are structured"
              />
            </h2>
          </div>
          <ol className="steps">
            {YEARS.map((y) => (
              <li key={y.titleEn}>
                <h3>
                  <T km={y.titleKm} en={y.titleEn} />
                </h3>
                <p>
                  <T km={y.bodyKm} en={y.bodyEn} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid-2">
            <div>
              <h2>
                <T
                  km="ការអភិវឌ្ឍវិជ្ជាជីវៈបន្ត"
                  en="Continuing professional development"
                />
              </h2>
              <p>
                <T
                  km="យើងផ្តល់វគ្គខ្លីៗសម្រាប់គ្រូបង្រៀនដែលកំពុងបម្រើការ ដើម្បីពង្រឹងជំនាញបង្រៀន និងចំណេះដឹងមុខវិជ្ជា។"
                  en="Short courses for serving teachers, strengthening classroom practice and subject knowledge."
                />
              </p>
              <ul className="checklist">
                {CPD.map((c) => (
                  <li key={c.en}>
                    <T km={c.km} en={c.en} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3>
                <T km="ចាប់អារម្មណ៍ចូលរៀន?" en="Interested in applying?" />
              </h3>
              <p>
                <T
                  km="សូមពិនិត្យលក្ខខណ្ឌចូលរៀន ឯកសារតម្រូវ និងកាលបរិច្ឆេទសំខាន់ៗ។"
                  en="Check the entry requirements, required documents, and key dates."
                />
              </p>
              <Link className="btn btn-primary" href="/admissions">
                <T km="ទៅកាន់ទំព័រចុះឈ្មោះ" en="Go to admissions" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
