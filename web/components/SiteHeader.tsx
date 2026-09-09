"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/lib/nav";

type Props = {
  solid?: boolean;
};

export default function SiteHeader({ solid = false }: Props) {
  const [scrolled, setScrolled] = useState(solid);
  const [navOpen, setNavOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const homeRef = useRef<{ parent: Node; next: ChildNode | null } | null>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(solid || window.scrollY > 60);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  useEffect(() => {
    let resizeTimer = 0;
    const syncMobile = () => {
      document.documentElement.classList.toggle("is-mobile-nav", window.innerWidth <= 900);
      if (window.innerWidth > 900) setNavOpen(false);
    };
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(syncMobile, 100);
    };
    syncMobile();
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    document.body.classList.toggle("nav-open", navOpen);
    document.documentElement.classList.toggle("nav-open", navOpen);
    document.body.style.overflow = navOpen ? "hidden" : "";

    if (navOpen) {
      if (!homeRef.current) {
        homeRef.current = { parent: nav.parentElement as Node, next: nav.nextSibling };
      }
      if (nav.parentElement !== document.body) {
        document.body.appendChild(nav);
      }
    } else if (homeRef.current && nav.parentElement === document.body) {
      const { parent, next } = homeRef.current;
      if (next && next.parentNode === parent) parent.insertBefore(nav, next);
      else parent.appendChild(nav);
    }

    if (!navOpen) setOpenItem(null);

    return () => {
      document.body.classList.remove("nav-open");
      document.documentElement.classList.remove("nav-open");
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  const closeNav = () => setNavOpen(false);

  return (
    <header className={`${solid ? "header-solid" : ""} ${scrolled ? "scrolled" : ""}`.trim()}>
      <div className="nav">
        <Link href="/" className="logo" aria-label="Axtra Labs" onClick={closeNav}>
          <Image
            className="logo-img logo-img--light"
            src="/assets/img/axtra-logo-white.png"
            alt=""
            width={148}
            height={14}
            priority
          />
          <Image
            className="logo-img logo-img--dark"
            src="/assets/img/axtra-logo-dark.png"
            alt="Axtra Labs"
            width={148}
            height={14}
            priority
          />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav ref={navRef} className="navlinks" aria-label="Primary">
          {NAV.map((item) => {
            if (item.type === "link") {
              return (
                <Link key={item.href + item.label} href={item.href} onClick={closeNav}>
                  {item.label}
                </Link>
              );
            }
            const ddClass =
              item.variant === "grid4"
                ? "dropdown grid4"
                : item.variant === "company"
                  ? "dropdown company"
                  : "dropdown wide";
            const isOpen = openItem === item.label;
            return (
              <div key={item.label} className={`nav-item${isOpen ? " open" : ""}`}>
                <span
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={(e) => {
                    if (window.innerWidth > 900) return;
                    e.preventDefault();
                    e.stopPropagation();
                    setOpenItem((cur) => (cur === item.label ? null : item.label));
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      if (window.innerWidth <= 900) {
                        setOpenItem((cur) => (cur === item.label ? null : item.label));
                      }
                    }
                  }}
                >
                  {item.label} <span className="caret" aria-hidden="true" />
                </span>
                <div className={ddClass}>
                  {item.links.map((l) => (
                    <Link key={l.href} href={l.href} className="dd-link" onClick={closeNav}>
                      <span className="dd-title">{l.title}</span>
                      {l.sub ? <span className="dd-sub">{l.sub}</span> : null}
                    </Link>
                  ))}
                  {item.foot ? (
                    <div className="dd-foot">
                      <span style={{ fontSize: 15, color: "var(--slate)" }}>{item.foot.note}</span>
                      <Link href={item.foot.href} onClick={closeNav}>
                        {item.foot.label}
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </nav>

        <Link href="/contact" className="btn" style={{ padding: "10px 20px", fontSize: 16 }}>
          Contact Us
        </Link>
      </div>
    </header>
  );
}
