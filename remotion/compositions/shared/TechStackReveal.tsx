import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

type TechStackRevealProps = {
  categories: Record<string, string[]>;
  startFrame?: number;
};

export const TechStackReveal: React.FC<TechStackRevealProps> = ({
  categories,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entries = Object.entries(categories);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 48,
        justifyContent: "center",
        padding: 40,
      }}
    >
      {entries.map(([category, techs], catIndex) => {
        const catDelay = startFrame + catIndex * 15;
        const catProgress = spring({
          frame: frame - catDelay,
          fps,
          config: { damping: 200 },
        });

        const catOpacity = interpolate(catProgress, [0, 1], [0, 1]);
        const catY = interpolate(catProgress, [0, 1], [30, 0]);

        return (
          <div
            key={category}
            style={{
              transform: `translateY(${catY}px)`,
              opacity: catOpacity,
            }}
          >
            <h3
              style={{
                fontSize: 14,
                fontFamily: "monospace",
                textTransform: "uppercase",
                color: "#800020",
                marginBottom: 16,
                letterSpacing: "0.1em",
              }}
            >
              {category}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {techs.map((tech, techIndex) => {
                const techDelay = catDelay + 10 + techIndex * 4;
                const techScale = spring({
                  frame: frame - techDelay,
                  fps,
                  config: { damping: 12 }, // Slight bounce
                });

                return (
                  <span
                    key={tech}
                    style={{
                      transform: `scale(${techScale})`,
                      fontSize: 14,
                      padding: "8px 16px",
                      backgroundColor: "rgba(245, 245, 220, 0.05)",
                      color: "rgba(245, 245, 220, 0.7)",
                      border: "1px solid rgba(245, 245, 220, 0.1)",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
