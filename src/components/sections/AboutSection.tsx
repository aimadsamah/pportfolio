"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TIMELINE } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

export function AboutSection() {
  return (
    <section id="about" className="relative z-10">
      {/* Divider */}
      <div className="mx-[60px] h-px bg-gradient-to-r from-transparent via-[#222] to-transparent max-sm:mx-6" />

      <div className="px-[60px] pt-28 pb-28 max-sm:px-6">
        <motion.div {...fadeUp()}>
          <SectionLabel>About &amp; Education</SectionLabel>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-start">
          {/* Left — bio */}
          <div>
            <motion.h2
              {...fadeUp(0.05)}
              className="font-syne font-bold leading-[1.08] tracking-[-1.5px] mb-6 text-white"
              style={{ fontSize: "clamp(32px, 3.8vw, 54px)" }}
            >
              Obsessed with craft
              <br />
              &amp; <span className="text-blue-bright">clean code.</span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.1)}
              className="text-gray-light leading-[1.8] mb-5 text-[15px]"
            >
              I'm a Full-Stack Web Developer based in Algeria, specializing in
              building high-quality digital experiences. My approach combines
              strong engineering fundamentals with an eye for detail that makes
              products feel polished.
            </motion.p>

            <motion.p
              {...fadeUp(0.14)}
              className="text-gray-light leading-[1.8] mb-8 text-[15px]"
            >
              Whether it's a pixel-perfect UI, a robust REST API, or a real-time
              data pipeline — I care deeply about every layer of the stack.
            </motion.p>

            <motion.span
              {...fadeUp(0.18)}
              className="inline-flex items-center gap-2 font-mono text-[12px] text-gray-text tracking-[0.05em]"
            >
              <span className="text-blue-bright text-[10px]">◎</span>
              Algeria
            </motion.span>

            {/* Stats row */}
            <motion.div
              {...fadeUp(0.22)}
              className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-[#111]"
            >
              {[
                { value: "4+", label: "Years Learning" },
                { value: "10+", label: "Projects Built" },
                { value: "8", label: "Tech Mastered" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-syne font-extrabold text-3xl text-white tracking-[-1px]">
                    {s.value}
                  </p>
                  <p className="font-mono text-[11px] text-gray-text uppercase tracking-[0.08em] mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — timeline */}
          <motion.div {...fadeUp(0.12)}>
            <div className="relative pl-7">
              {/* Vertical line */}
              <div
                className="absolute left-0 top-2 bottom-0 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, #3b82f6, transparent)",
                }}
              />

              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  className="relative mb-10 last:mb-0"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {/* Dot */}
                  <div className="absolute -left-[31px] top-[6px] w-2 h-2 rounded-full border-2 border-blue-bright bg-black" />

                  <p className="font-mono text-[11px] text-blue-bright tracking-[0.1em] mb-1.5">
                    {item.year}
                  </p>
                  <h3 className="font-syne font-bold text-[17px] text-white tracking-[-0.3px] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-gray-text leading-relaxed">
                    {item.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
