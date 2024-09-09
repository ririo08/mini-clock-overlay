<script setup lang="ts">
const { format, position, size } = useClockSettings()

</script>

<template>
  <MiniClock :format="format" :position="position" :size="size" />
</template>

<style scoped></style>
