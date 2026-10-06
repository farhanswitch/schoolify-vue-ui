<script setup>
defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 22 },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <g v-if="name === 'logo-owl'">
      <path d="M12 3c-3.3 0-5.5 2.3-5.5 5.6v4.6c0 3 2.3 5.3 5.5 5.3s5.5-2.3 5.5-5.3V8.6C17.5 5.3 15.3 3 12 3Z" />
      <circle cx="9.6" cy="10" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14.4" cy="10" r="1.1" fill="currentColor" stroke="none" />
      <path d="M12 12.4l-.8 1.3h1.6l-.8-1.3Z" fill="currentColor" stroke="none" />
      <path d="M3.5 7 6.5 9M20.5 7 17.5 9" />
    </g>

    <path v-else-if="name === 'mail'" d="M4 6h16v12H4V6Zm0 0 8 7 8-7" />

    <g v-else-if="name === 'mic'">
      <rect x="9.5" y="3" width="5" height="10" rx="2.5" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v3M9 20h6" />
    </g>

    <g v-else-if="name === 'camera'">
      <path d="M4 8h3l1.5-2h7L17 8h3v11H4V8Z" />
      <circle cx="12" cy="13.5" r="3.2" />
    </g>

    <path v-else-if="name === 'bar-chart'" d="M5 20V11M11 20V5M17 20v-7" />

    <g v-else-if="name === 'calculator'">
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M8 7h8M8 12h1M12 12h1M16 12h1M8 16h1M12 16h1M16 16h1" />
    </g>

    <path v-else-if="name === 'book'" d="M12 5.5C10.5 4.4 8 4 5 4v15c3 0 5.5.4 7 1.5 1.5-1.1 4-1.5 7-1.5V4c-3 0-5.5.4-7 1.5Zm0 0V20" />

    <g v-else-if="name === 'flask'">
      <path d="M10 3v6.3L5.5 18a2 2 0 0 0 1.8 2.9h9.4a2 2 0 0 0 1.8-2.9L14 9.3V3" />
      <path d="M9 3h6M7.5 15h9" />
    </g>

    <g v-else-if="name === 'globe'">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.3 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.3-3.4-8.5S9.8 5.8 12 3.5Z" />
    </g>

    <g v-else-if="name === 'palette'">
      <path d="M12 3.5a8.5 8 0 1 0 0 16c1 0 1.8-.8 1.8-1.8 0-.5-.2-.9-.5-1.3-.3-.3-.5-.7-.5-1.2 0-1 .8-1.7 1.7-1.7h2a3.5 3 0 0 0 3.5-3C20 6.8 16.4 3.5 12 3.5Z" />
      <circle cx="8" cy="10.5" r=".9" fill="currentColor" stroke="none" />
      <circle cx="11.5" cy="7.8" r=".9" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="9" r=".9" fill="currentColor" stroke="none" />
    </g>

    <g v-else-if="name === 'activity'">
      <circle cx="12" cy="5" r="1.8" />
      <path d="M12 7.5v5l-3 6M12 12.5l3 2 2.5 5M9 12l-3 1.5" />
    </g>

    <g v-else-if="name === 'laptop'">
      <rect x="5" y="4.5" width="14" height="9.5" rx="1" />
      <path d="M3 19h18l-2-3H5l-2 3Z" />
    </g>

    <g v-else-if="name === 'compass'">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.8 9.2 13 14l-4.8 1.8L10 11l4.8-1.8Z" />
    </g>

    <g v-else-if="name === 'music'">
      <circle cx="7" cy="18" r="2.2" />
      <circle cx="17" cy="16" r="2.2" />
      <path d="M9.2 18V5.5L19.2 4v12" />
    </g>

    <g v-else-if="name === 'landmark'">
      <path d="M4 10h16M5 10v9M9 10v9M15 10v9M19 10v9M3 21h18M12 3 3 8h18L12 3Z" />
    </g>

    <g v-else-if="name === 'lock'">
      <rect x="5" y="11" width="14" height="9" rx="1.5" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </g>

    <g v-else-if="name === 'users'">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M16 8.2A2.8 2.8 0 1 1 16.2 3M21 20c0-2.8-1.9-4.8-4.5-5.4" />
    </g>

    <path v-else-if="name === 'shield-check'" d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Zm-3.2 8 2.1 2.1 4.2-4.3" />

    <path v-else-if="name === 'link'" d="M9.5 14.5 14.5 9.5M10 7l1.3-1.3a3.3 3.3 0 0 1 4.7 4.7L14.7 11.7M14 17l-1.3 1.3a3.3 3.3 0 0 1-4.7-4.7L9.3 12.3" />

    <path v-else-if="name === 'menu'" d="M4 7h16M4 12h16M4 17h16" />

    <path v-else-if="name === 'close'" d="M6 6l12 12M18 6 6 18" />

    <g v-else-if="name === 'upload'">
      <path d="M12 15V4M8 8l4-4 4 4" />
      <path d="M4 15v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4" />
    </g>

    <g v-else-if="name === 'message'">
      <path d="M4 5h16v11H9l-4 4V16H4V5Z" />
      <path d="M8 9h8M8 12.5h5" />
    </g>

    <g v-else-if="name === 'quote'">
      <path d="M7 7.5c-1.8 0-3 1.4-3 3.3 0 1.8 1.2 3.2 3 3.2M7 7.5c0-1.6-.9-2.6-2.2-3M7 14c0 2.3-1.1 4-2.6 4.8M16 7.5c-1.8 0-3 1.4-3 3.3 0 1.8 1.2 3.2 3 3.2m0-6.5c0-1.6-.9-2.6-2.2-3m2.2 9.5c0 2.3-1.1 4-2.6 4.8" />
    </g>

    <g v-else-if="name === 'folder'">
      <path d="M4 6a1 1 0 0 1 1-1h4l2 2h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6Z" />
    </g>

    <g v-else-if="name === 'school'">
      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path d="M6 10.5V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5.5M21 8v6" />
    </g>
  </svg>
</template>
