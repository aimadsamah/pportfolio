'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useScrollReveal(once = true) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once })
  return { ref, isInView }
}
