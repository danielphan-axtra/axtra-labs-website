import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";
import "@/styles/contact.css";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description: "Talk to an Axtra Labs engineer about your AI, data, or robotics project. Response within one business day.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <section className="contact-page">
        <div className="wrap">
          <div className="contact-hero reveal">
            <h1>Contact us</h1>
            <p>
              Complete the form and we will contact you to discuss your project. Your information
              will be kept confidential.
            </p>
            <p className="contact-email">
              <a href="mailto:contact@axtralabs.com">contact@axtralabs.com</a>
            </p>
          </div>

          <div className="contact-split">
            <ContactForm />
            <aside className="contact-aside reveal">
              <h3>Axtra Labs</h3>
              <p>
                AI-augmented software engineering from Vietnam — with delivery teams across Asia and
                the United States. Same senior bench for Gen AI, data, embedded and full-stack work.
              </p>
              <div className="aside-block aside-block--first">
                <h4>Headquarters</h4>
                <p>
                  <strong>Axtra Vietnam</strong>
                </p>
                <p className="aside-meta">
                  Viet A Tower, 9 Duy Tan Street
                  <br />
                  Cau Giay, Hanoi
                </p>
                <p className="aside-meta" style={{ marginTop: "10px" }}>
                  <a
                    href="mailto:contact@axtralabs.com"
                    style={{ color: "var(--ochre)", fontWeight: "700" }}
                  >
                    contact@axtralabs.com
                  </a>
                </p>
              </div>
              <div className="aside-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/img/offices/hanoi-viet-a.jpg?v=2"
                  alt="Viet A Tower, Hanoi — Axtra Labs headquarters"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="aside-block">
                <h4>What to expect</h4>
                <ul className="aside-list">
                  <li>Reply within 1 business day</li>
                  <li>You hear from an engineer, not a salesperson</li>
                  <li>NDA available before any deep dive</li>
                </ul>
              </div>
              <div className="aside-block">
                <h4>Find an office</h4>
                <div className="aside-cities">
                  <a href="#office-vietnam">Hanoi</a>
                  <a href="#office-singapore">Singapore</a>
                  <a href="#office-hongkong">Hong Kong</a>
                  <a href="#office-usa">Irvine</a>
                </div>
              </div>
            </aside>
          </div>

          <div className="offices-section" id="offices">
            <div className="offices-head reveal">
              <h2>Our offices</h2>
            </div>
            <div className="office-grid">
              <article className="office-card reveal" id="office-vietnam">
                <h3 className="office-country">Vietnam</h3>
                <div className="office-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/img/offices/hanoi-viet-a.jpg?v=2"
                    alt="Viet A Tower office building in Hanoi"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h4 className="office-city">Hanoi</h4>
                <p className="office-addr">
                  Viet A Tower, 9 Duy Tan Street
                  <br />
                  Cau Giay, Hanoi
                </p>
              </article>
              <article className="office-card reveal" id="office-singapore">
                <h3 className="office-country">Singapore</h3>
                <div className="office-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/img/offices/singapore-office.jpg?v=2"
                    alt="Singapore office district"
                    style={{ objectPosition: "center 40%" }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h4 className="office-city">Singapore</h4>
                <p className="office-addr">
                  03-15, Jalan Besar Plaza
                  <br />
                  101 Kitchener Rd, Singapore
                </p>
              </article>
              <article className="office-card reveal" id="office-hongkong">
                <h3 className="office-country">Hong Kong</h3>
                <div className="office-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/img/offices/hongkong-office.jpg?v=4"
                    alt="Hong Kong office building, Kwun Tong"
                    style={{ objectPosition: "center 40%" }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h4 className="office-city">Kwun Tong</h4>
                <p className="office-addr">
                  King Palace Plaza
                  <br />
                  55 King Yip str., Kwun Tong
                </p>
              </article>
              <article className="office-card reveal" id="office-usa">
                <h3 className="office-country">United States</h3>
                <div className="office-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/img/offices/irvine-spectrum.jpg"
                    alt="100 Spectrum Center Drive, Irvine"
                    style={{ objectPosition: "center 35%" }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h4 className="office-city">Irvine</h4>
                <p className="office-addr">
                  100 Spectrum Center Drive
                  <br />
                  Irvine, CA 92618, USA
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
