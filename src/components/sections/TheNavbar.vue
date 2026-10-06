<script setup>
import { ref, watch } from 'vue'
import AppIcon from '../icons/AppIcon.vue'

const open = ref(false)
const links = [
  { label: 'Fitur', href: '#fitur' },
  { label: 'Untuk Sekolah', href: '#sekolah' },
  { label: 'Harga', href: '#harga' },
]

function closeMenu() {
  open.value = false
}

watch(open, (isOpen) => {
  document.documentElement.style.overflow = isOpen ? 'hidden' : ''
})
</script>

<template>
  <header class="sticky top-0 z-50 bg-paper/80 backdrop-blur-md">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#" class="flex items-center gap-2 text-lg font-extrabold tracking-tight">
        <AppIcon name="logo-owl" :size="26" class="text-navy" />
        Schoolify
      </a>

      <ul class="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="transition-colors hover:text-navy">{{ link.label }}</a>
        </li>
      </ul>

      <div class="hidden items-center gap-3 md:flex">
        <a
          href="#harga"
          class="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
        >
          Mulai Gratis
        </a>
      </div>

      <button
        class="relative z-50 md:hidden"
        :aria-expanded="open"
        aria-label="Buka menu navigasi"
        @click="open = !open"
      >
        <AppIcon :name="open ? 'close' : 'menu'" :size="24" />
      </button>
    </nav>

    <Transition name="slide-down">
      <div v-if="open" class="space-y-1 border-t border-line bg-paper px-6 py-4 md:hidden">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="block rounded-lg px-2 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-paper-dim hover:text-navy"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        <a
          href="#harga"
          class="mt-2 block rounded-full bg-navy px-5 py-2.5 text-center text-sm font-semibold text-white"
          @click="closeMenu"
        >
          Mulai Gratis
        </a>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
