<template>
  <slot></slot>
</template>
<script setup lang="ts">
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle'
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle'
import { Vector3 } from '@int/geotoolkit3d/THREE'
import { Grid } from '@int/geotoolkit3d/scene/grid/Grid'
import { Plot } from '@int/geotoolkit3d/Plot'
import { inject, Ref, ref } from 'vue'
import { INJECT_PLOT_KEY } from '@tet/constants'
import { propsMerge } from '@tet/utils'
import { CompassAxis } from '@int/geotoolkit3d/scene/compass/CompassAxis'

const props = defineProps({
  config: Object
})
const defaultConfig = {
  start: new Vector3(0, 0, 0),
  end: new Vector3(1000, 1000, 500),
  visible: true,
  grid: {
    linestyles: {
      x: new LineStyle({ color: 'darkgrey' }),
      y: new LineStyle({ color: 'darkgrey' }),
      z: new LineStyle({ color: 'darkgrey' })
    }
  },
  axis: {
    linestyles: {
      x: new LineStyle({ color: 'black' }),
      y: new LineStyle({ color: 'black' }),
      z: new LineStyle({ color: 'black' })
    },
    textstyles: {
      x: new TextStyle({ color: 'black' }),
      y: new TextStyle({ color: 'black' }),
      z: new TextStyle({ color: 'black' })
    }
  },
  title: {
    textstyles: {
      x: new TextStyle({ color: 'black' }),
      y: new TextStyle({ color: 'black' }),
      z: new TextStyle({ color: 'black' })
    },
    texts: {
      z: 'depth'
    }
  }
}
let finalConfig = propsMerge(defaultConfig, props.config)
const plot = inject<Ref<Plot>>(INJECT_PLOT_KEY)
const setCompassObject = inject('setCompassObject')
console.log(setCompassObject)
console.log(
  (setCompassObject as unknown as any).setCompassObject(new CompassAxis())
)
const grid = ref<Grid>()
grid.value = new Grid(finalConfig)
plot?.value.getRoot().add(grid.value)
// plot?.value.getRoot().userData.start = finalConfig.start
if (plot?.value.getCamera().position.equals(new Vector3(0, 0, 0))) {
  plot?.value.setCameraLocation(finalConfig.end)
  plot?.value.setCameraLookAt(finalConfig.start)
}
// 更新
const setOptions = (config) => {
  finalConfig = propsMerge(finalConfig, config)
  grid?.value?.setOptions(finalConfig)
  plot?.value.invalidateObject()
}
const getInstance = () => {
  return grid.value
}
defineExpose({
  grid: getInstance,
  setOptions
})
</script>
