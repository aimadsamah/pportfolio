'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SKILLS } from '@/lib/data'
import { cn } from '@/lib/utils'
import type { SkillTile } from '@/types'

const sizeMap: Record<SkillTile['size'], string> = {
  sm: 'col-span-1',
  wide: 'col-span-2',
  tall: 'col-span-1 row-span-2',
  xl: 'col-span-3',
}

function BentoTile({ skill, index }: { skill: SkillTile; index: number }) {
  const isTall = skill.size === 'tall'

  return (
    <motion.div
      className={cn('bento-tile', sizeMap[skill.size], isTall && 'justify-start pt-7 min-h-[260px]')}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="text-[32px] mb-3 leading-none select-none">{skill.icon}</div>
      <div>
        <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-blue-bright mb-1">
          {skill.tag}
        </p>
        <p className="font-mono text-[12px] text-gray-light tracking-[0.05em]">{skill.name}</p>
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10">
      <div className="mx-[60px] h-px bg-gradient-to-r from-transparent via-[#222] to-transparent max-sm:mx-6" />

      <div className="px-[60px] pt-24 pb-28 max-sm:px-6">
        <div className="flex items-end justify-between mb-2 flex-wrap gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel className="mb-4">Technical Arsenal</SectionLabel>
            <h2
              className="font-syne font-bold text-white leading-[1.08] tracking-[-1.5px]"
              style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}
            >
              The Stack I Build With.
            </h2>
          </motion.div>

          <motion.p
            className="text-gray-text text-sm font-mono tracking-[0.05em] max-w-[220px] text-right max-sm:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Technologies I use daily to build production software.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-6 gap-3 mt-10 max-sm:grid-cols-3">
          {SKILLS.map((skill, i) => (
            <BentoTile key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
