import type { Metadata } from "next";
import Link from "next/link";

import T from "@/components/T";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "ផ្នែកបច្ចេកវិទ្យាឌីជីថល ស្រាវជ្រាវ និងបណ្ណាល័យ / Dept. of Digital Technology, Research, and Library",
  description: "Department of Digital Technology, Research, and Library at Kampong Cham Teacher Education College",
};

export default function DigitalTechPage() {
  return (
    <>
      <PageBanner
        titleKm="ផ្នែកបច្ចេកវិទ្យាឌីជីថល ស្រាវជ្រាវ និងបណ្ណាល័យ"
        titleEn="Department of Digital Technology, Research, and Library"
        introKm="ទទួលបន្ទុកជំរុញការធ្វើបរិវត្តកម្មឌីជីថលក្នុងការអប់រំ ការគាំទ្រការស្រាវជ្រាវប្រតិបត្តិ និងការគ្រប់គ្រងសេវាធនធានបណ្ណាល័យ។"
        introEn="Drives educational digital transformation, supports institutional and action research, and manages comprehensive library and learning resources."
        img="dept-digital-tech.png"
        altKm="បណ្ណាល័យវិទ្យាសាស្ត្រនិងធនធានឌីជីថល"
        altEn="The library and digital learning resources"
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
                  km="ទទួលបន្ទុកជំរុញការធ្វើបរិវត្តកម្មឌីជីថលក្នុងការអប់រំ ការគាំទ្រការស្រាវជ្រាវប្រតិបត្តិ (Action Research) និងការគ្រប់គ្រងសេវាធនធានបណ្ណាល័យ។ ផ្នែកនេះផ្តល់នូវហេដ្ឋារចនាសម្ព័ន្ធព័ត៌មានវិទ្យា ឧបករណ៍ឌីជីថល និងប្រភពឯកសារសិក្សាស្រាវជ្រាវដ៏សម្បូរបែប ដើម្បីគាំទ្រដល់ការរៀននិងបង្រៀនពេញមួយជីវិត។"
                  en="Drives educational digital transformation, supports institutional and action research, and manages comprehensive library and learning resources. This unit provides digital learning solutions, ICT infrastructure, and modern academic resources to cultivate a vibrant research and lifelong learning environment."
                />
              </p>
            </div>

            <div className="card">
              <h3>
                <T km="មុខវិជ្ជា" en="Focus Areas" />
              </h3>
              <ul className="checklist">
                <li>
                  <T km="បច្ចេកវិទ្យាព័ត៌មានវិទ្យា" en="Information and Communication Technology" />
                </li>
                <li>
                  <T km="ការស្រាវជ្រាវប្រតិបត្តិ" en="Action Research" />
                </li>
                <li>
                  <T km="ធនធានបណ្ណាល័យ" en="Library Resources" />
                </li>
                <li>
                  <T km="ឧបករណ៍ឌីជីថលសម្រាប់ការសិក្សា" en="Digital Learning Tools" />
                </li>
                <li>
                  <T km="ការគាំទ្រស្រាវជ្រាវវិជ្ជាជីវៈ" en="Academic Research Support" />
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <Photo
              name="dept-digital-tech.png"
              altKm="បណ្ណាល័យវិទ្យាសាស្ត្រនិងធនធានឌីជីថល"
              altEn="The library and digital learning resources"
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
