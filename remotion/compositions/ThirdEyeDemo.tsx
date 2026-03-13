import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { ProjectIntro } from "./shared/ProjectIntro";
import { MetricReveal } from "./shared/MetricReveal";
import { TechStackReveal } from "./shared/TechStackReveal";

const thirdEyeMetrics = [
  { label: "Financial Metrics", value: "14", detail: "Risk-adjusted calculations" },
  { label: "3D Nodes", value: "60+", detail: "InstancedMesh rendering" },
  { label: "Hit Rate", value: "94%", detail: "Real trade data" },
  { label: "CFA Platform", value: "6K+", detail: "Lines of curriculum UI" },
];

const thirdEyeTechStack = {
  frontend: ["Next.js", "React", "TypeScript", "Recharts"],
  "3d": ["Three.js", "GSAP", "Anime.js"],
  backend: ["Appwrite", "GoHighLevel CRM"],
  analytics: ["Custom metrics engine"],
};

// Highlight Card Component
const HighlightCard: React.FC<{
  title: string;
  description: string;
  tags: string[];
  delay: number;
}> = ({ title, description, tags, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 200 },
  });

  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const y = interpolate(progress, [0, 1], [40, 0]);

  return (
    <div
      style={{
        transform: `translateY(${y}px)`,
        opacity,
        backgroundColor: "#1C1C1C",
        border: "1px solid rgba(245, 245, 220, 0.1)",
        padding: 32,
        maxWidth: 500,
      }}
    >
      <h3
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: "#F5F5DC",
          fontFamily: "Inter, sans-serif",
          marginBottom: 16,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 16,
          color: "rgba(245, 245, 220, 0.6)",
          fontFamily: "Inter, sans-serif",
          lineHeight: 1.6,
          marginBottom: 20,
        }}
      >
        {description}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {tags.map((tag, i) => (
          <span
            key={i}
            style={{
              fontSize: 12,
              fontFamily: "monospace",
              padding: "4px 12px",
              backgroundColor: "rgba(128, 0, 32, 0.1)",
              color: "#800020",
              border: "1px solid rgba(128, 0, 32, 0.2)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

// Scene 1: Project Intro
const IntroScene: React.FC = () => {
  return (
    <ProjectIntro
      title="Third Eye Capital"
      tagline="Financial analytics with 3D visualizations"
    />
  );
};

// Scene 2: Metrics Showcase
const MetricsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1C1C1C",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <div
        style={{
          opacity: interpolate(titleProgress, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(titleProgress, [0, 1], [20, 0])}px)`,
          marginBottom: 60,
        }}
      >
        <h2
          style={{
            fontSize: 24,
            fontFamily: "monospace",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "rgba(245, 245, 220, 0.4)",
          }}
        >
          Key Metrics
        </h2>
      </div>
      <MetricReveal metrics={thirdEyeMetrics} startFrame={15} />
    </AbsoluteFill>
  );
};

// Scene 3: Technical Highlights
const HighlightsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1C1C1C",
        display: "flex",
        flexDirection: "column",
        padding: 80,
      }}
    >
      <div
        style={{
          opacity: interpolate(titleProgress, [0, 1], [0, 1]),
          marginBottom: 40,
        }}
      >
        <h2
          style={{
            fontSize: 24,
            fontFamily: "monospace",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "rgba(245, 245, 220, 0.4)",
          }}
        >
          Technical Highlights
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          flex: 1,
          alignContent: "center",
        }}
      >
        <HighlightCard
          title="3D Scroll Visualization"
          description="60+ financial nodes rendered with Three.InstancedMesh for GPU efficiency. Scroll-driven camera with exponential fog."
          tags={["Three.js", "GSAP", "3D"]}
          delay={20}
        />
        <HighlightCard
          title="Financial Metrics Engine"
          description="Real-time calculation of Sharpe Ratio, Sortino, Calmar, Alpha, Beta, and Value at Risk from live trade data."
          tags={["Finance", "Analytics", "TypeScript"]}
          delay={35}
        />
        <HighlightCard
          title="Monte Carlo Forecasting"
          description="Probabilistic projections based on historical trade performance. Parametric inputs for capital and strategy."
          tags={["Statistics", "Forecasting"]}
          delay={50}
        />
        <HighlightCard
          title="CFA Learning Platform"
          description="Multi-view state management across 9 different views with hierarchical curriculum navigation."
          tags={["Education", "UX", "React"]}
          delay={65}
        />
      </div>
    </AbsoluteFill>
  );
};

// Scene 4: Tech Stack
const TechStackScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1C1C1C",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <div
        style={{
          opacity: interpolate(titleProgress, [0, 1], [0, 1]),
          marginBottom: 40,
        }}
      >
        <h2
          style={{
            fontSize: 24,
            fontFamily: "monospace",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "rgba(245, 245, 220, 0.4)",
          }}
        >
          Tech Stack
        </h2>
      </div>
      <TechStackReveal categories={thirdEyeTechStack} startFrame={15} />
    </AbsoluteFill>
  );
};

// Scene 5: CTA
const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const buttonScale = spring({
    frame: frame - 30,
    fps,
    config: { damping: 12 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1C1C1C",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity: interpolate(progress, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(progress, [0, 1], [40, 0])}px)`,
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#800020",
            fontFamily: "Inter, sans-serif",
            marginBottom: 24,
          }}
        >
          Third Eye Capital
        </h2>
        <p
          style={{
            fontSize: 24,
            color: "rgba(245, 245, 220, 0.6)",
            fontFamily: "Inter, sans-serif",
            marginBottom: 48,
          }}
        >
          Financial analytics dashboard
        </p>
      </div>
      <div
        style={{
          transform: `scale(${buttonScale})`,
        }}
      >
        <div
          style={{
            padding: "20px 48px",
            backgroundColor: "#F5F5DC",
            color: "#1C1C1C",
            fontSize: 20,
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
          }}
        >
          thirdeyecapital.ai
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const ThirdEyeDemo: React.FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={90}>
        <IntroScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence durationInFrames={150}>
        <MetricsScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: 20 })}
      />
      <TransitionSeries.Sequence durationInFrames={450}>
        <HighlightsScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence durationInFrames={240}>
        <TechStackScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 20 })}
      />
      <TransitionSeries.Sequence durationInFrames={240}>
        <CTAScene />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
