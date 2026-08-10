"use client";

import { useEffect, useRef } from "react";

const registry = new Set<HTMLVideoElement>();

function playExclusively(target: HTMLVideoElement) {
  for (const v of registry) {
    if (v !== target && !v.paused) v.pause();
  }
  void target.play().catch(() => {
    /* autoplay refused — poster remains, which is an acceptable resting state */
  });
}

/** Plays the video only while >50% visible, and only one across the page. */
export function useInViewVideo(enabled: boolean) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    registry.add(el);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) playExclusively(el);
        else el.pause();
      },
      { threshold: 0.5 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      registry.delete(el);
    };
  }, [enabled]);

  return ref;
}
