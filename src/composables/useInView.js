import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useInView(options = { threshold: 0.25 }) {
  const target = ref(null)
  const isVisible = ref(false)
  let observer

  onMounted(() => {
    if (!target.value) return
    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    }, options)
    observer.observe(target.value)
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { target, isVisible }
}
