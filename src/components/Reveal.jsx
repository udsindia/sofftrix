import { useEffect, useRef, useState } from 'react'

/**
 * Quiet scroll reveal. The hero inbox is the page's one piece of real motion;
 * everything else just fades up once and stays put.
 */
export default function Reveal({ as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal${shown ? ' is-in' : ''}${className ? ` ${className}` : ''}`}
      {...rest}
    />
  )
}
