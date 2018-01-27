import { SIZE_UNIT } from '../constants'
import smoothPath from '../utils/smoothPath'

const buildWater = (map, rawPoints) => {
  const points = rawPoints.map(([x, y, hard]) => [x * SIZE_UNIT, y * SIZE_UNIT, hard])
  const path = smoothPath(points, 2.5 * SIZE_UNIT)

  map
    .path(path)
    .fill('#c6ebfc')
    .opacity(0.5)
}

export default buildWater
