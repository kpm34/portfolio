import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProductMedia } from "./ProductMedia";

export function ProductEntry({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="mt-24 first:mt-16">
      <ProductMedia
        testId={project.slug}
        poster={project.image}
        clip={project.clip}
        alt={`${project.title} interface`}
        priority={priority}
      />

      <div className="mx-auto mt-6 max-w-[720px]">
        <h2 className="text-[20px] font-medium tracking-tight">
          <Link
            href={`/projects/${project.slug}`}
            className="group inline-flex items-center gap-1 text-accent decoration-accent/30 underline-offset-4 hover:underline"
          >
            {project.title}
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
          </Link>
        </h2>

        <p className="mt-2 max-w-[62ch] text-[16px] leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {project.chips.map((c) => (
            <li key={c} className="label">{c}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
