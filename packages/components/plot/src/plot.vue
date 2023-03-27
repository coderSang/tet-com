<script setup lang="ts">
import { Plot } from '@int/geotoolkit3d/Plot'
import { onMounted, provide, ref } from 'vue'
import { propsMerge } from '@tet/utils'
import { INJECT_PLOT_KEY } from '@tet/constants'
import { defaultOptions } from './config'
import { injectMethod } from './method'

const props = defineProps({
  options: {
    type: Object
  }
})

const plotDom = ref()
const plotRef = ref<Plot>()
let plot: Plot

// 合并完的选项
let finalOptions = propsMerge(defaultOptions, props.options)
const createScene = (options, divElement = plotDom.value) => {
  plot = new Plot({
    ...options,
    container: divElement
  })
  return plot
}

const getInstance = () => {
  return plot
}
const create = (options) => {
  const mergeOptions = propsMerge(finalOptions, options)
  plotRef.value = createScene(mergeOptions)
}

// 设置
const setOptions = (config) => {
  finalOptions = propsMerge(finalOptions, config)
  plotRef?.value?.setOptions(finalOptions)
}

// 加载
onMounted(() => {
  create(finalOptions)
  injectMethod(plot)
  // 向下提供plot实例
  provide(INJECT_PLOT_KEY, plot)
})

defineExpose({
  plot: getInstance,
  setOptions,
  create
})
</script>
<template>
  <div
    ref="plotDom"
    :style="{ width: '100%', height: '100%', position: 'relative' }"
  ></div>
  <template v-if="plotRef">
    <slot></slot>
  </template>
</template>

<style scoped></style>
