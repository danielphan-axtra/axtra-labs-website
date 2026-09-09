"use client";

import { useEffect, useRef, useState } from "react";

/** Hero loop video; no poster flash — static image only for reduced motion. */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const play = () => {
      el.play().catch(() => undefined);
    };

    if (el.readyState >= 2) play();
    else el.addEventListener("loadeddata", play, { once: true });

    return () => el.removeEventListener("loadeddata", play);
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className="hero-video"
        src="/assets/img/services/ai-services-hero.jpg"
        alt=""
        fetchPriority="high"
      />
    );
  }

  return (
    <video
      ref={ref}
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src="/assets/video/hero-loop.mp4" type="video/mp4" />
    </video>
  );
}
