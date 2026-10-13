import Link from "next/link";

import T from "./T";
import { CONTACT, NAV_ITEMS } from "@/lib/site";

export default function SiteFooter() {
  // Rendered at build time, so the year is correct for each deploy.
  const year = new Date().getFullYear();

  const footerLinks = NAV_ITEMS.filter(
    (item) => item.href !== "/" && item.href !== "/contact",
  );

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h4>
              <T km="វិទ្យាស្ថានគរុកោសល្យកំពង់ចាម" en="KCTEC" />
            </h4>
            <p>
              <T
                km="បណ្តុះបណ្តាលគ្រូបង្រៀនសម្រាប់ការអប់រំមូលដ្ឋាន ក្រោមការដឹកនាំរបស់ក្រសួងអប់រំ យុវជន និងកីឡា។"
                en="Preparing teachers for basic education under the Ministry of Education, Youth and Sport."
              />
            </p>
          </div>

          <div>
            <h4>
              <T km="តំណភ្ជាប់" en="Links" />
            </h4>
            <ul>
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <T km={item.km} en={item.en} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>
              <T km="ទំនាក់ទំនង" en="Contact" />
            </h4>
            <ul>
              <li>
                <T km={CONTACT.addressKm} en={CONTACT.addressEn} />
              </li>
              <li>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} KCTEC.{" "}
            <T km="រក្សាសិទ្ធិគ្រប់បែបយ៉ាង។" en="All rights reserved." />
          </span>
          <span>
            <Link href="/contact">
              <T km="ផ្ញើមតិយោបល់" en="Send feedback" />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
