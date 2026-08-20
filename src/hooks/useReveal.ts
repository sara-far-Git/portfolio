import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element once it scrolls into view. Returns a ref instead of
 * rendering a wrapper, because the layout leans on `:first-child` and sibling
 * rules that an extra element would break.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  // Prerendered markup has no observer to reveal it, so it ships visible.
  const [visible, setVisible] = useState(() => typeof window === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}
