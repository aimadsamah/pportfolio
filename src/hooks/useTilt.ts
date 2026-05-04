'use client'

import { useRef, useEffect } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

export function useTilt(intensity = 8) {
  const ref = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const springConfig = { stiffness: 120, damping: 20 }
  const x = useSpring(rawX, springConfig)
  const y = useSpring(rawY, springConfig)

  const rotateX = useTransform(y, [-0.5, 0.5], [`${intensity}deg`, `-${intensity}deg`])
  const rotateY = useTransform(x, [-0.5, 0.5], [`-${intensity}deg`, `${intensity}deg`])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      rawX.set((e.clientX - rect.left) / rect.width - 0.5)
      rawY.set((e.clientY - rect.top) / rect.height - 0.5)
    }

    const onMouseLeave = () => {
      rawX.set(0)
      rawY.set(0)
    }

    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)

    return () => {
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [rawX, rawY])

  return { ref, rotateX, rotateY }
}
