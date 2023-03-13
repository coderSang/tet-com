import { CameraType } from '@int/geotoolkit3d/Plot'
import { Vector3 } from '@int/geotoolkit3d/THREE'

export const defaultConfig = {
  scale: new Vector3(1, 1, 1),
  renderer: {
    clearcolor: 'white',
    clearcoloralpha: 1
  },
  camera: {
    type: CameraType.Perspective,
    position: new Vector3(0, 0, 0),
    lookat: new Vector3(0, 0, 0)
  }
}
