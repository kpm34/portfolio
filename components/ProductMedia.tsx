"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useInViewVideo } from "@/hooks/useInViewVideo";

interface ProductMediaProps {
  poster: string;
  clip?: string;
  alt: string;
  priority?: boolean;
  testId: string;
}

export function ProductMedia({ poster, clip, alt, priority = false, testId }: ProductMediaProps) {
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setAllowMotion(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const videoRef = useInViewVideo(Boolean(clip) && allowMotion);

  // React sets `muted` as a DOM property, not an HTML attribute, when a
  // <video> node is created after mount (as here, gated behind allowMotion).
  // Browsers' autoplay policy — and anything asserting on the attribute —
  // needs it reflected explicitly.
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.setAttribute("muted", "");
    }
  }, [clip, allowMotion, videoRef]);

  return (
    <figure
      data-testid={`media-${testId}`}
      className="relative w-full aspect-video max-h-[var(--media-max-h)] overflow-hidden rounded-[2px] bg-paper media-lift"
    >
      {clip && allowMotion ? (
        <video
          ref={videoRef}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={alt}
          className="h-full w-full object-cover"
        >
          <source src={clip} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={poster}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 1100px"
          priority={priority}
          className="object-cover"
        />
      )}
    </figure>
  );
}
