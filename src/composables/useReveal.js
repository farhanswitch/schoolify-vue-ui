import gsap from 'gsap'
import { onMounted } from 'vue'

export function useReveal(elRef, options = {}) {
  const { y = 32, duration = 0.9, delay = 0, stagger = 0 } = options

  onMounted(() => {
    const el = elRef.value
    if (!el) return
    const targets = stagger ? el.children : el

    gsap.set(targets, { opacity: 0, y })
    gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 82%',
        once: true,
      },
    })
  })
}
