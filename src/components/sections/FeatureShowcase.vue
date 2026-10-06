<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AppIcon from '../icons/AppIcon.vue'
import MascotOwl from '../MascotOwl.vue'
import PhoneMockup from '../PhoneMockup.vue'

const tabs = [
  {
    key: 'upload',
    label: 'Upload Materi',
    icon: 'upload',
    title: 'Unggah materi, Schoolify yang mengindeks.',
    desc: 'Guru unggah PDF, slide, atau dokumen modul sebanyak apa pun. Schoolify memecahnya jadi potongan terindeks dan membangun basis pengetahuan khusus mata pelajaran itu.',
  },
  {
    key: 'tanya',
    label: 'Tanya ke Materi',
    icon: 'message',
    title: 'Siswa tanya, jawaban dari materi kelas sendiri.',
    desc: 'Chat hanya menjawab dari dokumen yang diunggah guru di kelas itu — bukan dari internet bebas. Di luar cakupan materi, Schoolify bilang jujur tidak tahu.',
  },
  {
    key: 'sitasi',
    label: 'Sitasi & Rujukan',
    icon: 'quote',
    title: 'Setiap jawaban bisa ditelusuri sumbernya.',
    desc: 'Klik sitasi di jawaban, dokumen aslinya langsung terbuka dan menyorot kalimat persis yang dikutip. Tidak ada jawaban tanpa jejak.',
  },
  {
    key: 'kelas',
    label: 'Ruang Kelas per Mapel',
    icon: 'school',
    title: 'Satu ruang kelas, satu basis pengetahuan.',
    desc: 'Tiap mata pelajaran punya ruang sendiri: daftar dokumen, anggota kelas, dan riwayat tanya-jawab yang terpisah rapi.',
  },
]

const activeIndex = ref(0)
const sectionRef = ref(null)
const pinRef = ref(null)
let st

onMounted(() => {
  st = ScrollTrigger.create({
    trigger: sectionRef.value,
    start: 'top top+=72',
    end: '+=160%',
    pin: pinRef.value,
    onUpdate(self) {
      const idx = Math.min(tabs.length - 1, Math.floor(self.progress * tabs.length))
      activeIndex.value = idx
    },
  })
})

onBeforeUnmount(() => st?.kill())
</script>

<template>
  <section id="fitur" ref="sectionRef" class="relative mx-auto max-w-6xl px-6 py-24">
    <div ref="pinRef" class="grid gap-12 md:grid-cols-2">
      <div>
        <h2 class="text-3xl font-extrabold tracking-tight md:text-4xl">Begini cara kerjanya.</h2>
        <p class="mt-3 max-w-md text-muted">
          Dari dokumen yang guru unggah sampai jawaban bersitasi yang diterima siswa — empat langkah di satu alur.
        </p>

        <div class="mt-8 flex flex-wrap gap-2.5">
          <button
            v-for="(tab, i) in tabs"
            :key="tab.key"
            class="flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors"
            :class="
              activeIndex === i
                ? 'border-navy bg-navy text-white'
                : 'border-line bg-white text-muted hover:border-navy/40'
            "
            @click="activeIndex = i"
          >
            <AppIcon :name="tab.icon" :size="16" />{{ tab.label }}
          </button>
        </div>

        <Transition name="fade-up" mode="out-in">
          <div :key="activeIndex" class="mt-8 max-w-md">
            <h3 class="text-xl font-bold">{{ tabs[activeIndex].title }}</h3>
            <p class="mt-2 text-muted">{{ tabs[activeIndex].desc }}</p>
          </div>
        </Transition>
      </div>

      <div class="showcase-sticky relative flex justify-center pt-4">
        <div class="absolute -right-2 top-0 md:right-6">
          <MascotOwl :size="110" />
        </div>
        <PhoneMockup>
          <Transition name="fade-up" mode="out-in">
            <div :key="activeIndex" class="text-sm">
              <p class="text-xs font-semibold text-muted">{{ tabs[activeIndex].label }}</p>

              <template v-if="tabs[activeIndex].key === 'upload'">
                <p class="mt-3 font-bold">Mata Pelajaran: IPA</p>
                <div class="mt-3 space-y-2">
                  <div class="flex items-center justify-between rounded-xl bg-paper-dim px-3 py-2.5">
                    <span class="flex items-center gap-2">
                      <AppIcon name="folder" :size="15" />Modul-IPA-Bab1.pdf
                    </span>
                    <span class="text-xs font-semibold text-leaf">Siap dipakai</span>
                  </div>
                  <div class="flex items-center justify-between rounded-xl bg-paper-dim px-3 py-2.5">
                    <span class="flex items-center gap-2">
                      <AppIcon name="folder" :size="15" />Modul-IPA-Bab2.pdf
                    </span>
                    <span class="text-xs font-semibold text-leaf">Siap dipakai</span>
                  </div>
                  <div class="flex items-center justify-between rounded-xl bg-paper-dim px-3 py-2.5">
                    <span class="flex items-center gap-2">
                      <AppIcon name="folder" :size="15" />Modul-IPA-Bab3.pdf
                    </span>
                    <span class="text-xs font-semibold text-sky">Mengindeks…</span>
                  </div>
                </div>
                <p class="mt-4 text-xs text-muted">186 halaman terindeks dari 3 dokumen.</p>
              </template>

              <template v-else-if="tabs[activeIndex].key === 'tanya'">
                <div class="mt-3 ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-navy px-4 py-2.5 text-white">
                  Apa fungsi mitokondria?
                </div>
                <div class="mt-2 w-fit max-w-[90%] rounded-2xl rounded-bl-sm bg-paper-dim px-4 py-3">
                  <p class="text-muted">Mitokondria menghasilkan energi sel lewat respirasi seluler.</p>
                  <button class="mt-2 flex items-center gap-1.5 text-xs font-semibold text-sky">
                    <AppIcon name="quote" :size="13" />Modul-IPA-Bab2.pdf, hal. 8
                  </button>
                </div>
              </template>

              <template v-else-if="tabs[activeIndex].key === 'sitasi'">
                <div class="mt-3 flex items-center justify-between">
                  <p class="font-bold">Modul-IPA-Bab2.pdf</p>
                  <span class="text-xs text-muted">hal. 8</span>
                </div>
                <div class="mt-3 rounded-xl border border-line p-3 text-xs leading-relaxed text-muted">
                  Sel memerlukan energi untuk aktivitasnya.
                  <mark class="rounded bg-sun/30 px-0.5 text-ink">
                    Mitokondria menghasilkan energi sel lewat respirasi seluler
                  </mark>
                  dan sering disebut pembangkit tenaga sel.
                </div>
                <p class="mt-3 text-xs text-muted">Dibuka tepat di kalimat yang disitasi, bukan cuma nama file.</p>
              </template>

              <template v-else>
                <div class="mt-3 space-y-2">
                  <div class="flex items-center justify-between rounded-xl bg-paper-dim px-3 py-2.5">
                    <span>IPA · Kelas 9B</span>
                    <span class="text-xs text-muted">3 dok · 28 siswa</span>
                  </div>
                  <div class="flex items-center justify-between rounded-xl bg-paper-dim px-3 py-2.5">
                    <span>Matematika · Kelas 9B</span>
                    <span class="text-xs text-muted">5 dok · 28 siswa</span>
                  </div>
                  <div class="flex items-center justify-between rounded-xl bg-paper-dim px-3 py-2.5">
                    <span>Bahasa Indonesia · Kelas 9B</span>
                    <span class="text-xs text-muted">4 dok · 28 siswa</span>
                  </div>
                </div>
              </template>
            </div>
          </Transition>
        </PhoneMockup>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.35s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
