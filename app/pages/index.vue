<script setup lang="ts">
const config = useRuntimeConfig()
const version = config.public.appVersion
</script>

<template>
  <div class="max-w-2xl m-auto">
    <h1 class="text-2xl font-bold text-center my-2">デジタルミニ時計 オーバーレイ</h1>
    <div>
      {{ version }}
    </div>
    <div class="bg-animate w-full h-[300px] relative">
      <MiniClock position="bottom-right" size="2160" />
    </div>
  </div>
</template>

<style scoped>
@keyframes bg-color-change {
  0% {
    background-color: black;
  }

  20% {
    background-color: red;
  }

  40% {
    background-color: green;
  }

  60% {
    background-color: blue;
  }

  80% {
    background-color: white;
  }

  100% {
    background-color: black;
  }
}

.bg-animate {
  animation: bg-color-change 15s infinite;
}
</style>
