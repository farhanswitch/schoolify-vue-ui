<script setup>
import { useCountUp } from '../../composables/useCountUp'
import { useInView } from '../../composables/useInView'

const { target, isVisible } = useInView({ threshold: 0.4 })

const stats = [
  { target: 2, suffix: ' detik', label: 'mencari jawaban di materi kelas', decimals: 0 },
  { target: 100, suffix: '%', label: 'jawaban bersitasi ke dokumen guru', decimals: 0 },
  { target: 10000, suffix: '+', label: 'halaman materi bisa diindeks per sekolah', decimals: 0 },
]

const counters = stats.map((s) => useCountUp(s.target, { trigger: isVisible, decimals: s.decimals }))
</script>

<template>
  <section ref="target" class="mx-auto max-w-6xl px-6 py-24">
    <div class="grid gap-10 md:grid-cols-3">
      <div v-for="(s, i) in stats" :key="s.label" class="text-center md:text-left">
        <p class="text-5xl font-extrabold tracking-tight md:text-6xl">
          {{ counters[i].display.value }}<span>{{ s.suffix }}</span>
        </p>
        <p class="mt-2 text-muted">{{ s.label }}</p>
      </div>
    </div>
  </section>
</template>
