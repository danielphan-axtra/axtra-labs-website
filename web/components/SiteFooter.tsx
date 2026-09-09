import Link from "next/link";
import Image from "next/image";
import { FOOTER } from "@/lib/nav";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <Link
              href="/"
              className="logo logo--footer"
              aria-label="Axtra Labs"
              style={{ marginBottom: 16, display: "inline-block" }}
            >
              <Image
            className="logo-img logo-img--light"
            src="/assets/img/axtra-logo-white.png"
            alt="Axtra Labs"
            width={148}
            height={14}
            loading="lazy"
          />
            </Link>
            <p style={{ fontSize: 15.5, color: "var(--slate)", marginBottom: 18 }}>
              AI-augmented software engineering from Vietnam.
            </p>
            <div className="social-row">
              <a
                className="social-dot"
                href="https://www.linkedin.com/company/axtralabs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Axtra Labs on LinkedIn"
              >
                in
              </a>
              <div className="social-dot">X</div>
              <div className="social-dot">f</div>
            </div>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            {FOOTER.services.map((l) => (
              <Link key={l.href} href={l.href}>
                <span>{l.label}</span>
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <h5>Industries</h5>
            {FOOTER.industries.map((l) => (
              <Link key={l.href} href={l.href}>
                <span>{l.label}</span>
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <h5>AI Agent Solution</h5>
            {FOOTER.agents.map((l) => (
              <Link key={l.href} href={l.href}>
                <span>{l.label}</span>
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            {FOOTER.company.map((l) => (
              <Link key={l.href} href={l.href}>
                <span>{l.label}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Axtra Labs. All rights reserved.</div>
          <div style={{ display: "flex", gap: 18 }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
