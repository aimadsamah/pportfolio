'use client'

import { useRef, useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

interface MagneticOptions {
  strength?: number
  stiffness?: number
  damping?: number
}

export function useMagnetic(options: MagneticOptions = {}) {
  const { strength = 0.3, stiffness = 150, damping = 15 } = options
  const ref = useRef<HTMLElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness, damping })
  const springY = useSpring(y, { stiffness, damping })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      x.set((e.clientX - cx) * strength)
      y.set((e.clientY - cy) * strength)
    }

    const onMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)

    return () => {
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [x, y, strength])

  return { ref, x: springX, y: springY }
}
