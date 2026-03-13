import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

type Metric = {
  label: string;
  value: string;
  detail?: string;
};

type MetricRevealProps = {
  metrics: Metric[];
  startFrame?: number;
};

export const MetricReveal: React.FC<MetricRevealProps> = ({
  metrics,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        display: "flex",
        gap: 32,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {metrics.map((metric, i) => {
        const delay = startFrame + i * 8; // Stagger by 8 frames
        const adjustedFrame = frame - delay;

        // Bouncy entrance for playful feel
        const scale = spring({
          frame: adjustedFrame,
          fps,
          config: { damping: 8 }, // Bouncy
        });

        // Fade in
        const opacity = interpolate(adjustedFrame, [0, 10], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        return (
          <div
            key={i}
            style={{
              transform: `scale(${scale})`,
              opacity,
              backgroundColor: "#1C1C1C",
              border: "1px solid rgba(245, 245, 220, 0.1)",
              padding: "24px 32px",
              textAlign: "center",
              minWidth: 140,
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: "#800020",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {metric.value}
            </div>
            <div
              style={{
                fontSize: 14,
                color: "rgba(245, 245, 220, 0.6)",
                fontFamily: "monospace",
                marginTop: 8,
              }}
            >
              {metric.label}
            </div>
            {metric.detail && (
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(245, 245, 220, 0.4)",
                  marginTop: 4,
                }}
              >
                {metric.detail}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
