<script setup>
import { ref } from 'vue'
import AppIcon from '../icons/AppIcon.vue'
import MascotOwl from '../MascotOwl.vue'
import PhoneMockup from '../PhoneMockup.vue'
import { useReveal } from '../../composables/useReveal'

const copy = ref(null)
useReveal(copy, { stagger: 0.12 })
</script>

<template>
  <section class="relative mx-auto max-w-6xl overflow-hidden px-6 pb-20 pt-16 md:pt-24">
    <div class="grid items-center gap-12 md:grid-cols-2">
      <div ref="copy">
        <span class="inline-block rounded-full bg-sun/15 px-4 py-1.5 text-xs font-semibold text-[#8a5a0f]">
          LMS sekolah dengan RAG per mata pelajaran
        </span>
        <h1 class="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          Materi gurumu. <br />Dijawab lengkap dengan sumbernya.
        </h1>
        <p class="mt-5 max-w-md text-lg text-muted">
          Guru unggah dokumen materi, Schoolify membangun basis pengetahuan per mata pelajaran. Siswa bertanya di
          chat, jawabannya selalu bersitasi — klik, langsung terbuka ke kalimat asal di dokumen.
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#harga"
            class="rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Mulai Gratis
          </a>
          <a
            href="#fitur"
            class="rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold transition-colors hover:border-ink"
          >
            Lihat Demo
          </a>
        </div>
      </div>

      <div class="relative flex justify-center">
        <div class="absolute -top-10 right-6 z-10 md:right-16">
          <MascotOwl :size="150" />
        </div>
        <PhoneMockup>
          <p class="text-xs font-semibold text-muted">Kelas 9B · IPA</p>
          <div class="mt-4 space-y-3 text-sm">
            <div class="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-ink px-4 py-2.5 text-white">
              Kenapa planet Mars kelihatan merah?
            </div>
            <div class="w-fit max-w-[90%] rounded-2xl rounded-bl-sm bg-paper-dim px-4 py-3">
              <p class="text-muted">
                Permukaan Mars mengandung oksida besi (karat) yang memantulkan cahaya kemerahan.
              </p>
              <button class="mt-2 flex items-center gap-1.5 text-xs font-semibold text-sky">
                <AppIcon name="quote" :size="13" />
                Modul IPA Bab 4, hal. 21
              </button>
            </div>
          </div>
        </PhoneMockup>
      </div>
    </div>
  </section>
</template>
