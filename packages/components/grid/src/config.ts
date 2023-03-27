import { Vector3 } from '@int/geotoolkit3d/THREE'
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle'
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle'

export const defaultOptions = {
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
