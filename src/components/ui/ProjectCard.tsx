"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, rotateX, rotateY } = useTilt(5);

  return (
    <motion.div
      ref={ref}
      // AJOUT : w-[300px] pour mobile, md:w-[380px] pour tablette/desktop
      // AJOUT : flex-shrink-0 pour éviter que la carte ne s'écrase dans le scroll horizontal
      className="project-card w-[290px] md:w-[380px] flex-shrink-0 bg-[#050505] border border-[#1a1a1a] rounded-[4px]"
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.75,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Image area */}
      {/* AJOUT : h-[200px] sur mobile pour éviter que la carte soit trop longue */}
      <div className="relative w-full h-[220px] md:h-[280px] bg-slate overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Big text ghost */}
        <div
          className="absolute inset-0 flex items-center justify-center font-syne font-extrabold text-white pointer-events-none"
          style={{
            fontSize: "clamp(48px, 10vw, 72px)", // Ajustement fluide de la taille
            opacity: 0.055,
            letterSpacing: "-3px",
            userSelect: "none",
          }}
        >
          {project.title.split(" ")[0]}
        </div>

        {/* Glow blob */}
        <div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full transition-opacity duration-500 opacity-50 group-hover:opacity-100"
          style={{
            background: project.glowColor,
            filter: "blur(55px)",
          }}
        />

        {/* Counter */}
        <span className="absolute top-5 left-5 font-mono text-[11px] text-blue-bright tracking-[0.15em] opacity-80">
          {project.num} / {String(4).padStart(2, "0")}
        </span>

        {/* Type badge */}
        <span className="absolute top-5 right-5 font-mono text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 border border-[#2a2a2a] bg-black/60 text-gray-light rounded-[2px]">
          {project.label}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 md:p-7">
        {/* Status */}
        <div className="flex items-center gap-2 mb-2.5">
          <span
            className="w-1.5 h-1.5 rounded-full bg-blue-bright"
            style={{
              boxShadow: "0 0 6px #3b82f6",
              animation: "statusPulse 2s ease-in-out infinite",
            }}
          />
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-blue-bright">
            {project.status}
          </span>
        </div>

        <h3 className="font-syne font-bold text-[20px] md:text-[22px] text-white tracking-[-0.5px] mb-2.5">
          {project.title}
        </h3>
        <p className="text-[13px] text-gray-light leading-relaxed mb-5 line-clamp-2 md:line-clamp-none">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[9px] md:text-[10px] tracking-[0.08em] uppercase px-2 py-0.5 md:px-2.5 md:py-1 rounded-[2px] bg-blue-muted border border-blue-dim/40 text-blue-bright"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-border">
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              className="font-mono text-[11px] text-gray-text uppercase tracking-[0.1em] hover:text-white transition-colors duration-200 no-underline inline-flex items-center gap-2"
            >
              View Live
            </Link>
          ) : (
            <span className="font-mono text-[11px] text-gray-border uppercase tracking-[0.1em]">
              Coming Soon
            </span>
          )}

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-[#222] rounded-[2px] flex items-center justify-center text-gray-text text-sm no-underline"
                whileHover={{
                  borderColor: "#3b82f6",
                  color: "#3b82f6",
                  background: "rgba(59,130,246,0.05)",
                }}
                title="GitHub"
              >
                ↗
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
