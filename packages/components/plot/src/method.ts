import { Plot } from '@int/geotoolkit3d/Plot'
import { provideTETWrapper, updateTETWrapper } from '@tet/utils'

export const userData = {}
export const injectMethod = (plot: Plot) => {
  const methods = {
    getRoot() {
      if (plot) {
        return plot.getRoot()
      }
    },
    setCompassObject() {
      if (plot) {
        return plot.getCompass()
      }
    },
    setRootUserData(configs) {
      if (plot) {
        for (const config in configs) {
          userData[config] = configs[config]
        }
      }
    }
  }
  for (const method in methods) {
    const func = provideTETWrapper(method)
    updateTETWrapper(func, methods[method])
  }
}
