"use client";

import { useEffect } from "react";

type Page = "case-study" | "insights" | "embedded-software" | "voice-ai-agent";

export default function PageInteractions({ page }: { page: Page }) {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    if (page === "case-study") {
      const tabs = document.querySelectorAll<HTMLElement>(".cs-tab");
      const ind = document.getElementById("cs-industry-opts");
      const exp = document.getElementById("cs-expertise-opts");
      const cards = document.querySelectorAll<HTMLElement>(".cs-card");
      const showAll = () => cards.forEach((c) => (c.style.display = ""));
      const filter = (kind: string, val: string) => {
        cards.forEach((c) => {
          c.style.display = c.getAttribute(`data-${kind}`) === val ? "" : "none";
        });
      };
      const onTab = (tab: HTMLElement) => () => {
        tabs.forEach((t) => t.classList.remove("on"));
        tab.classList.add("on");
        document.querySelectorAll(".cs-opt").forEach((o) => o.classList.remove("on"));
        const f = tab.getAttribute("data-filter");
        ind?.classList.toggle("show", f === "industry");
        exp?.classList.toggle("show", f === "expertise");
        if (f === "all") showAll();
      };
      tabs.forEach((tab) => tab.addEventListener("click", onTab(tab)));
      const onOpt = (opt: HTMLElement) => () => {
        const kind = opt.getAttribute("data-kind") || "";
        (kind === "industry" ? ind : exp)
          ?.querySelectorAll(".cs-opt")
          .forEach((o) => o.classList.remove("on"));
        opt.classList.add("on");
        filter(kind, opt.getAttribute("data-value") || "");
      };
      document.querySelectorAll<HTMLElement>(".cs-opt").forEach((opt) => {
        opt.addEventListener("click", onOpt(opt));
      });
      cleanups.push(() => {
        tabs.forEach((tab) => tab.removeEventListener("click", onTab(tab)));
      });
    }

    if (page === "insights") {
      let selected: string[] = [];
      const taglist = document.getElementById("ins-taglist");
      const empty = document.getElementById("ins-empty");
      const cards = Array.from(
        document.querySelectorAll<HTMLElement>(".ins-card, .ins-feat"),
      );
      const tabs = document.querySelectorAll<HTMLElement>(".ins-tab");

      const apply = () => {
        let visible = 0;
        cards.forEach((card) => {
          const tags = (card.getAttribute("data-tags") || "").split(",");
          const ok =
            selected.length === 0 || selected.some((t) => tags.includes(t));
          card.style.display = ok ? "" : "none";
          if (ok) visible += 1;
        });
        if (empty) empty.hidden = visible > 0;
      };

      tabs.forEach((tab) => {
        const handler = () => {
          tabs.forEach((t) => t.classList.remove("on"));
          tab.classList.add("on");
          const view = tab.getAttribute("data-view");
          taglist?.classList.toggle("is-hidden", view !== "industry");
          if (view !== "industry") {
            selected = [];
            document.querySelectorAll(".ins-tag").forEach((b) => b.classList.remove("on"));
            apply();
          }
        };
        tab.addEventListener("click", handler);
        cleanups.push(() => tab.removeEventListener("click", handler));
      });

      document.querySelectorAll<HTMLElement>(".ins-tag").forEach((btn) => {
        const handler = () => {
          const tag = btn.getAttribute("data-tag") || "";
          if (selected.includes(tag)) {
            selected = selected.filter((t) => t !== tag);
            btn.classList.remove("on");
          } else {
            selected.push(tag);
            btn.classList.add("on");
          }
          apply();
        };
        btn.addEventListener("click", handler);
        cleanups.push(() => btn.removeEventListener("click", handler));
      });
    }

    if (page === "embedded-software" || page === "voice-ai-agent") {
      const headers = document.querySelectorAll<HTMLElement>(
        "[data-acc-toggle], .acc-header",
      );
      const onToggle = (headerEl: HTMLElement) => (e: Event) => {
        e.preventDefault();
        const item = headerEl.parentElement;
        if (!item) return;
        const wasOpen = item.classList.contains("open");
        item.parentElement
          ?.querySelectorAll(".acc-item")
          .forEach((i) => i.classList.remove("open"));
        if (!wasOpen) item.classList.add("open");
      };
      headers.forEach((h) => {
        const handler = onToggle(h);
        h.addEventListener("click", handler);
        cleanups.push(() => h.removeEventListener("click", handler));
      });

      // framework-step reveal (voice)
      const steps = document.querySelectorAll(".framework-step");
      if (steps.length && "IntersectionObserver" in window) {
        const stepIo = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                stepIo.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.3 },
        );
        steps.forEach((s) => stepIo.observe(s));
        cleanups.push(() => stepIo.disconnect());
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, [page]);

  return null;
}
