import type { Metadata } from "next";

import T, { TBlock } from "@/components/T";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "ទំនាក់ទំនង / Contact",
  description:
    "Contact Kampong Cham Teacher Education College — address, phone, email, and office hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        titleKm="ទំនាក់ទំនង"
        titleEn="Contact"
        introKm="សូមទាក់ទងមកការិយាល័យរបស់យើង ប្រសិនបើអ្នកមានសំណួរ។"
        introEn="Get in touch with our offices if you have a question."
      />

      <section className="section">
        <div className="wrap">
          <div className="notice">
            <TBlock
              km={
                <p>
                  <strong>សម្គាល់សម្រាប់អ្នកកែសម្រួល៖</strong>{" "}
                  ព័ត៌មានទំនាក់ទំនងខាងក្រោមជាគំរូ។ សូមកែឯកសារ{" "}
                  <code>lib/site.ts</code> ដើម្បីជំនួសអាសយដ្ឋាន លេខទូរស័ព្ទ និងអ៊ីមែល
                  ដោយព័ត៌មានពិត។
                </p>
              }
              en={
                <p>
                  <strong>Editor&apos;s note:</strong> the contact details below are
                  placeholders. Edit <code>lib/site.ts</code> to replace the address,
                  phone number, and email addresses with the real ones.
                </p>
              }
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid grid-2">
            {/* ---------- Contact details ---------- */}
            <div>
              <h2>
                <T km="ព័ត៌មានទំនាក់ទំនង" en="Contact details" />
              </h2>
              <dl className="detail-list">
                <div>
                  <dt>
                    <T km="អាសយដ្ឋាន" en="Address" />
                  </dt>
                  <dd>
                    <T
                      km={`វិទ្យាស្ថានគរុកោសល្យកំពង់ចាម ${CONTACT.addressKm}`}
                      en={`Kampong Cham Teacher Education College, ${CONTACT.addressEn}`}
                    />
                  </dd>
                </div>
                <div>
                  <dt>
                    <T km="ទូរស័ព្ទ" en="Phone" />
                  </dt>
                  <dd>
                    <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>
                    <T km="អ៊ីមែល" en="Email" />
                  </dt>
                  <dd>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>
                    <T km="ម៉ោងធ្វើការ" en="Office hours" />
                  </dt>
                  <dd>
                    <T
                      km="ថ្ងៃចន្ទ–ថ្ងៃសុក្រ ម៉ោង ៧:៣០–១១:៣០ និង ១៤:០០–១៧:០០"
                      en="Monday–Friday, 7:30–11:30 and 14:00–17:00"
                    />
                  </dd>
                </div>
              </dl>

              <h3 style={{ marginTop: "2rem" }}>
                <T km="ការិយាល័យជំនាញ" en="Specific offices" />
              </h3>
              <dl className="detail-list">
                <div>
                  <dt>
                    <T km="ការិយាល័យចុះឈ្មោះ" en="Admissions office" />
                  </dt>
                  <dd>
                    <a href={`mailto:${CONTACT.admissionsEmail}`}>
                      {CONTACT.admissionsEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>
                    <T km="ការិយាល័យសិក្សា" en="Academic office" />
                  </dt>
                  <dd>
                    <a href={`mailto:${CONTACT.academicEmail}`}>
                      {CONTACT.academicEmail}
                    </a>
                  </dd>
                </div>
              </dl>

              {/* PLACEHOLDER: paste the Google Maps embed iframe for the real campus here. */}
            </div>

            {/* ---------- Contact form ---------- */}
            <div className="card">
              <h2>
                <T km="ផ្ញើសារមកយើង" en="Send us a message" />
              </h2>
              <p className="lead" style={{ fontSize: ".9375rem" }}>
                <T
                  km="ទម្រង់នេះនឹងបើកកម្មវិធីអ៊ីមែលរបស់អ្នក ដើម្បីផ្ញើសារ។"
                  en="This form opens your email app with the message ready to send."
                />
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
