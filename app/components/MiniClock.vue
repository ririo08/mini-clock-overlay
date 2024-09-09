<script setup lang="ts">
import type { ClockConfig } from '~/composables/settings';

const config = defineProps<ClockConfig>()

const date = useNow()

// config
const format = computed(() => config.format ?? 'YYYY/MM/DD(ddd) HH:mm:ss')
const formattedDate = useDateFormat(date, format)
const size = computed(() => {
  switch (config.size) {
    case '720': return 'text-sm'
    case '1080': return 'text-xl'
    case '2160': return 'text-2xl'
    default: return 'text-xl'
  }
})
const position = computed(() => {
  switch (config.position) {
    case 'top-left': return {
      top: 0,
      left: 0
    }
    case 'top-right': return {
      top: 0,
      right: 0
    }
    case 'bottom-left': return {
      bottom: 0,
      left: 0
    }
    case 'bottom-right': return {
      bottom: 0,
      right: 0
    }
    default: return {
      top: 0,
      left: 0
    }
  }
})

</script>

<template>
  <div class="absolute bg-orange-50/80 py-1 px-3 m-2 rounded-lg" :style="position">
    <span :class="`${size} font-bold date`">{{ formattedDate }}</span>
  </div>
</template>

<style scoped>
.date {
  font-family: 'Roboto mono';
}
</style>
