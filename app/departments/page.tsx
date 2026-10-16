import type { Metadata } from "next";
import Link from "next/link";

import T from "@/components/T";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "ផ្នែកវិជ្ជាជីវៈ / Academic Departments",
  description: "Academic departments at Kampong Cham Teacher Education College",
};

const DEPARTMENTS = [
  {
    href: "/departments/math-science",
    icon: "🔬",
    img: "dept-math-science.png",
    altKm: "និស្សិតកំពុងចូលរួមវគ្គបណ្តុះបណ្តាល",
    altEn: "Students taking part in a training session",
    titleKm: "ផ្នែក​គណិតវិទ្យា និងវិទ្យាសាស្ត្រ",
    titleEn: "Dept. of Mathematics and Science",
    bodyKm:
      "ទទួលបន្ទុកគ្រប់គ្រង សម្របសម្រួល និងអភិវឌ្ឍកម្មវិធីបណ្តុះបណ្តាលលើមុខវិជ្ជាគណិតវិទ្យា និងវិទ្យាសាស្ត្រពិត (រូបវិទ្យា គីមីវិទ្យា ជីវវិទ្យា និងផែនដីវិទ្យា)។",
    bodyEn:
      "Responsible for coordinating and advancing academic programs in mathematics and natural sciences (Physics, Chemistry, Biology, and Earth Science).",
  },
  {
    href: "/departments/languages-social",
    icon: "📖",
    img: "dept-languages-social.png",
    altKm: "ការស្វាគមន៍និស្សិតថ្មីនៅពេលចុះឈ្មោះ",
    altEn: "Welcoming new students at registration",
    titleKm: "ផ្នែកភាសា និងវិទ្យាសាស្ត្រសង្គម",
    titleEn: "Dept. of Languages and Social Sciences",
    bodyKm:
      "ទទួលបន្ទុកការបណ្តុះបណ្តាលមុខវិជ្ជាភាសា (ភាសាខ្មែរ និងភាសាបរទេស) ព្រមទាំងមុខវិជ្ជាវិទ្យាសាស្ត្រសង្គម (ប្រវត្តិវិទ្យា ភូមិវិទ្យា និងសីលធម៌-ពលរដ្ឋវិជ្ជា)។",
    bodyEn:
      "Oversees instruction in linguistic development (Khmer and Foreign Languages) and social sciences (History, Geography, and Civics/Moral Education).",
  },
  {
    href: "/departments/digital-tech",
    icon: "🌐",
    img: "dept-digital-tech.png",
    altKm: "ច្រកចូលបរិវេណវិទ្យាស្ថាន",
    altEn: "The entrance to the college campus",
    titleKm: "ផ្នែក​បច្ចេកវិទ្យាឌីជីថល ស្រាវជ្រាវ និងបណ្ណាល័យ",
    titleEn: "Dept. of Digital Technology, Research, and Library",
    bodyKm:
      "ទទួលបន្ទុកជំរុញការធ្វើបរិវត្តកម្មឌីជីថលក្នុងការអប់រំ ការគាំទ្រការស្រាវជ្រាវប្រតិបត្តិ (Action Research) និងការគ្រប់គ្រងសេវាធនធានបណ្ណាល័យ។",
    bodyEn:
      "Drives educational digital transformation, supports institutional and action research, and manages comprehensive library and learning resources.",
  },
];

export default function DepartmentsPage() {
  return (
    <>
      <PageBanner
        titleKm="ផ្នែកវិជ្ជាជីវៈ"
        titleEn="Academic Departments"
        introKm="វិទ្យាស្ថានរបស់យើងមានផ្នែកវិជ្ជាជីវៈចំនួនបីដែលទទួលបន្ទុកផ្នែកបង្រៀន និងបណ្តុះបណ្តាលមុខវិជ្ជាសំខាន់ៗ ដើម្បីរៀបចំគ្រូបង្រៀនដែលមានសមត្ថភាពខ្ពស់។"
        introEn="Our college has three academic departments responsible for instruction and training in key subject areas to prepare highly competent teachers."
        img="hero-main.jpg"
        altKm="បរិវេណវិទ្យាស្ថាន"
        altEn="College campus"
      />

      <section className="section">
        <div className="wrap">
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem" }}>
            <T
              km="ផ្នែកវិជ្ជាជីវៈនីមួយៗផ្តោតលើការអភិវឌ្ឍជំនាញបង្រៀន ការស្រាវជ្រាវ និងការអនុវត្តជាក់ស្តែងក្នុងវិស័យរៀងៗខ្លួន ដើម្បីធានាថាគ្រូបង្រៀនថ្មីមានចំណេះដឹងទាំងទ្រឹស្តី និងអនុវត្តជាក់ស្តែង។"
              en="Each department focuses on developing teaching competencies, research, and practical application in their respective fields to ensure new teachers have both theoretical knowledge and practical skills."
            />
          </p>

          <div className="grid grid-3" style={{ gap: "2rem" }}>
            {DEPARTMENTS.map((dept) => (
              <Link
                key={dept.href}
                href={dept.href}
                className="card hover-lift"
                style={{ textDecoration: "none", height: "100%" }}
              >
                <div style={{ marginBottom: "1.25rem" }}>
                  <Photo
                    name={dept.img}
                    altKm={dept.altKm}
                    altEn={dept.altEn}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "var(--radius)",
                    }}
                  />
                </div>

                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: ".75rem",
                    textAlign: "center",
                  }}
                >
                  {dept.icon}
                </div>

                <h3 style={{ marginBottom: ".85rem", textAlign: "center" }}>
                  <T km={dept.titleKm} en={dept.titleEn} />
                </h3>

                <p style={{ color: "var(--ink-muted)", marginBottom: "1rem" }}>
                  <T km={dept.bodyKm} en={dept.bodyEn} />
                </p>

                <p
                  style={{
                    color: "var(--navy-700)",
                    fontWeight: 600,
                    marginBottom: 0,
                    textAlign: "center",
                  }}
                >
                  <T km="ស្វែងយល់បន្ថែម →" en="Learn more →" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface-alt)" }}>
        <div className="wrap">
          <div className="grid grid-2">
            <div>
              <h2>
                <T km="ការសហការរវាងផ្នែក" en="Inter-Departmental Collaboration" />
              </h2>
              <p>
                <T
                  km="ផ្នែកវិជ្ជាជីវៈទាំងបីធ្វើការរួមគ្នាយ៉ាងជិតស្និទ្ធ ដើម្បីធានាថានិស្សិតទទួលបានការអប់រំដ៏ទូលំទូលាយ និងបង្រួបបង្រួម។ ពួកយើងផ្តល់ការបណ្តុះបណ្តាលរួមគ្នា ការស្រាវជ្រាវអន្តរផ្នែក និងការអភិវឌ្ឍវិជ្ជាជីវៈរួមគ្នា។"
                  en="All three departments work closely together to ensure students receive a comprehensive and integrated education. We provide joint training sessions, interdisciplinary research opportunities, and collaborative professional development."
                />
              </p>
            </div>

            <div>
              <h2>
                <T km="ការគាំទ្រសិស្ស-និស្សិត" en="Student Support" />
              </h2>
              <p>
                <T
                  km="ផ្នែកនីមួយៗមានគ្រូណែនាំវិជ្ជាជីវៈ និងបុគ្គលិកគាំទ្រសិក្សាដើម្បីជួយសិស្ស-និស្សិតឱ្យទទួលបានជោគជ័យក្នុងការសិក្សា និងរៀបចំពួកគេសម្រាប់អាជីពគ្រូបង្រៀន។"
                  en="Each department has academic advisors and support staff to help students succeed in their studies and prepare them for their teaching careers."
                />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
