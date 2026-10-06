<script setup>
import { ref } from 'vue'
import AppIcon from '../icons/AppIcon.vue'
import { useReveal } from '../../composables/useReveal'

const panel = ref(null)
useReveal(panel)

const members = [
  { name: 'Bu Sari', role: 'Guru · Pemilik' },
  { name: 'Dimas', role: 'Siswa' },
  { name: 'Ayu (Kamu)', role: 'Siswa' },
]
</script>

<template>
  <section id="sekolah" class="mx-auto max-w-6xl px-6 py-24">
    <div class="grid items-center gap-12 md:grid-cols-2">
      <div ref="panel" class="order-2 rounded-2xl border border-line bg-white p-6 shadow-sm md:order-1">
        <div class="flex items-center justify-between">
          <p class="font-bold">Kelas IPA · 9B</p>
          <span class="text-xs text-muted">3 dari 28 anggota</span>
        </div>
        <div class="mt-4 space-y-2.5">
          <div
            v-for="m in members"
            :key="m.name"
            class="flex items-center justify-between rounded-xl bg-paper-dim px-3 py-2.5 text-sm"
          >
            <span class="font-medium">{{ m.name }}</span>
            <span class="text-xs text-muted">{{ m.role }}</span>
          </div>
        </div>
        <div class="mt-4 flex items-center justify-between text-xs text-muted">
          <span class="flex items-center gap-1.5"><AppIcon name="folder" :size="14" />3 dokumen materi</span>
          <span class="flex items-center gap-1.5"><AppIcon name="link" :size="14" />Tautan undangan · 7 hari</span>
        </div>
      </div>

      <div class="order-1 md:order-2">
        <h2 class="text-3xl font-extrabold tracking-tight md:text-4xl">Satu ruang kelas, satu basis pengetahuan.</h2>
        <p class="mt-4 max-w-md text-muted">
          Guru buat ruang kelas per mata pelajaran, unggah materi, siswa gabung lewat tautan undangan. Dokumen,
          percakapan, dan riwayat sitasi semuanya terkunci di ruang itu saja.
        </p>
      </div>
    </div>
  </section>
</template>
