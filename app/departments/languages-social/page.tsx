import type { Metadata } from "next";
import Link from "next/link";

import T from "@/components/T";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "ផ្នែកភាសា និងវិទ្យាសាស្ត្រសង្គម / Dept. of Languages and Social Sciences",
  description: "Department of Languages and Social Sciences at Kampong Cham Teacher Education College",
};

export default function LanguagesSocialPage() {
  return (
    <>
      <PageBanner
        titleKm="ផ្នែកភាសា និងវិទ្យាសាស្ត្រសង្គម"
        titleEn="Department of Languages and Social Sciences"
        introKm="ទទួលបន្ទុកការបណ្តុះបណ្តាលមុខវិជ្ជាភាសា និងមុខវិជ្ជាវិទ្យាសាស្ត្រសង្គម។"
        introEn="Oversees instruction in linguistic development and social sciences."
        img="dept-languages-social.png"
        altKm="ការស្វាគមន៍និស្សិតថ្មីនៅពេលចុះឈ្មោះ"
        altEn="Welcoming new students at registration"
      />

      <section className="section">
        <div className="wrap">
          <div className="grid grid-2">
            <div>
              <h2>
                <T km="គោលបំណង" en="Mission" />
              </h2>
              <p>
                <T
                  km="ទទួលបន្ទុកការបណ្តុះបណ្តាលមុខវិជ្ជាភាសា (ភាសាខ្មែរ និងភាសាបរទេស) ព្រមទាំងមុខវិជ្ជាវិទ្យាសាស្ត្រសង្គម (ប្រវត្តិវិទ្យា ភូមិវិទ្យា និងសីលធម៌-ពលរដ្ឋវិជ្ជា)។ ផ្នែកនេះជំរុញការអភិវឌ្ឍជំនាញទំនាក់ទំនង អក្ខរកម្ម ការយល់ដឹងអំពីវប្បធម៌ និងការបណ្តុះស្មារតីពលរដ្ឋល្អប្រកបដោយក្រមសីលធម៌វិជ្ជាជីវៈ។"
                  en="Oversees instruction in linguistic development (Khmer and Foreign Languages) and social sciences (History, Geography, and Civics/Moral Education). The unit emphasizes communicative competence, critical literacy, cultural understanding, and civic values essential for future educators."
                />
              </p>
            </div>

            <div className="card">
              <h3>
                <T km="មុខវិជ្ជា" en="Subject Areas" />
              </h3>
              <ul className="checklist">
                <li>
                  <T km="ភាសាខ្មែរ" en="Khmer Language" />
                </li>
                <li>
                  <T km="ភាសាបរទេស" en="Foreign Languages" />
                </li>
                <li>
                  <T km="ប្រវត្តិវិទ្យា" en="History" />
                </li>
                <li>
                  <T km="ភូមិវិទ្យា" en="Geography" />
                </li>
                <li>
                  <T km="សីលធម៌-ពលរដ្ឋវិជ្ជា" en="Civics and Moral Education" />
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <Photo
              name="dept-languages-social.png"
              altKm="និស្សិតកំពុងស្កែនឈ្មោះនៅថ្ងៃចុះឈ្មោះ"
              altEn="Students checking the admissions register"
            />
          </div>

          <div style={{ marginTop: "2rem" }}>
            <p style={{ textAlign: "center" }}>
              <Link className="btn btn-outline" href="/contact">
                <T km="ទាក់ទងមកពួកយើង" en="Get in touch" />
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
