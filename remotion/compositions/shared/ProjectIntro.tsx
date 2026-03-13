import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

type ProjectIntroProps = {
  title: string;
  tagline: string;
  gradient?: string;
};

export const ProjectIntro: React.FC<ProjectIntroProps> = ({
  title,
  tagline,
  gradient = "from-orange-500 to-red-500",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title animation - smooth entrance
  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 200 }, // Smooth, no bounce
  });

  const titleY = interpolate(titleProgress, [0, 1], [60, 0]);
  const titleOpacity = interpolate(titleProgress, [0, 1], [0, 1]);

  // Tagline animation - delayed, smooth
  const taglineProgress = spring({
    frame: frame - 15, // 0.5s delay
    fps,
    config: { damping: 200 },
  });

  const taglineY = interpolate(taglineProgress, [0, 1], [40, 0]);
  const taglineOpacity = interpolate(taglineProgress, [0, 1], [0, 1]);

  // Subtle line animation
  const lineWidth = spring({
    frame: frame - 25,
    fps,
    config: { damping: 200 },
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#1C1C1C",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      {/* Title */}
      <div
        style={{
          transform: `translateY(${titleY}px)`,
          opacity: titleOpacity,
        }}
      >
        <h1
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#800020",
            fontFamily: "Inter, sans-serif",
            letterSpacing: "-0.02em",
            textAlign: "center",
            margin: 0,
          }}
        >
          {title}
        </h1>
      </div>

      {/* Decorative line */}
      <div
        style={{
          width: interpolate(lineWidth, [0, 1], [0, 200]),
          height: 2,
          backgroundColor: "#800020",
          marginTop: 32,
          marginBottom: 32,
        }}
      />

      {/* Tagline */}
      <div
        style={{
          transform: `translateY(${taglineY}px)`,
          opacity: taglineOpacity,
        }}
      >
        <p
          style={{
            fontSize: 32,
            color: "rgba(245, 245, 220, 0.7)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
            textAlign: "center",
            margin: 0,
          }}
        >
          {tagline}
        </p>
      </div>
    </div>
  );
};
