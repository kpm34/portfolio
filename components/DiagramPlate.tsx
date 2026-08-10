import type { ReactNode } from "react";

interface DiagramPlateProps {
  title: string;
  children: ReactNode;
}

/**
 * Presents a diagram component (which hardcodes its own dark canvas and
 * saturated node colours) as a photographic plate inset on the paper page —
 * the way a printed book sets a figure. The plate keeps its own dark ground;
 * the caption sits on paper below it.
 */
export function DiagramPlate({ title, children }: DiagramPlateProps) {
  return (
    <figure className="mt-12 first:mt-0">
      <div
        data-testid="diagram-plate"
        className="w-full overflow-hidden rounded-[2px] bg-[#0E0D0B] p-6 media-lift"
      >
        {children}
      </div>
      <figcaption className="label mt-3">{title}</figcaption>
    </figure>
  );
}
