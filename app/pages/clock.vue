<script setup lang="ts">
const { format, position, size, font } = useClockSettings()
</script>

<template>
  <MiniClock
    :format="format"
    :position="position"
    :size="size"
    :font="font"
  />
</template>

<style scoped></style>
