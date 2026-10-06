<script setup>
import AppIcon from '../icons/AppIcon.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted md:flex-row">
      <div class="flex items-center gap-2 font-bold text-navy">
        <AppIcon name="logo-owl" :size="20" />Schoolify
      </div>
      <p>© {{ year }} Schoolify. LMS sekolah dengan RAG per mata pelajaran.</p>
      <a href="mailto:schoolify@farhanswitch.id" class="hover:text-navy">schoolify@farhanswitch.id</a>
    </div>
  </footer>
</template>
