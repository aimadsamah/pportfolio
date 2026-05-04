'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { NAV_LINKS } from '@/lib/data'

export function Navbar() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.95])
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-[60px] py-6 flex items-center justify-between"
      style={{}}
    >
      {/* Glass bg on scroll */}
      <motion.div
        className="absolute inset-0 bg-black border-b border-[#111]"
        style={{ opacity: bgOpacity }}
      />

      {/* Logo */}
      <Link
        href="/"
        className="relative z-10 font-syne font-extrabold text-lg tracking-[-0.5px] text-white no-underline cursor-none"
      >
        AS<span className="text-blue-bright">.</span>
      </Link>

      {/* Links */}
      <nav className="relative z-10 hidden md:flex items-center gap-10" aria-label="Main navigation">
        {NAV_LINKS.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={link.href}
              className="font-mono text-[11px] tracking-[0.1em] uppercase text-gray-light hover:text-white transition-colors duration-200 no-underline cursor-none"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* CTA */}
      <motion.div
        className="relative z-10 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link href="#contact" className="btn-secondary text-[11px] py-2.5 px-5">
          Hire Me
        </Link>
      </motion.div>
    </motion.header>
  )
}
