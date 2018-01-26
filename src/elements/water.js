import { SIZE_UNIT } from '../constants'

const buildWater = (map, { shapes }) => {
  const group = map.group()
  const water = group.rect(10000, 10000).fill('#c6ebfc').center(0, 0)
  const mask = group.mask().fill('grey').stroke({ width: SIZE_UNIT / 2, color: 'white' })

  shapes.forEach(({ points, subtract }) => {
    const polygon = group.polygon(points.map(p => p * SIZE_UNIT))

    if (subtract) {
      polygon.fill('black')
    }

    mask.add(polygon)
  })

  water.maskWith(mask)
}

export default buildWater
