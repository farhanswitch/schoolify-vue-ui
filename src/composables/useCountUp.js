import { ref, watch } from 'vue'

export function useCountUp(target, { trigger, duration = 1400, decimals = 0 } = {}) {
  const display = ref(decimals ? '0,0' : '0')

  function format(n) {
    if (decimals) return n.toFixed(decimals).replace('.', ',')
    return Math.round(n).toLocaleString('id-ID')
  }

  function run() {
    const start = performance.now()
    const from = 0
    const to = target

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      display.value = format(from + (to - from) * eased)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  watch(
    trigger,
    (visible) => {
      if (visible) run()
    },
    { immediate: true },
  )

  return { display }
}
