<script setup>
defineProps({
  dark: { type: Boolean, default: false },
})
</script>

<template>
  <div class="relative mx-auto w-[280px] rounded-[2.4rem] border-[6px] border-ink bg-ink p-2 shadow-2xl">
    <div class="absolute left-1/2 top-4 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink"></div>
    <div
      class="h-[560px] overflow-hidden rounded-[2rem] px-4 pb-4 pt-11 transition-colors duration-500"
      :class="dark ? 'bg-[#0f1115] text-white' : 'bg-white text-ink'"
    >
      <div class="flex items-center justify-between pb-3 text-[11px] font-semibold opacity-70">
        <span>9:41</span>
        <span>●●●</span>
      </div>
      <slot />
    </div>
  </div>
</template>
