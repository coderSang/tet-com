<template>
  <slot></slot>
</template>
<script setup lang="ts">
import { Object3D, Vector3 } from '@int/geotoolkit3d/THREE'
import { Grid } from '@int/geotoolkit3d/scene/grid/Grid'
import { Plot } from '@int/geotoolkit3d/Plot'
import { inject, onMounted } from 'vue'
import { INJECT_PLOT_KEY } from '@tet/constants'
import { propsMerge } from '@tet/utils'
import { defaultOptions } from './config'

const props = defineProps({
  options: Object
})

let finalOptions = propsMerge(defaultOptions, props.options)
const plot = inject<Plot>(INJECT_PLOT_KEY)

let grid: Grid
const setCameraDefault = () => {
  const setRootUserData = inject<(Object) => void>('setRootUserData')
  if (plot?.getCamera().position.equals(new Vector3(0, 0, 0))) {
    plot.setCameraLocation(finalOptions.end)
    plot.setCameraLookAt(finalOptions.start)
    setRootUserData?.({
      end: finalOptions.end,
      start: finalOptions.start
    })
  }
}
const createGrid = (finalOptions) => {
  const root = inject<() => Object3D>('getRoot')?.()
  grid = new Grid(finalOptions)
  root?.add(new Grid(finalOptions))
  setCameraDefault()
}

// 更新
const setOptions = (options) => {
  finalOptions = propsMerge(finalOptions, options)
  grid?.setOptions(finalOptions)
  plot?.invalidateObject()
}
const getInstance = () => {
  return grid
}
const create = (options) => {
  const mergeOptions = propsMerge(finalOptions, options)
  createGrid(mergeOptions)
}
onMounted(() => {
  create(finalOptions)
})

defineExpose({
  grid: getInstance,
  setOptions,
  create
})
</script>
