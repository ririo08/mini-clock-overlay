<script setup lang="ts">
import type { ClockConfig } from '~/composables/settings'

const config = defineProps<ClockConfig>()
const date = useNow()

// 日付フォーマット周りはそのまま
const format = computed(() => config.format ?? 'YYYY/MM/DD(ddd) HH:mm:ss')
const formattedDate = useDateFormat(date, format)

const ratio = computed(() => {
  const sizeNum = parseInt(config.size ?? '1080', 10)
  return sizeNum > 0 ? sizeNum / 1080 : 1
})

// ここでサイズ比率を計算（文字列→数値→1080基準の比率）
const fontSizeEm = computed(() => `${ratio.value}em`)

const paddingStyle = computed(() => ({
  padding: `${0.20 * ratio.value}em ${0.50 * ratio.value}em`,
}))

// 位置指定はこれまで通り
const position = computed(() => {
  switch (config.position) {
    case 'top-left': return { top: 0, left: 0 }
    case 'top-right': return { top: 0, right: 0 }
    case 'bottom-left': return { bottom: 0, left: 0 }
    case 'bottom-right':return { bottom: 0, right: 0 }
    default: return { top: 0, left: 0 }
  }
})
</script>

<template>
  <div
    class="absolute bg-orange-50/80 m-2 rounded-lg"
    :style="{ ...position, ...paddingStyle }"
  >
    <span
      class="font-bold date"
      :style="{ fontSize: fontSizeEm }"
    >
      {{ formattedDate }}
    </span>
  </div>
</template>

<style scoped>
.date {
  font-family: 'Roboto mono';
}
</style>
