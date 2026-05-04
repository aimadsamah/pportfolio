'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let raf: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.1)
      ringY = lerp(ringY, mouseY, 0.1)
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      raf = requestAnimationFrame(animate)
    }

    const addExpand = () => document.body.classList.add('cursor-expanded')
    const removeExpand = () => document.body.classList.remove('cursor-expanded')

    document.addEventListener('mousemove', onMouseMove)

    const targets = document.querySelectorAll(
      'a, button, [data-cursor-expand], .bento-tile, .project-card'
    )
    targets.forEach((el) => {
      el.addEventListener('mouseenter', addExpand)
      el.addEventListener('mouseleave', removeExpand)
    })

    // Use MutationObserver to catch dynamically added elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-cursor-expand], .bento-tile, .project-card').forEach((el) => {
        el.addEventListener('mouseenter', addExpand)
        el.addEventListener('mouseleave', removeExpand)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    raf = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
