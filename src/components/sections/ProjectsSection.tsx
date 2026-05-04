'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { PROJECTS } from '@/lib/data'

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="projects" className="relative z-10">
      <div className="mx-[60px] h-px bg-gradient-to-r from-transparent via-[#222] to-transparent max-sm:mx-6" />

      <div className="pt-24 pb-28">
        {/* Header */}
        <div className="px-[60px] max-sm:px-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel className="mb-4">Projects Showcase</SectionLabel>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h2
                className="font-syne font-bold text-white leading-[1.08] tracking-[-1.5px]"
                style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}
              >
                Selected <span className="text-blue-bright">Work.</span>
              </h2>
              <p className="font-mono text-[11px] text-gray-text tracking-[0.08em] uppercase">
                {PROJECTS.length} Projects
              </p>
            </div>
          </motion.div>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="overflow-x-auto pb-6 cursor-none"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#1e3a6e transparent' }}
        >
          <div className="flex gap-6 px-[60px] max-sm:px-6" style={{ width: 'max-content' }}>
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.num} project={project} index={i} />
            ))}

            {/* "More coming" ghost card */}
            <motion.div
              className="flex-shrink-0 border border-dashed border-[#1a1a1a] rounded-[6px] flex items-center justify-center"
              style={{ width: 320, minHeight: 540 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center px-8">
                <div className="text-3xl mb-4 opacity-30">+</div>
                <p className="font-mono text-[11px] text-gray-border uppercase tracking-[0.12em]">
                  More on GitHub
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="px-[60px] max-sm:px-6 mt-6 flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span className="font-mono text-[11px] text-gray-border uppercase tracking-[0.1em]">
            Scroll to explore
          </span>
          <motion.span
            className="text-gray-border"
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            →
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}
