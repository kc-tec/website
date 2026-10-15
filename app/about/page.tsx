import type { Metadata } from "next";

import T, { TBlock } from "@/components/T";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "អំពីយើង / About",
  description:
    "About Kampong Cham Teacher Education College — our role, vision, values, and history.",
};

const VALUES = [
  {
    termKm: "គុណភាព",
    termEn: "Quality",
    descKm: "ការបង្រៀនផ្អែកលើភស្តុតាង និងការវាយតម្លៃជាប់លាប់។",
    descEn: "Evidence-based teaching methods and consistent assessment.",
  },
  {
    termKm: "សមធម៌",
    termEn: "Equity",
    descKm: "ការគាំទ្រនិស្សិតពីគ្រប់មូលដ្ឋាន រួមទាំងតំបន់ជនបទ។",
    descEn: "Support for students from every background, including rural communes.",
  },
  {
    termKm: "ក្រមសីលធម៌វិជ្ជាជីវៈ",
    termEn: "Professional ethics",
    descKm: "គ្រូបង្រៀនជាគំរូសម្រាប់សិស្ស និងសហគមន៍។",
    descEn: "Teachers as role models for their students and communities.",
  },
];

/* Campus life gallery. Replace the files in public/images to use real photos. */
const GALLERY = [
  { img: "campus-life-1.png", altKm: "បណ្ណាល័យគ្រូបង្រៀន", altEn: "The teaching library" },
  { img: "campus-life-2.png", altKm: "មន្ទីរពិសោធន៍", altEn: "The science laboratory" },
  { img: "campus-life-3.png", altKm: "ការហាត់ល្បាក់", altEn: "Physical education on the field" },
  { img: "campus-life-4.png", altKm: "បុណ្យវិស័យសិល្បៈ", altEn: "The annual arts festival" },
  { img: "campus-life-5.png", altKm: "និស្សិតកំពុងសិក្សាតាមមេ", altEn: "Student teachers in class" },
  { img: "campus-life-6.png", altKm: "ពិធីបុណ្យបញ្ចប់ការសិក្សា", altEn: "The graduation ceremony" },
];

const HISTORY = [
  {
    titleKm: "ឆ្នាំបង្កើត",
    titleEn: "Founding year",
    bodyKm: "បន្ថែមឆ្នាំ និងបរិបទនៃការបង្កើតវិទ្យាស្ថាន។",
    bodyEn: "Add the year the institution was established and its original purpose.",
  },
  {
    titleKm: "ការអភិវឌ្ឍសំខាន់ៗ",
    titleEn: "Key developments",
    bodyKm: "បន្ថែមការពង្រីកបរិវេណ កម្មវិធីថ្មី ឬការទទួលស្គាល់។",
    bodyEn: "Add campus expansions, new programmes, or accreditation milestones.",
  },
  {
    titleKm: "សព្វថ្ងៃ",
    titleEn: "Today",
    bodyKm: "បន្ថែមចំនួននិស្សិត បុគ្គលិក និងកម្មវិធីបច្ចុប្បន្ន។",
    bodyEn: "Add current enrolment, staffing, and the programmes now on offer.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        titleKm="អំពីយើង"
        titleEn="About"
        introKm="ស្ថាប័នបណ្តុះបណ្តាលគ្រូបង្រៀនសម្រាប់ការអប់រំមូលដ្ឋាននៅខេត្តកំពង់ចាម។"
        introEn="A teacher education institution serving basic education in Kampong Cham province."
      />

      <section className="section">
        <div className="wrap">
          <div className="grid grid-2">
            <div>
              <h2>
                <T km="តួនាទីរបស់យើង" en="Our role" />
              </h2>
              <p>
                <T
                  km="ប្រទេសកម្ពុជាកំពុងធ្វើកំណែទម្រង់ការបណ្តុះបណ្តាលគ្រូបង្រៀន ដោយផ្លាស់ប្តូរពីកម្មវិធីរយៈពេល ២ ឆ្នាំ ទៅជាកម្មវិធីបរិញ្ញាបត្ររយៈពេល ៤ ឆ្នាំ។ វិទ្យាស្ថានគរុកោសល្យ ដូចជាវិទ្យាស្ថានយើង ជាផ្នែកមួយនៃកំណែទម្រង់នេះ។"
                  en="Cambodia is reforming teacher preparation, moving from the two-year training model to four-year Bachelor of Education degrees. Teacher Education Colleges like ours sit at the centre of that shift, raising both the length and the academic level of initial teacher education."
                />
              </p>
              <p>
                <T
                  km="យើងធ្វើការយ៉ាងជិតស្និទ្ធជាមួយសាលារៀនក្នុងតំបន់ ដើម្បីឱ្យនិស្សិតគ្រូមានបទពិសោធន៍បង្រៀនជាក់ស្តែងពីដំបូង។"
                  en="We work closely with local schools so that student teachers gain real classroom experience from early in their studies, not only at the end."
                />
              </p>

              {/* Replace public/images/campus.png with your own photo. */}
              <Photo
                name="campus.png"
                altKm="បរិវេណវិទ្យាស្ថានគរុកោសល្យកំពង់ចាម"
                altEn="The campus of Kampong Cham Teacher Education College"
                className="photo photo-side"
              />
            </div>

            <div>
              <h2>
                <T km="ចក្ខុវិស័យ និងតម្លៃ" en="Vision & values" />
              </h2>
              <dl className="detail-list">
                {VALUES.map((v) => (
                  <div key={v.termEn}>
                    <dt>
                      <T km={v.termKm} en={v.termEn} />
                    </dt>
                    <dd>
                      <T km={v.descKm} en={v.descEn} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <h2>
              <T km="ប្រវត្តិ" en="History" />
            </h2>
            <p>
              <T
                km="សូមបំពេញព័ត៌មានប្រវត្តិពិតរបស់វិទ្យាស្ថាន។"
                en="Fill in the college's real milestones below."
              />
            </p>
          </div>

          <div className="notice">
            <TBlock
              km={
                <p>
                  <strong>សម្គាល់សម្រាប់អ្នកកែសម្រួល៖</strong>{" "}
                  យើងមិនបានបញ្ចូលកាលបរិច្ឆេទ ឬឈ្មោះថ្នាក់ដឹកនាំដែលមិនបានផ្ទៀងផ្ទាត់នោះទេ។
                  សូមបន្ថែមឆ្នាំបង្កើត ដំណាក់កាលសំខាន់ៗ និងឈ្មោះប្រធានវិទ្យាស្ថាននៅទីនេះ។
                </p>
              }
              en={
                <p>
                  <strong>Editor&apos;s note:</strong> we left out any founding year,
                  milestones, or leadership names we could not verify. Add the
                  college&apos;s real history and the names and titles of its
                  leadership here.
                </p>
              }
            />
          </div>

          <ol className="steps" style={{ marginTop: "2rem" }}>
            {HISTORY.map((item) => (
              <li key={item.titleEn}>
                <h3>
                  <T km={item.titleKm} en={item.titleEn} />
                </h3>
                <p>
                  <T km={item.bodyKm} en={item.bodyEn} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Campus life ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>
              <T km="ជីវិតនៅក្នុងបរិវេណ" en="Life on campus" />
            </h2>
          </div>

          <ul className="gallery">
            {GALLERY.map((item) => (
              <li key={item.img}>
                <Photo
                  name={item.img}
                  altKm={item.altKm}
                  altEn={item.altEn}
                  className="photo"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
