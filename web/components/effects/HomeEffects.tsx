"use client";

import { useEffect } from "react";

/** Homepage industries sliding window (DOM ids from home markup). */
export default function HomeEffects() {
  useEffect(() => {
    const indBand = document.getElementById("industriesBand");
    if (!indBand) return;

    const cleanups: Array<() => void> = [];
    const viewport = indBand.querySelector(".ind-viewport");
    const track = document.getElementById("indTrack") as HTMLElement | null;
    const cols = [...indBand.querySelectorAll<HTMLElement>(".ind-col")];
    const imgs = indBand.querySelectorAll(".ind-bg img");
    const prev = document.getElementById("indPrev") as HTMLButtonElement | null;
    const next = document.getElementById("indNext") as HTMLButtonElement | null;
    const visible = 4;
    const maxStart = Math.max(0, cols.length - visible);
    let start = 0;

    const activateInd = (col: HTMLElement | undefined) => {
      if (!col) return;
      const id = col.getAttribute("data-ind");
      cols.forEach((c) => c.classList.toggle("is-active", c === col));
      imgs.forEach((img) =>
        img.classList.toggle("is-active", img.getAttribute("data-ind") === id),
      );
    };

    const colWidth = () => (viewport ? viewport.clientWidth / visible : 0);

    const applySlide = (animate = true) => {
      if (!track || !viewport) return;
      if (window.matchMedia("(max-width: 980px)").matches) {
        track.style.transform = "none";
        cols.forEach((c) => {
          c.style.width = "";
          c.style.minWidth = "";
          c.style.flex = "";
        });
        return;
      }
      const w = colWidth();
      cols.forEach((c) => {
        c.style.flex = `0 0 ${w}px`;
        c.style.width = `${w}px`;
        c.style.minWidth = `${w}px`;
      });
      if (!animate) track.style.transition = "none";
      track.style.transform = `translateX(-${start * w}px)`;
      if (!animate) {
        void track.offsetWidth;
        track.style.transition = "";
      }
      if (prev) prev.disabled = start <= 0;
      if (next) next.disabled = start >= maxStart;
      const activeInView = cols
        .slice(start, start + visible)
        .find((c) => c.classList.contains("is-active"));
      if (!activeInView) activateInd(cols[start]);
    };

    const shift = (dir: number) => {
      start = Math.min(maxStart, Math.max(0, start + dir));
      applySlide(true);
    };

    const onEnter = (col: HTMLElement) => () => activateInd(col);
    const onClick = (col: HTMLElement) => (e: Event) => {
      if (!col.classList.contains("is-active") && window.matchMedia("(max-width: 980px)").matches) {
        e.preventDefault();
        activateInd(col);
      }
    };

    cols.forEach((col) => {
      col.addEventListener("mouseenter", onEnter(col));
      col.addEventListener("focus", onEnter(col));
      col.addEventListener("click", onClick(col));
    });

    const onPrev = () => shift(-1);
    const onNext = () => shift(1);
    const onResize = () => applySlide(false);

    prev?.addEventListener("click", onPrev);
    next?.addEventListener("click", onNext);
    window.addEventListener("resize", onResize);
    applySlide(false);

    cleanups.push(() => {
      prev?.removeEventListener("click", onPrev);
      next?.removeEventListener("click", onNext);
      window.removeEventListener("resize", onResize);
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
