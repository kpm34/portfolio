import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Img,
  staticFile,
} from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { ProjectIntro } from "./shared/ProjectIntro";
import { MetricReveal } from "./shared/MetricReveal";
import { TechStackReveal } from "./shared/TechStackReveal";

const cfbMetrics = [
  { label: "Draft Latency", value: "6ms", detail: "8x faster than Realtime" },
  { label: "Asset Loading", value: "<3s", detail: "31MB+ 3D assets" },
  { label: "Background Jobs", value: "15+", detail: "Cron pipeline" },
  { label: "Build", value: "Solo", detail: "4 months" },
];

const cfbTechStack = {
  frontend: ["Next.js 15", "React 19", "TypeScript", "Tailwind v4"],
  "3d": ["React Three Fiber", "Three.js", "Drei"],
  backend: ["Supabase", "PostgreSQL", "Vercel Cron"],
  ai: ["Claude API", "Gemini API", "Pinecone"],
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

// Scene 1: Project Intro (0-3s = 0-90 frames)
const IntroScene: React.FC = () => {
  return <ProjectIntro title="CFB Fantasy" tagline="6ms real-time drafts" />;
};

// Scene 2: Metrics Showcase (3-8s = 90-240 frames)
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
      <MetricReveal metrics={cfbMetrics} startFrame={15} />
    </AbsoluteFill>
  );
};

// Scene 3: Technical Highlights (8-25s)
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
          title="Real-Time Draft Orchestration"
          description="Supabase Broadcast bypasses RLS overhead for pub/sub messaging, achieving 6ms latency vs 46ms+ with standard Realtime."
          tags={["WebSocket", "Supabase", "Real-time"]}
          delay={20}
        />
        <HighlightCard
          title="Staged 3D Asset Loading"
          description="Progressive preloading strategy loads 31MB+ of GLB models during splash screen for smooth 3D landing experience."
          tags={["Three.js", "React Three Fiber", "Performance"]}
          delay={35}
        />
        <HighlightCard
          title="Multi-Strategy Autopick"
          description="Three-tier fallback: User queue > Pre-draft rankings > Position priority. Smart roster composition logic."
          tags={["Algorithm", "UX", "Fantasy Sports"]}
          delay={50}
        />
        <HighlightCard
          title="Dual AI Chat System"
          description="Claude for vision/coding, Gemini for web search. RAG memory via Pinecone with 0.7+ similarity threshold."
          tags={["Claude", "Gemini", "Pinecone", "RAG"]}
          delay={65}
        />
      </div>
    </AbsoluteFill>
  );
};

// Scene 4: Tech Stack (25-35s)
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
      <TechStackReveal categories={cfbTechStack} startFrame={15} />
    </AbsoluteFill>
  );
};

// Scene 5: CTA (35-45s)
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
    config: { damping: 12 }, // Bouncy
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
          CFB Fantasy
        </h2>
        <p
          style={{
            fontSize: 24,
            color: "rgba(245, 245, 220, 0.6)",
            fontFamily: "Inter, sans-serif",
            marginBottom: 48,
          }}
        >
          Production-ready fantasy platform
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
          cfbfantasy.app
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const CFBDemo: React.FC = () => {
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
      <TransitionSeries.Sequence durationInFrames={510}>
        <HighlightsScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence durationInFrames={300}>
        <TechStackScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 20 })}
      />
      <TransitionSeries.Sequence durationInFrames={300}>
        <CTAScene />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
