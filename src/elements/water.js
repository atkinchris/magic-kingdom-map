import { SIZE_UNIT } from '../constants'

const buildWater = (map, { points: rawPoints }) => {
  const points = rawPoints.map(p => p * SIZE_UNIT)
  map.polygon(points).fill('#c6ebfc').stroke({ width: 1, color: '#00aff2' })
}

export default buildWater
