<script setup>
import { ref } from 'vue'
import AppIcon from '../icons/AppIcon.vue'
import { useReveal } from '../../composables/useReveal'

const panel = ref(null)
useReveal(panel)

const suggestions = [
  {
    q: 'Apa penyebab gerhana bulan?',
    answer: 'Gerhana bulan terjadi saat bumi berada tepat di antara matahari dan bulan, menutupi cahaya matahari.',
    source: { doc: 'Modul-IPA-Bab4.pdf', page: 'hal. 21', before: 'Posisi ketiga benda langit ini sejajar.', mark: 'Gerhana bulan terjadi saat bumi berada tepat di antara matahari dan bulan, menutupi cahaya matahari', after: 'Peristiwa ini hanya terjadi saat bulan purnama.' },
  },
  {
    q: 'Rumus luas trapesium apa?',
    answer: 'Luas trapesium dihitung dengan ½ × (sisi sejajar a + sisi sejajar b) × tinggi.',
    source: { doc: 'Modul-Matematika-Bab2.pdf', page: 'hal. 14', before: 'Trapesium punya sepasang sisi sejajar.', mark: 'Luas trapesium dihitung dengan ½ × (sisi sejajar a + sisi sejajar b) × tinggi', after: 'Satuan luas mengikuti satuan panjang sisinya.' },
  },
  {
    q: 'Siapa penulis novel Laskar Pelangi?',
    answer: 'Novel Laskar Pelangi ditulis oleh Andrea Hirata, terbit pertama kali tahun 2005.',
    source: { doc: 'Modul-BahasaIndonesia-Bab1.pdf', page: 'hal. 6', before: 'Karya ini mengangkat kisah masa kecil di Belitung.', mark: 'Novel Laskar Pelangi ditulis oleh Andrea Hirata, terbit pertama kali tahun 2005', after: 'Buku ini kemudian diadaptasi jadi film.' },
  },
]

const active = ref(0)
const showSource = ref(false)

function selectQuestion(i) {
  active.value = i
  showSource.value = false
}
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-24">
    <div class="grid items-center gap-12 md:grid-cols-2">
      <div>
        <span class="inline-block rounded-full bg-sky/10 px-4 py-1.5 text-xs font-semibold text-sky">
          Chat RAG per mata pelajaran
        </span>
        <h2 class="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">Tanya apa saja soal materi kelas.</h2>
        <p class="mt-4 max-w-md text-muted">
          Schoolify menjawab dari dokumen yang diunggah guru di kelas itu. Coba klik salah satu pertanyaan, lalu klik
          sitasinya untuk lihat kalimat asal di dokumen.
        </p>
        <div class="mt-6 space-y-2.5">
          <button
            v-for="(s, i) in suggestions"
            :key="s.q"
            class="block w-full rounded-full border px-4 py-2.5 text-left text-sm font-medium transition-colors"
            :class="active === i ? 'border-navy bg-navy text-white' : 'border-line bg-white hover:border-navy'"
            @click="selectQuestion(i)"
          >
            {{ s.q }}
          </button>
        </div>
      </div>

      <div ref="panel" class="rounded-2xl border border-line bg-white p-5 shadow-sm">
        <Transition name="fade-up" mode="out-in">
          <div v-if="!showSource" key="chat" class="text-sm">
            <p class="text-xs font-semibold text-muted">Tanya Schoolify</p>
            <div class="mt-4 space-y-3">
              <div class="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-navy px-4 py-2.5 text-white">
                {{ suggestions[active].q }}
              </div>
              <div class="w-fit max-w-[90%] rounded-2xl rounded-bl-sm bg-paper-dim px-4 py-3">
                <p class="text-muted">{{ suggestions[active].answer }}</p>
                <button
                  class="mt-2 flex items-center gap-1.5 text-xs font-semibold text-sky hover:underline"
                  @click="showSource = true"
                >
                  <AppIcon name="quote" :size="13" />
                  {{ suggestions[active].source.doc }}, {{ suggestions[active].source.page }}
                </button>
              </div>
            </div>
          </div>

          <div v-else key="source" class="text-sm">
            <button class="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-navy" @click="showSource = false">
              <AppIcon name="link" :size="13" />Kembali ke jawaban
            </button>
            <div class="mt-3 flex items-center justify-between">
              <p class="font-bold">{{ suggestions[active].source.doc }}</p>
              <span class="text-xs text-muted">{{ suggestions[active].source.page }}</span>
            </div>
            <div class="mt-3 rounded-xl border border-line p-3 text-xs leading-relaxed text-muted">
              {{ suggestions[active].source.before }}
              <mark class="rounded bg-sun/30 px-0.5 text-ink">{{ suggestions[active].source.mark }}</mark>
              {{ suggestions[active].source.after }}
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.3s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
