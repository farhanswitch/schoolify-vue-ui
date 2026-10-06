<script setup>
import { ref } from 'vue'
import MascotOwl from '../MascotOwl.vue'
import { useReveal } from '../../composables/useReveal'

const panel = ref(null)
useReveal(panel)
</script>

<template>
  <section class="bg-paper-dim py-24">
    <div ref="panel" class="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
      <MascotOwl :size="140" />
      <h2 class="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">Mulai dari satu ruang kelas.</h2>
      <p class="mt-3 max-w-sm text-muted">
        Unggah materi, buka kelasnya, biarkan siswa bertanya. Setiap jawaban tetap bersumber dari materi gurumu
        sendiri.
      </p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#harga"
          class="rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Mulai Gratis
        </a>
        <a
          href="#sekolah"
          class="rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold transition-colors hover:border-navy"
        >
          Daftar untuk Sekolah
        </a>
      </div>
    </div>
  </section>
</template>
