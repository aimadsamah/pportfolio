'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useMagnetic } from '@/hooks/useMagnetic'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

export function HeroSection() {
  const { ref, x, y } = useMagnetic({ strength: 0.22 })

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-start px-[60px] pt-24 pb-0 relative overflow-hidden max-sm:px-6"
    >
      <motion.div
        className="relative z-10 max-w-6xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div
          variants={item}
          className="flex items-center gap-3 mb-7"
        >
          <span className="block w-8 h-px bg-blue-bright" />
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-blue-bright">
            Full-Stack Developer
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-syne font-extrabold leading-[0.9] tracking-[-4px] mb-6 text-white select-none"
          style={{
            fontSize: 'clamp(68px, 11vw, 160px)',
            x,
            y,
          }}
          // @ts-ignore — motion ref
          ref={ref}
        >
          Aimad
          <br />
          <span className="text-blue-bright">Samah</span>
        </motion.h1>

        {/* Role line */}
        <motion.p
          variants={item}
          className="font-syne text-gray-text mb-12 tracking-[-1px]"
          style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}
        >
          Building Digital Products
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          className="max-w-md text-base text-gray-light leading-relaxed mb-14 font-[400]"
        >
          Crafting performant, elegant full-stack applications from Algeria to the world.
          I turn complex problems into clean, scalable solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex items-center gap-4 flex-wrap">
          <Link href="#projects" className="btn-primary group">
            View Work
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </Link>
          <Link href="#contact" className="btn-secondary">
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-12 right-[60px] flex flex-col items-center gap-2 opacity-40 max-sm:hidden"
        aria-hidden="true"
      >
        <span
          className="font-mono text-[10px] tracking-[0.15em] uppercase text-gray-light"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <div
          className="w-px h-16"
          style={{
            background: 'linear-gradient(to bottom, transparent, #3b82f6)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
      </div>

      {/* Hero grid decoration */}
      <div
        className="absolute bottom-0 right-0 w-[40vw] h-[60vh] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to top left, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to top left, black, transparent)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
