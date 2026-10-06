<script setup>
import { ref } from 'vue'
import { useReveal } from '../../composables/useReveal'

const grid = ref(null)
useReveal(grid, { stagger: 0.1 })

const plans = [
  {
    name: 'Guru',
    tagline: 'Untuk satu kelas, satu mapel.',
    price: 'Rp 0',
    period: false,
    cta: 'Mulai Gratis',
    href: 'mailto:schoolify@farhanswitch.id?subject=Daftar%20Schoolify%20Gratis',
    highlight: false,
    features: ['1 ruang kelas', 'Hingga 50 halaman materi', 'Chat dengan sitasi'],
  },
  {
    name: 'Sekolah',
    tagline: 'Untuk semua mapel dan kelas.',
    price: 'Hubungi kami',
    period: false,
    cta: 'Jadwalkan Demo',
    href: 'mailto:schoolify@farhanswitch.id?subject=Jadwalkan%20Demo%20Schoolify%20Sekolah',
    highlight: true,
    features: ['Ruang kelas & mapel tak terbatas', 'Dasbor admin sekolah', 'Materi & halaman tanpa batas'],
  },
  {
    name: 'Dinas / Yayasan',
    tagline: 'Untuk naungan banyak sekolah.',
    price: 'Hubungi kami',
    period: false,
    cta: 'Jadwalkan Demo',
    href: 'mailto:schoolify@farhanswitch.id?subject=Jadwalkan%20Demo%20Schoolify%20Dinas',
    highlight: false,
    features: ['Multi-sekolah dalam satu akun', 'Single sign-on (SSO)', 'Laporan pemakaian gabungan'],
  },
]
</script>

<template>
  <section id="harga" class="mx-auto max-w-6xl px-6 py-24">
    <h2 class="text-center text-3xl font-extrabold tracking-tight md:text-4xl">Mulai dari satu kelas.</h2>
    <p class="mx-auto mt-3 max-w-md text-center text-muted">
      Coba gratis untuk satu ruang kelas. Upgrade saat sekolah siap pakai Schoolify di semua mata pelajaran.
    </p>

    <div ref="grid" class="mt-12 grid gap-6 md:grid-cols-3">
      <div
        v-for="p in plans"
        :key="p.name"
        class="rounded-2xl border p-8"
        :class="p.highlight ? 'border-navy bg-navy text-white' : 'border-line bg-white'"
      >
        <p class="text-lg font-bold">{{ p.name }}</p>
        <p class="mt-1 text-sm" :class="p.highlight ? 'text-white/60' : 'text-muted'">{{ p.tagline }}</p>
        <p class="mt-6 text-3xl font-extrabold">
          {{ p.price }}<span v-if="p.period" class="text-base font-medium">/bulan</span>
        </p>
        <ul class="mt-6 space-y-2.5 text-sm" :class="p.highlight ? 'text-white/80' : 'text-muted'">
          <li v-for="f in p.features" :key="f">· {{ f }}</li>
        </ul>
        <a
          :href="p.href"
          class="mt-8 block w-full rounded-full px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-105"
          :class="p.highlight ? 'bg-white text-navy' : 'bg-navy text-white'"
        >
          {{ p.cta }}
        </a>
      </div>
    </div>
  </section>
</template>
