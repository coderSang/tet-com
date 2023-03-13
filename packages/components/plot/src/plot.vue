<script setup lang="ts">
import { Plot } from '@int/geotoolkit3d/Plot'
import { CompassAxis } from '@int/geotoolkit3d/scene/compass/CompassAxis'

import { onMounted, provide, ref } from 'vue'
import { propsMerge } from '@tet/utils'
import { INJECT_PLOT_KEY } from '@tet/constants'
import { defaultConfig } from './config'
import { provideTETWrapper, updateTETWrapper } from '@tet/utils'
const props = defineProps({
  config: {
    type: Object
  }
})

let finalConfig = propsMerge(defaultConfig, props.config)
const plotDom = ref()
const plot = ref()

provide(INJECT_PLOT_KEY, plot)
const createScene = (divElement) => {
  return new Plot({
    container: divElement
  })
}
const getInstance = () => {
  return plot.value
}
const methods = {
  getRoot(plot) {
    if (plot) {
      return plot.getRoot()
    }
  },
  setCompassObject(plot) {
    if (plot) {
      return plot.getCompass()
    }
  }
}
const getRoot = provideTETWrapper('getRoot')
const setCompassObject = provideTETWrapper('setCompassObject')
updateTETWrapper(getRoot, methods.getRoot)
updateTETWrapper(setCompassObject, methods.setCompassObject)
const setOptions = (config) => {
  finalConfig = propsMerge(finalConfig, config)
  plot?.value?.setOptions(finalConfig)
}
onMounted(() => {
  plot.value = createScene(plotDom.value)
  setOptions(finalConfig)
  // plot.value.getCompass().setCompassObject(new CompassAxis())
})
defineExpose({
  grid: getInstance,
  setOptions
})
</script>
<template>
  <div
    ref="plotDom"
    :style="{ width: '100%', height: '100%', position: 'relative' }"
  ></div>
  <template v-if="plot">
    <slot></slot>
  </template>
</template>

<style scoped></style>
