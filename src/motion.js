import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const QUERY = '(prefers-reduced-motion: reduce)'

export function motionEnabled() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return !window.matchMedia(QUERY).matches
}

/**
 * Reveals direct children of `ref` as the block scrolls into view.
 * @param {import('react').RefObject<HTMLElement>} ref
 * @param {{ stagger?: number, y?: number, start?: string }} options
 */
export function useScrollReveal(ref, options = {}) {
  const { stagger = 0.09, y = 26, start = 'top 82%' } = options

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (!motionEnabled()) return

    const targets = Array.from(node.children).filter(
      (child) => child instanceof HTMLElement,
    )
    if (!targets.length) return

    const section = node.closest('.section')

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          autoAlpha: 0,
          x: (index) => (index % 2 === 0 ? -8 : 8),
          y,
          scale: 0.985,
          filter: 'blur(5px)',
        },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.82,
          ease: 'power3.out',
          stagger,
          onComplete: () =>
            gsap.set(targets, {
              clearProps: 'transform,filter,opacity,visibility',
            }),
          scrollTrigger: {
            trigger: node,
            start,
            once: true,
            onEnter: () => section?.classList.add('is-revealed'),
          },
        },
      )
    }, node)

    return () => {
      section?.classList.remove('is-revealed')
      ctx.revert()
    }
  }, [ref, stagger, y, start])
}