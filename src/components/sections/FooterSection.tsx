"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative z-10 border-t border-[#111]">
      <div className="px-[60px] pt-20 pb-16 max-sm:px-6">
        {/* Main row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-end mb-16">
          {/* Left — headline */}
          <div>
            <motion.p {...fadeUp()} className="section-label mb-6">
              Get in Touch
            </motion.p>
            <motion.h2
              {...fadeUp(0.06)}
              className="font-syne font-extrabold leading-[0.92] tracking-[-3px] text-white"
              style={{ fontSize: "clamp(44px, 7vw, 96px)" }}
            >
              Let's Build
              <br />
              Something <span className="text-blue-bright">Great.</span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.12)}
              className="text-gray-light text-[15px] leading-relaxed max-w-sm mt-6"
            >
              I'm open to full-time roles, freelance projects, and interesting
              collaborations. Let's talk.
            </motion.p>
          </div>

          {/* Right — actions */}
          <motion.div
            {...fadeUp(0.1)}
            className="flex flex-col items-start lg:items-end gap-5"
          >
            {/* Glowing email button */}
            <a
              href="mailto:imedsam4@gmail.com"
              className="btn-glow"
              style={{ animation: "glowPulse 3s ease-in-out infinite" }}
            >
              Say Hello ↗
            </a>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/aimadsamah"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-[11px] py-2.5 px-5 inline-flex items-center gap-2"
              >
                <span className="text-blue-bright opacity-60">◈</span>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/aimadsam/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-[11px] py-2.5 px-5 inline-flex items-center gap-2"
              >
                <span className="text-blue-bright opacity-60">◈</span>
                LinkedIn
              </a>
            </div>

            {/* Availability badge */}
            <motion.div
              className="flex items-center gap-2 font-mono text-[11px] text-gray-text tracking-[0.08em]"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                style={{ boxShadow: "0 0 6px #10b981" }}
              />
              Available for opportunities
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          {...fadeUp(0.2)}
          className="pt-8 border-t border-[#111] flex items-center justify-between flex-wrap gap-4"
        >
          <p className="font-mono text-[11px] text-gray-text tracking-[0.08em]">
            © {year} Aimad Samah. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-gray-text tracking-[0.05em]">
            Designed &amp; Built by{" "}
            <span className="text-blue-bright">Aimad Samah</span> — Algeria
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
