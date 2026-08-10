import { projects } from "@/lib/projects";
import { ProductEntry } from "@/components/ProductEntry";

const FEATURED = ["cfb-fantasy", "thirdeye", "nightkey", "bisect"] as const;

export default function Home() {
  const featured = FEATURED
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <main className="mx-auto w-full max-w-[1100px] px-6 pb-40">
      <header className="mx-auto flex max-w-[720px] items-center justify-between pt-10">
        <span className="label">Kashyap Maheshwari</span>
        <span className="label flex items-center gap-2">
          <span aria-hidden className="inline-block h-[6px] w-[6px] rounded-full bg-accent" />
          Available
        </span>
      </header>

      <section className="mx-auto mt-24 max-w-[720px]">
        <h1 className="font-display text-[44px] italic leading-[1.1] tracking-[-0.01em]">
          I build AI systems that operate real businesses.
        </h1>
        <p className="mt-6 max-w-[62ch] text-[16px] leading-relaxed text-muted">
          My consumer app — live on the App Store and Google Play — is run by an
          agent workforce I built: agents that write its articles, produce its
          video, and report to me through a voice assistant. Every publish path
          has a human approval gate.
        </p>
      </section>

      {featured.map((p, i) => (
        <ProductEntry key={p.id} project={p} priority={i === 0} />
      ))}

      <section className="mx-auto mt-32 max-w-[720px] border-t border-rule pt-10">
        <h2 className="label">Currently</h2>
        <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-muted">
          Open to select freelance work and full-time roles.{" "}
          <a href="mailto:kashpm2002@gmail.com" className="text-accent underline decoration-accent/30 underline-offset-4">
            kashpm2002@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
