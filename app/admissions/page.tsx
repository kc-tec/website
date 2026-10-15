import type { Metadata } from "next";
import Link from "next/link";

import T, { TBlock } from "@/components/T";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "ការចុះឈ្មោះ / Admissions",
  description:
    "Admissions at Kampong Cham Teacher Education College — eligibility, required documents, application steps, and key dates.",
};

const ELIGIBILITY = [
  {
    km: "បានបញ្ចប់មធ្យមសិក្សាទុតិយភូមិ និងមានសញ្ញាបត្របាក់ឌុប",
    en: "Completed upper-secondary school with a high school diploma",
  },
  { km: "មានសញ្ជាតិខ្មែរ", en: "Cambodian nationality" },
  {
    km: "មានសុខភាពល្អ សមស្របសម្រាប់វិជ្ជាជីវៈបង្រៀន",
    en: "In good health and fit for the teaching profession",
  },
  {
    km: "ជាប់ការប្រឡងជ្រើសរើសចូលរៀន",
    en: "Pass the entrance examination and selection process",
  },
];

const DOCUMENTS = [
  { km: "ពាក្យសុំចូលរៀនដែលបានបំពេញ", en: "Completed application form" },
  { km: "សញ្ញាបត្រ និងសំណៅពិន្ទុ", en: "Diploma and academic transcript" },
  { km: "អត្តសញ្ញាណប័ណ្ណ ឬសៀវភៅគ្រួសារ", en: "National ID card or family book" },
  { km: "រូបថត ៤x៦ (៤ សន្លឹក)", en: "Four 4×6 photographs" },
  { km: "លិខិតបញ្ជាក់សុខភាព", en: "Medical certificate" },
];

const STEPS = [
  {
    titleKm: "ពិនិត្យលក្ខខណ្ឌ",
    titleEn: "Check your eligibility",
    bodyKm: "អានលក្ខខណ្ឌខាងលើ និងជ្រើសរើសកម្មវិធីសិក្សាដែលអ្នកចង់ដាក់ពាក្យ។",
    bodyEn: "Read the requirements above and choose the programme you want to apply for.",
  },
  {
    titleKm: "ប្រមូលឯកសារ",
    titleEn: "Gather your documents",
    bodyKm: "រៀបចំឯកសារទាំងអស់ រួមទាំងសំណៅបញ្ជាក់ដោយអាជ្ញាធរ។",
    bodyEn: "Prepare every document on the list, including certified copies where required.",
  },
  {
    titleKm: "ដាក់ពាក្យ",
    titleEn: "Submit your application",
    bodyKm: "ដាក់ពាក្យនៅការិយាល័យចុះឈ្មោះរបស់វិទ្យាស្ថាន ក្នុងអំឡុងពេលកំណត់។",
    bodyEn: "Hand in your application at the college admissions office within the published window.",
  },
  {
    titleKm: "ប្រឡងជ្រើសរើស",
    titleEn: "Sit the entrance exam",
    bodyKm: "ចូលរួមការប្រឡងតាមកាលបរិច្ឆេទ និងទីតាំងដែលបានប្រកាស។",
    bodyEn: "Attend the examination at the announced date and venue.",
  },
  {
    titleKm: "ទទួលលទ្ធផល និងចុះឈ្មោះ",
    titleEn: "Receive results and enrol",
    bodyKm: "បើជាប់ សូមបញ្ចប់ការចុះឈ្មោះតាមការណែនាំរបស់ការិយាល័យ។",
    bodyEn: "If you are offered a place, complete enrolment as instructed by the office.",
  },
];

/* PLACEHOLDER: replace with the official intake calendar. */
const DATES = [
  { termKm: "ការបើកទទួលពាក្យ", termEn: "Applications open" },
  { termKm: "ថ្ងៃផុតកំណត់ដាក់ពាក្យ", termEn: "Application deadline" },
  { termKm: "ថ្ងៃប្រឡង", termEn: "Entrance examination" },
  { termKm: "ការបើកឆ្នាំសិក្សា", termEn: "Academic year begins" },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageBanner
        titleKm="ការចុះឈ្មោះ"
        titleEn="Admissions"
        introKm="អ្វីដែលអ្នកត្រូវដឹង មុនពេលដាក់ពាក្យចូលរៀននៅវិទ្យាស្ថានយើង។"
        introEn="What you need to know before applying to study with us."
      />

      <section className="section">
        <div className="wrap">
          <div className="notice">
            <TBlock
              km={
                <p>
                  <strong>សម្គាល់សម្រាប់អ្នកកែសម្រួល៖</strong> លក្ខខណ្ឌ
                  និងកាលបរិច្ឆេទខាងក្រោមជាគំរូទូទៅ។
                  សូមជំនួសដោយសេចក្តីប្រកាសព័ត៌មានផ្លូវការរបស់ក្រសួង
                  និងវិទ្យាស្ថានសម្រាប់ឆ្នាំសិក្សានេះ។
                </p>
              }
              en={
                <p>
                  <strong>Editor&apos;s note:</strong> the requirements and dates below
                  are a generic template. Replace them with the official ministry and
                  college announcement for the current intake year.
                </p>
              }
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {/* Replace public/images/admissions.png with your own photo. */}
          <Photo
            name="admissions.png"
            altKm="និស្សិតកំពុងស្កែនឈ្មោះនៅថ្ងៃចុះឈ្មោះ"
            altEn="Students checking the admissions register"
            className="photo photo-side"
          />
          <div className="grid grid-2">
            <div>
              <h2>
                <T km="លក្ខខណ្ឌចូលរៀន" en="Who can apply" />
              </h2>
              <ul className="checklist">
                {ELIGIBILITY.map((item) => (
                  <li key={item.en}>
                    <T km={item.km} en={item.en} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2>
                <T km="ឯកសារតម្រូវ" en="Documents required" />
              </h2>
              <ul className="checklist">
                {DOCUMENTS.map((item) => (
                  <li key={item.en}>
                    <T km={item.km} en={item.en} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <h2>
              <T km="ជំហានដាក់ពាក្យ" en="Application steps" />
            </h2>
          </div>
          <ol className="steps">
            {STEPS.map((s) => (
              <li key={s.titleEn}>
                <h3>
                  <T km={s.titleKm} en={s.titleEn} />
                </h3>
                <p>
                  <T km={s.bodyKm} en={s.bodyEn} />
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
                <T km="កាលបរិច្ឆេទសំខាន់ៗ" en="Key dates" />
              </h2>
              <dl className="detail-list">
                {DATES.map((d) => (
                  <div key={d.termEn}>
                    <dt>
                      <T km={d.termKm} en={d.termEn} />
                    </dt>
                    <dd>
                      <T km="នឹងប្រកាសជូនដំណឹង" en="To be announced" />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="card">
              <h3>
                <T km="មានសំណួរ?" en="Questions about applying?" />
              </h3>
              <p>
                <T
                  km="ការិយាល័យចុះឈ្មោះអាចជួយបញ្ជាក់អំពីលក្ខខណ្ឌ ឯកសារ និងកាលបរិច្ឆេទ។"
                  en="The admissions office can clarify requirements, documents, and dates."
                />
              </p>
              <p>
                <Link className="btn btn-primary" href="/contact">
                  <T km="ទាក់ទងមកយើង" en="Contact us" />
                </Link>
              </p>
              <p style={{ marginBottom: 0 }}>
                <Link href="/programs">
                  <T km="មើលកម្មវិធីសិក្សា →" en="See the programs →" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
