<script setup lang="ts">
const { version } = useVersion()
const { format, position, size } = useClockSettings()
const { defaultFormat, defaultSize, defaultPosition } = useDefaultValue()

const url = computed(() => {
  const base = new URL(`${location.origin}${useRuntimeConfig().app.baseURL}clock`)
  const searchParams = new URLSearchParams({
    format: format.value!,
    position: position.value!,
    size: size.value!
  })
  base.search = searchParams.toString()
  return base.toString()
})

const urlName = computed(() => `フォーマット: ${format.value},サイズ: ${size.value}, 配置: ${position.value}`)
</script>

<template>
  <div class="max-w-2xl m-auto">
    <h1 class="text-2xl font-bold text-center my-2">デジタルミニ時計 オーバーレイ</h1>
    <div class="text-right text-lg">
      <a href="https://github.com/ririo08/mini-clock-overlay/releases" target="_blank">ver {{ version }}</a>
    </div>
    <div class="bg-animate w-full h-[300px] relative">
      <MiniClock :format="format" :position="position" :size="size" />
    </div>
    <div class="mt-2">
      <UFormGroup label="フォーマット" name="format">
        <USelectMenu v-model="format" :options="defaultFormat" />
      </UFormGroup>
      <UFormGroup label="サイズ" name="size">
        <USelectMenu v-model="size" :options="defaultSize" />
      </UFormGroup>
      <UFormGroup label="配置" name="position">
        <USelectMenu v-model="position" :options="defaultPosition" />
      </UFormGroup>
      <UFormGroup label="以下のリンクをコピーしてOBSに貼り付け！" name="position">
        <UButton :to="url">{{ urlName }}</UButton>
      </UFormGroup>
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
