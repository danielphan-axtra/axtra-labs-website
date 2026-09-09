"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Match `assets/js/site.js` scroll-reveal selectors. */
const ANIMATED =
  ".reveal, .framework-step, .pipeline-step, .bento-step, .devops-node, .zig-step, .rail-step, .why-stack-item, .why-stat, .why-dark-card, .why-alt-row, .acc-item";

/** Scroll reveal + count-up — re-binds on every route so SPA navigations aren't blank. */
export default function RevealEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];
    let cancelled = false;
    let io: IntersectionObserver | null = null;
    let cio: IntersectionObserver | null = null;

    const bindReveals = () => {
      if (cancelled) return;
      io?.disconnect();

      const elements = [...document.querySelectorAll(ANIMATED)];
      if (!elements.length) return;

      if (prefersReduced || !("IntersectionObserver" in window)) {
        elements.forEach((el) => el.classList.add("in-view"));
        return;
      }

      const groups = new Map<Element | null, Element[]>();
      elements.forEach((el) => {
        const key = el.parentElement;
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key)!.push(el);
      });

      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const parent = entry.target.parentElement;
            const siblings = groups.get(parent) || [entry.target];
            const idx = siblings.indexOf(entry.target);
            const delay = Math.min(Math.max(idx, 0), 8) * 75;
            window.setTimeout(() => entry.target.classList.add("in-view"), delay);
            io?.unobserve(entry.target);
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
      );

      elements.forEach((el) => {
        if (el.classList.contains("in-view")) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          const parent = el.parentElement;
          const siblings = groups.get(parent) || [el];
          const idx = siblings.indexOf(el);
          const delay = Math.min(Math.max(idx, 0), 8) * 75;
          window.setTimeout(() => el.classList.add("in-view"), delay);
        } else {
          io?.observe(el);
        }
      });
    };

    const bindCounters = () => {
      if (cancelled) return;
      cio?.disconnect();

      const counters = document.querySelectorAll<HTMLElement>(".count-up");
      if (!counters.length) return;

      const animate = (el: HTMLElement) => {
        if (el.dataset.counted === "1") return;
        el.dataset.counted = "1";
        const target = Number(el.dataset.target || "0");
        const suffix = el.dataset.suffix || "";
        const prefix = el.dataset.prefix || "";
        const duration = 1100;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };

      if (prefersReduced) {
        counters.forEach((el) => {
          el.textContent = `${el.dataset.prefix || ""}${el.dataset.target || "0"}${el.dataset.suffix || ""}`;
        });
        return;
      }

      cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              animate(e.target as HTMLElement);
              cio?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.4 },
      );
      counters.forEach((el) => cio?.observe(el));
    };

    const bindAll = () => {
      bindReveals();
      bindCounters();
    };

    // Wait for RSC content after soft navigations
    const raf = requestAnimationFrame(() => requestAnimationFrame(bindAll));
    const t0 = window.setTimeout(bindAll, 0);
    const t1 = window.setTimeout(bindAll, 100);

    const main = document.querySelector("main");
    let mo: MutationObserver | null = null;
    if (main && "MutationObserver" in window) {
      let debounce = 0;
      mo = new MutationObserver(() => {
        window.clearTimeout(debounce);
        debounce = window.setTimeout(bindAll, 40);
      });
      mo.observe(main, { childList: true, subtree: true });
      cleanups.push(() => {
        window.clearTimeout(debounce);
        mo?.disconnect();
      });
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(t0);
      window.clearTimeout(t1);
      io?.disconnect();
      cio?.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
