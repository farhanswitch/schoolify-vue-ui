<script setup>
import { ref } from 'vue'
import AppIcon from '../icons/AppIcon.vue'
import { useReveal } from '../../composables/useReveal'

const grid = ref(null)
useReveal(grid, { stagger: 0.1 })

const benefits = [
  {
    icon: 'quote',
    title: 'Jawaban selalu bersitasi',
    desc: 'Tidak ada jawaban tanpa rujukan. Siswa bisa menelusuri setiap klaim sampai ke kalimat asal di dokumen guru.',
  },
  {
    icon: 'shield-check',
    title: 'Guru tetap pegang kendali',
    desc: 'Hanya dokumen yang diunggah dan disetujui guru yang jadi sumber jawaban. Guru bisa cabut dokumen kapan saja.',
  },
  {
    icon: 'lock',
    title: 'Data sekolah tidak dibagikan',
    desc: 'Materi dan percakapan hanya bisa diakses anggota kelas terkait. Tidak dipakai untuk melatih model lain.',
  },
]
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-24">
    <h2 class="text-center text-3xl font-extrabold tracking-tight md:text-4xl">Dibuat biar sekolah bisa percaya.</h2>
    <div ref="grid" class="mt-12 grid gap-6 md:grid-cols-3">
      <div v-for="b in benefits" :key="b.title" class="rounded-2xl border border-line bg-white p-8">
        <AppIcon :name="b.icon" :size="26" />
        <h3 class="mt-4 text-lg font-bold">{{ b.title }}</h3>
        <p class="mt-2 text-sm text-muted">{{ b.desc }}</p>
      </div>
    </div>
  </section>
</template>
