<script setup lang="ts">
import { TPlot } from '@tet/components'
import { TGrid } from '@tet/components'
</script>

<template>
  <div style="width: 900px; height: 900px">
    <t-plot ref="plotRef">
      <t-grid ref="tGridRef"></t-grid>
    </t-plot>
  </div>
</template>

<style scoped></style>
