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

const bisectMetrics = [
  { label: "Materials", value: "600+", detail: "PBR presets with metadata" },
  { label: "AI Models", value: "3", detail: "GPT-4o, Gemini, Claude" },
  { label: "Formats", value: "Multi", detail: "Spline, GLTF, GLB" },
  { label: "RAG", value: "Browser", detail: "ChromaDB embeddings" },
];

const bisectTechStack = {
  frontend: ["Next.js", "React", "TypeScript"],
  "3d": ["Three.js", "Spline Runtime", "React Three Fiber"],
  ai: ["GPT-4o", "Gemini", "Claude", "ChromaDB"],
  state: ["Zustand"],
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
      title="Bisect"
      tagline="Three-studio creative platform with AI orchestration"
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
      <MetricReveal metrics={bisectMetrics} startFrame={15} />
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
          title="Multi-Studio Architecture"
          description="Vector, Texture, and 3D studios share unified Zustand state. Cross-studio drag & drop enables asset transfer."
          tags={["Architecture", "Zustand", "State Management"]}
          delay={20}
        />
        <HighlightCard
          title="Adapter Pattern for 3D Formats"
          description="ISceneAdapter interface with 40+ methods abstracts Spline, GLTF, GLB formats. Auto-detection routing."
          tags={["Design Patterns", "Three.js"]}
          delay={35}
        />
        <HighlightCard
          title="AI Orchestration"
          description="MultiModelRouter sends tasks to specialist agents. Gemini for spatial, GPT-4o for materials, Claude for code."
          tags={["AI", "Multi-Agent", "Orchestration"]}
          delay={50}
        />
        <HighlightCard
          title="Browser RAG System"
          description="ChromaDB client stores command/outcome pairs. Top-5 similar past edits for context-aware AI responses."
          tags={["RAG", "Embeddings", "ChromaDB"]}
          delay={65}
        />
      </div>
    </AbsoluteFill>
  );
};

// Scene 4: More Highlights
const MoreHighlightsScene: React.FC = () => {
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
          More Highlights
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
          title="600+ PBR Material Library"
          description="Declarative manifest with physical properties, texture maps, and category constraints. Searchable by tags."
          tags={["Materials", "PBR", "3D"]}
          delay={20}
        />
        <HighlightCard
          title="Natural Language Commands"
          description="Regex parser converts 'make it red' to structured operations. Runtime variables with arithmetic support."
          tags={["NLP", "Parser", "UX"]}
          delay={35}
        />
      </div>
    </AbsoluteFill>
  );
};

// Scene 5: Tech Stack
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
      <TechStackReveal categories={bisectTechStack} startFrame={15} />
    </AbsoluteFill>
  );
};

// Scene 6: CTA
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
          Bisect
        </h2>
        <p
          style={{
            fontSize: 24,
            color: "rgba(245, 245, 220, 0.6)",
            fontFamily: "Inter, sans-serif",
            marginBottom: 48,
          }}
        >
          No-code 3D creation platform
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
          bisect.app
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const BisectDemo: React.FC = () => {
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
      <TransitionSeries.Sequence durationInFrames={300}>
        <HighlightsScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence durationInFrames={240}>
        <MoreHighlightsScene />
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
