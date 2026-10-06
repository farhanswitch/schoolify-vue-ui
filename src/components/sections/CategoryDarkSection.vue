<script setup>
import { ref } from 'vue'
import AppIcon from '../icons/AppIcon.vue'
import PhoneMockup from '../PhoneMockup.vue'
import { useReveal } from '../../composables/useReveal'

const grid = ref(null)
useReveal(grid, { stagger: 0.06, y: 20 })

const subjects = [
  { icon: 'calculator', label: 'Matematika' },
  { icon: 'book', label: 'Bahasa' },
  { icon: 'flask', label: 'IPA' },
  { icon: 'globe', label: 'IPS' },
  { icon: 'palette', label: 'Seni' },
  { icon: 'activity', label: 'Olahraga' },
  { icon: 'laptop', label: 'Komputer' },
  { icon: 'compass', label: 'Agama' },
  { icon: 'music', label: 'Musik' },
  { icon: 'landmark', label: 'PKN' },
]
</script>

<template>
  <section class="bg-navy-dim py-24 text-white">
    <div class="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
      <div>
        <h2 class="text-3xl font-extrabold tracking-tight md:text-4xl">Tiap mapel, basis pengetahuannya sendiri.</h2>
        <p class="mt-3 max-w-md text-white/60">
          Dokumen yang guru unggah di satu mata pelajaran tidak tercampur ke mata pelajaran lain. Jawaban IPA tidak
          akan mengutip dokumen Matematika.
        </p>

        <div ref="grid" class="mt-10 grid grid-cols-5 gap-4">
          <div v-for="s in subjects" :key="s.label" class="flex flex-col items-center gap-2">
            <div class="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              <AppIcon :name="s.icon" :size="22" />
            </div>
            <span class="text-center text-[11px] text-white/50">{{ s.label }}</span>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <PhoneMockup dark>
          <p class="font-bold">Basis Pengetahuan</p>
          <div class="mt-3 rounded-xl bg-white/10 px-3 py-2">
            <input
              placeholder="Cari mata pelajaran"
              class="w-full bg-transparent text-xs outline-none placeholder:text-white/40"
            />
          </div>
          <p class="mt-4 text-xs text-white/40">4 mata pelajaran aktif di Kelas 9B</p>
          <div class="mt-3 space-y-2.5 text-sm">
            <div class="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2.5">
              <span class="flex items-center gap-2"><AppIcon name="flask" :size="16" />IPA</span>
              <span class="text-white/40">3 dokumen</span>
            </div>
            <div class="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2.5">
              <span class="flex items-center gap-2"><AppIcon name="calculator" :size="16" />Matematika</span>
              <span class="text-white/40">5 dokumen</span>
            </div>
            <div class="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2.5">
              <span class="flex items-center gap-2"><AppIcon name="book" :size="16" />Bahasa Indonesia</span>
              <span class="text-white/40">4 dokumen</span>
            </div>
          </div>
        </PhoneMockup>
      </div>
    </div>
  </section>
</template>
