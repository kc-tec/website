import type { Metadata } from "next";
import Link from "next/link";

import T from "@/components/T";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "ផ្នែកគណិតវិទ្យា និងវិទ្យាសាស្ត្រ / Dept. of Mathematics and Science",
  description: "Department of Mathematics and Science at Kampong Cham Teacher Education College",
};

export default function MathSciencePage() {
  return (
    <>
      <PageBanner
        titleKm="ផ្នែកគណិតវិទ្យា និងវិទ្យាសាស្ត្រ"
        titleEn="Department of Mathematics and Science"
        introKm="ទទួលបន្ទុកគ្រប់គ្រង សម្របសម្រួល និងអភិវឌ្ឍកម្មវិធីបណ្តុះបណ្តាលលើមុខវិជ្ជាគណិតវិទ្យា និងវិទ្យាសាស្ត្រពិត។"
        introEn="Responsible for coordinating and advancing academic programs in mathematics and natural sciences."
        img="dept-math-science.png"
        altKm="និស្សិតកំពុងចូលរួមវគ្គបណ្តុះបណ្តាល"
        altEn="Students taking part in a training session"
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
                  km="ទទួលបន្ទុកគ្រប់គ្រង សម្របសម្រួល និងអភិវឌ្ឍកម្មវិធីបណ្តុះបណ្តាលលើមុខវិជ្ជាគណិតវិទ្យា និងវិទ្យាសាស្ត្រពិត (រូបវិទ្យា គីមីវិទ្យា ជីវវិទ្យា និងផែនដីវិទ្យា)។ ផ្នែកនេះផ្តោតសំខាន់លើការពង្រឹងវិធីសាស្ត្របង្រៀនបែបទំនើប ការអនុវត្តពិសោធន៍ជាក់ស្តែង និងការលើកកម្ពស់ការអប់រំស្ទែម (STEM) សម្រាប់គរុសិស្ស-និស្សិត។"
                  en="Responsible for coordinating and advancing academic programs in mathematics and natural sciences (Physics, Chemistry, Biology, and Earth Science). This unit focuses on innovative pedagogical practices, laboratory experimentation, and strengthening STEM education to prepare competent educators for modern classrooms."
                />
              </p>
            </div>

            <div className="card">
              <h3>
                <T km="មុខវិជ្ជា" en="Subject Areas" />
              </h3>
              <ul className="checklist">
                <li>
                  <T km="គណិតវិទ្យា" en="Mathematics" />
                </li>
                <li>
                  <T km="រូបវិទ្យា" en="Physics" />
                </li>
                <li>
                  <T km="គីមីវិទ្យា" en="Chemistry" />
                </li>
                <li>
                  <T km="ជីវវិទ្យា" en="Biology" />
                </li>
                <li>
                  <T km="ផែនដីវិទ្យា" en="Earth Science" />
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <Photo
              name="dept-math-science.png"
              altKm="និស្សិតកំពុងរៀនក្នុងថ្នាក់"
              altEn="Student teachers in a lecture room"
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
